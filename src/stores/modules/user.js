import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/api/user'

export const useUserStore = defineStore('XtxUser', () => {
  const userInfo = ref({})

  const getUserInfo = async (data) => {
    const res = await loginAPI(data)
    userInfo.value = res.result
  }
  return {
    userInfo,
    getUserInfo
  }
})
