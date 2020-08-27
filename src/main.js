import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import md5 from 'js-md5'
import './plugins/axios.js'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)
Vue.use(Vant)

Vue.prototype.$md5 = md5


router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem('yzhToken') // 是否token
  if (to.path !== '/login' && !isLogin && from.path !== '/login') {
    next({
      path: '/login'
    })
  } else {
    next()
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
