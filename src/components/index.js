// 把components中的所有组件都进行全局注册
// 通过插件的方式
import XtxSku from './XtxSku/index.vue'
import ImageView from './ImageView/index.vue'

export const componentPlugin = {
  install(app) {
    app.component('XtxSku', XtxSku)
    app.component('ImageView', ImageView)
  }
}
