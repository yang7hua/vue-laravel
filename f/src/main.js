import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Util from './lib/util'
Vue.use(Util)

//加载vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//加载自定义路由模块
import routes from './routes/index'
//创建router实例
const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
