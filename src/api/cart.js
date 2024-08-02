import request from '@/utils/request'

/**
 * @description: 修改购物车商品
 * @data { 
     count: 1 // 商品数量
     selected: true // 选中状态
   } 
  * @returns
 */
export const editCart = (data) => {
  return request({
    url: `/member/cart/${data.id}`,
    method: 'put',
    data
  })
}
