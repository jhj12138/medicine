import Vue from 'vue'
import VueRouter from 'vue-router'

const Layout = () => import ('@/layout')
const notFount = () => import ('@/views/error404') // 404页面
const Home = () => import ('@/views/home') // 登录

// Standard


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Layout',
        component: Layout,
        redirect: '/home',
        children: [{
            path: 'home',
            name: '首页',
            component: Home
        }]
    },
    
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router