import request from '@/utils/request'

// 获取banner
export const getBannerAPI = (params = {}) => {
  // 解构赋值的默认值， 默认为1，对象中有属性的话为对象中的属性
  const { distributionSite = '1' } = params
  return request({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const getNewAPI = () => {
  return request({
    url: '/home/new'
  })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return request({
    url: '/home/hot'
  })
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return request({
    url: '/home/goods'
  })
}
