import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores'
const userStore = useUserStore()

const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net'

const instance = axios.create({
  baseURL,
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 统一注入token
    const token = userStore.userInfo.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
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
    // 统一处理错误提示
    ElMessage({
      type: 'warning',
      message: err.response.data.message
    })
    return Promise.reject(err)
  }
)

export default instance
