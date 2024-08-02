import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
// 1. 导入对应包
// import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      // 1. 配置 ElementPlus采用sass样式配色系统 这个可以配合 css选项使用
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })]
      // resolvers: [ElementPlusResolver()]
    })
    // 2.按需定制主题配置
    // ElementPlus({
    //   useSource: true
    // })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  //
  css: {
    preprocessorOptions: {
      scss: {
        // 3. 自动导入定制化样式文件进行样式覆盖
        additionalData: `
          @use "@/styles/element/index.scss" as *;
          @use "@/styles/var.scss" as *;
        `
      }
    }
  }
})
