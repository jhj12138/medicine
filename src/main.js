import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import md5 from 'js-md5'
import './plugins/axios.js'
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

Vue.prototype.$md5 = md5

// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.getItem('qsToken') // 是否token
//   if (to.path !== '/login' && !isLogin) {
//     next({
//       path: '/login'
//     })
//   } else {
//     next()
//   }
// })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
