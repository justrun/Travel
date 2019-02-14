import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/home/Home'
// import City from '@/pages/city/City'
// import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    // component: Home
    component: ()=> import('@/pages/home/Home') // 异步加载组件 而非首页即全部加载
  }, {
    path: '/city',
    name: 'City',
    //component: City
    component: ()=> import('@/pages/city/City')
  }, {
    path: '/detail/:id',
    name: 'Detail',
    // component: Detail
    component: ()=> import('@/pages/detail/Detail')
  }],
  // 每次进入一个路由页面 均滚动在初始位置 避免sap应用不同场景的滚动相互干扰
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
