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

    return {
      cartList,
      total,
      totalPrice,
      addCart,
      delCart,
      singleCheck
    }
  },
  {
    persist: true
  }
)
