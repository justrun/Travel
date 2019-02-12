// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 300ms延迟解决
// Travel$ npm install fastclick --save
import fastClick from 'fastclick'
// 轮播组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
// import './assets/styles/reset.css'
import 'styles/reset.css'
// 处理1px 1像素边框
import 'styles/border.css'
import 'styles/iconfont.css'
// 轮播组件 require styles
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
