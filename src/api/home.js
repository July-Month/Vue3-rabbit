import request from '@/utils/request'

// 获取banner
export const getBannerAPI = () => {
  return request({
    url: '/home/banner'
  })
}
