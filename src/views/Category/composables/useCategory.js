// 封装分类数据相关的业务代码
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getCategoryAPI } from '@/api/category'

export const useCategory = () => {
  const route = useRoute()

  const categoryData = ref({})
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI({ id })
    categoryData.value = res.result
  }

  return {
    categoryData,
    getCategory
  }
}
