import * as Vue from 'vue'
import * as VueRouter from 'vue-router'
import * as jquery from 'jquery'
import App from './src/app'
import * as ElementUI from 'element-ui'
import './theme/index.css'
import './src/vendor'
import './src/style.css'
import routers from './src/routes'

Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: routers,
  //mode:'history',//切换路径模式，变成history模式,不然路径为/#/home
  // hashbang:true,
  // history:false,
  // saveScrollPosition:true,
  // scrollBehavior(to, from, savedPosition) {
  //     // if (savedPosition) {
  //     //   console.log(savedPosition)
  //     //   return savedPosition
  //     // } else {
  //     //   return { x: 0, y: 0 }
  //     // }
  //    return { x: 0, y: 0 }
  //   },
})

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

