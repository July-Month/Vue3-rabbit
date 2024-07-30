import request from '@/utils/request'

export const getGoodDetailAPI = (params) => {
  return request({
    url: '/goods',
    params
  })
}
