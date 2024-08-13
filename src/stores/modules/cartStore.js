import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useUserStore } from '../index'
import { insertCartAPI, getCartListAPI, delCartAPI } from '@/api/cart'

export const useCartStore = defineStore(
  'XtxCart',
  () => {
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)

    const cartList = ref([])

    // 获取最新购物车列表action
    const getCartList = async () => {
      const res = await getCartListAPI()
      cartList.value = res.result
    }
    // 添加购物车
    const addCart = async (goods) => {
      const { skuId, count } = goods
      if (isLogin.value) {
        // 登陆之后的加入购物车逻辑
        await insertCartAPI({ skuId, count })
        getCartList()
      } else {
        // d添加购物车
        // 已添加过 - count + 1
        // 未添加过 - push
        const isAdd = cartList.value.find((item) => item.skuId === goods.skuId)
        if (isAdd) {
          isAdd.count++
        } else {
          cartList.value.push(goods)
        }
      }
    }
    // 删除购物车
    const delCart = async (skuId) => {
      if (isLogin.value) {
        // 调用接口实现购物车得删除功能
        await delCartAPI({
          ids: [skuId]
        })
        getCartList()
      } else {
        cartList.value = cartList.value.filter((item) => item.skuId !== skuId)
      }
    }

    // 单选功能
    const singleCheck = (selected, skuId) => {
      cartList.value.find((item) => item.skuId === skuId).selected = selected
    }
    // 全选控制单选
    const allCheck = (selected) => {
      cartList.value.forEach((item) => (item.selected = selected))
    }

    // 总数
    const total = computed(() => {
      return cartList.value.reduce((sum, item) => sum + item.count, 0)
    })
    // 总价
    const totalPrice = computed(() => {
      return cartList.value
        .reduce((sum, item) => sum + item.price * item.count, 0)
        .toFixed(2)
    })
    // 是否全选
    const isAll = computed(() => cartList.value.every((item) => item.selected))
    // 选中的总数
    const checkTotal = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((sum, item) => sum + item.count, 0)
    )
    // 选中的商品总价
    const checkTotalPrice = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((sum, item) => sum + item.count * item.price, 0)
        .toFixed(2)
    )

    return {
      cartList,
      total,
      totalPrice,
      isAll,
      checkTotal,
      checkTotalPrice,
      addCart,
      delCart,
      singleCheck,
      allCheck
    }
  },
  {
    persist: true
  }
)
