// 引入初始化样式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import pinia from '@/stores'

import App from './App.vue'
import router from './router'
// 引入懒加载指令插件并且注册
import { lazyPlugin } from '@/directives'
// 注册全局组件插件
import { componentPlugin } from '@/components/index.js'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')
