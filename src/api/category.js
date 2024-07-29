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

/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id
 * @return {*}
 */
export const getCategoryFilterAPI = (params) => {
  return request({
    url: '/category/sub/filter',
    params
  })
}

/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {
  return request({
    url: '/category/goods/temporary',
    method: 'POST',
    data
  })
}
