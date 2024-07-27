import axios from 'axios'

const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net'

const instance = axios.create({
  baseURL,
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => Promise.reject(err)
)

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default instance
