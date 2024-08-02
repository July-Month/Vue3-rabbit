import { defineStore } from 'pinia'
import { ref } from 'vue'

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

    return {
      cartList,
      addCart
    }
  },
  {
    persist: true
  }
)
