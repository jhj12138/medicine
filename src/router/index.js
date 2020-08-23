import Vue from 'vue'
import VueRouter from 'vue-router'

const Layout = () => import ('@/layout')
const notFount = () => import ('@/views/error404') // 404页面
const Home = () => import ('@/views/Home') // 首页
const Mine = () => import('@/views/Mine') //展商中心
const Evemanage = () => import('@/views/eveManage') //参展人员管理
const Evedail = () => import('@/views/eveDail') //参展人员管理详情
const Eveadd = () => import('@/views/eveAdd') //参展人员管理添加人员
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
        },{
            path: 'mine',
            name: '展商中心',
            component: Mine
        },{
            path: 'evemanage',
            name: '参展人员管理',
            component: Evemanage
        },{
            path: 'evedail',
            name: '参展人员管理详情',
            component: Evedail
        },{
            path: 'eveadd',
            name: '参展人员管理添加人员',
            component: Eveadd
        }]
    },
    
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router