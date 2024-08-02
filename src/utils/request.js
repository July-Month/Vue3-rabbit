import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores'
import router from '@/router'

const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net'

const instance = axios.create({
  baseURL,
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 统一注入token
    const userStore = useUserStore()
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
    // console.log(111)
    ElMessage({
      type: 'error',
      message: err.response.data.message || '服务异常'
    })
    // token失效处理
    const userStore = useUserStore()

    if (err.response.status === 401) {
      userStore.removeUser()
      router.push('/login')
    }
    return Promise.reject(err)
  }
)

export default instance
