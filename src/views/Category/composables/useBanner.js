// 封装banner轮播图相关的业务代码
import { ref } from 'vue'
import { getBannerAPI } from '@/api/home'

export const useBanner = () => {
  const bannerList = ref([])
  const getBanner = async () => {
    const res = await getBannerAPI({ distributionSite: '2' })
    bannerList.value = res.result
  }
  getBanner()

  return {
    bannerList
  }
}
