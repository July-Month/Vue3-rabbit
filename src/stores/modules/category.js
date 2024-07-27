import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCategoryAPI } from '@/api/layout'

export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref([])
  const getCategoryList = async () => {
    const { data } = await getCategoryAPI()
    categoryList.value = data.result
  }

  return {
    categoryList,
    getCategoryList
  }
})
