import request from '@/utils/request'

/**
 * @description: 修改购物车商品
 * @data { 
     count: 1 // 商品数量
     selected: true // 选中状态
   } 
  * @returns
 */
export const editCartAPI = (data) => {
  return request({
    url: `/member/cart/${data.id}`,
    method: 'put',
    data
  })
}

/**
 * @description: 加入购物车
 * @data { 
     skuId:  // 商品sku的id
     count: 1 // 数量
   } 
  * @returns
 */
export const insertCartAPI = (data) => {
  return request({
    url: '/member/cart',
    method: 'POST',
    data
  })
}

/**
 * @description: 获取购物车列表
 * @params {*}
 * @returns
 */
export const getCartListAPI = () => {
  return request({
    url: '/member/cart'
  })
}
