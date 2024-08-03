import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore(
  'XtxCart',
  () => {
    const cartList = ref([])
    const addCart = (goods) => {
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
    // 删除购物车
    const delCart = (skuId) => {
      cartList.value = cartList.value.filter((item) => item.skuId !== skuId)
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
