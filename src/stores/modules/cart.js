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

    const total = computed(() => {
      return cartList.value.reduce((sum, item) => sum + item.count, 0)
    })
    const totalPrice = computed(() => {
      return cartList.value
        .reduce((sum, item) => sum + item.price * item.count, 0)
        .toFixed(2)
    })

    return {
      cartList,
      addCart,
      total,
      totalPrice
    }
  },
  {
    persist: true
  }
)
