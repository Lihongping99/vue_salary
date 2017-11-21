import Vue from 'vue'
import Router from 'vue-router'
import About from '../views/About'
import Setting from '../views/Setting'
import Index from '../views/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/setting',
      name:'Setting',
      component:Setting
    },
    {
      path:'/about',
      name:'About',
      component:About
    }
  ]
})
