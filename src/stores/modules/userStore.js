import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/api/user'
import { useCartStore } from '@/stores'

export const useUserStore = defineStore(
  'XtxUser',
  () => {
    const cartStore = useCartStore()

    const userInfo = ref({})

    const getUserInfo = async (data) => {
      const res = await loginAPI(data)
      userInfo.value = res.result
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
