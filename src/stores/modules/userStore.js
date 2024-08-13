import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/api/user'
import { useCartStore } from '@/stores'
import { mergeCartAPI } from '@/api/cart'

export const useUserStore = defineStore(
  'XtxUser',
  () => {
    const cartStore = useCartStore()

    const userInfo = ref({})

    const getUserInfo = async (data) => {
      const res = await loginAPI(data)
      userInfo.value = res.result
      // 合并购物车
      const mergeData = cartStore.cartList.map((item) => {
        return {
          skuId: item.skuId,
          selected: item.selected,
          count: item.count
        }
      })
      await mergeCartAPI(mergeData)
      cartStore.getCartList()
    }
    const removeUser = () => {
      userInfo.value = {}
      cartStore.clearCart()
    }
    return {
      userInfo,
      getUserInfo,
      removeUser
    }
  },
  {
    persist: true
  }
)
