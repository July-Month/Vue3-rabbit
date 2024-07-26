import request from '@/utils/request'

export const testGetCategory = () => {
  return request({
    url: 'home/category/head'
  })
}
