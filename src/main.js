// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'font-awesome-webpack'

import store from './vuex'
// 按 es6 的规范 import * as obj from "xxx" 会将 "xxx" 中所有 export 导出的内容组合成一个对象返回
import * as filters from './filters'

Vue.config.productionTip = false

// 注册全局过滤器
Object.keys(filters).forEach(key=>{
  Vue.filter(key,filters[key])
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
