// 引入初始化样式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import pinia from '@/stores'

import App from './App.vue'
import router from './router'
import { useIntersectionObserver } from '@vueuse/core'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')

// 定义全局指令

app.directive('img-lazy', {
  mounted(el, binding) {
    // el: 指令绑定的那个元素
    // binding: binding.value  指令 = 号 后面绑定的表达式的值
    useIntersectionObserver(el, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        // 图片进入视口区域
        el.src = binding.value
      }
    })
  }
})
