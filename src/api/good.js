import request from '@/utils/request'

/**
 * @description: 获取商品详情
 * @param {*} params
 * @returns
 */
export const getGoodDetailAPI = (params) => {
  return request({
    url: '/goods',
    params
  })
}

/**
 * 获取热榜商品
 * @param {Number} id - 商品id
 * @param {Number} type - 1代表24小时热销榜 2代表周热销榜
 * @param {Number} limit - 获取个数
 */
export const getHotGoodsAPI = (params) => {
  return request({
    url: '/goods/hot',
    params
  })
}
