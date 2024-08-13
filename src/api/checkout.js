import request from '@/utils/request'

// 获取订单详情
export const getCheckInfoAPI = () => {
  return request({
    url: '/member/order/pre'
  })
}

// 创建订单
export const createOrderAPI = (data) => {
  return request({
    url: 'member/order',
    method: 'post',
    data
  })
}
