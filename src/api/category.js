import request from '@/utils/request'

/**
 * @description: 获取二级分类列表
 * @param {*} params
 * @returns
 */
export const getCategoryAPI = (params) => {
  return request({
    url: '/category',
    params
  })
}
