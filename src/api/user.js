import request from '@/utils/request'

/**
 * @description: 登录
 * @param account 用户名或手机号
 * @param password 密码
 * @returns
 */
export const loginAPI = (data) => {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export const getLikeListAPI = ({ limit = 4 }) => {
  return request({
    url: '/goods/relevant',
    params: {
      limit
    }
  })
}
