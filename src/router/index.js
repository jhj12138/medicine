import Vue from 'vue'
import VueRouter from 'vue-router'

const Layout = () => import ('@/layout')
const notFount = () => import ('@/views/error404') // 404页面
const Home = () => import ('@/views/Home') // 首页
const Mine = () => import('@/views/Mine') //展商中心
const Evemanage = () => import('@/views/eveManage') //参展人员管理
const Evedail = () => import('@/views/eveDail') //参展人员管理详情
const Eveadd = () => import('@/views/eveAdd') //参展人员管理添加人员
const Certifcate = () => import('@/views/certifcate') //证书管理
const Cerdetail = () => import('@/views/certDetail') //上传证书
const Message = () => import('@/views/message') //站内信
const Commodity = () => import('@/views/commodity') //商品管理
const Standmage = () => import('@/views/standMage') //展位管理
const ComRel = () => import('@/views/comRel') //商品发布
const Contform = () => import('@/views/contForm') //联系表单
const Invoice = () => import('@/views/invoice') //发票信息
const InvDetail = () => import('@/views/invDetail') //发票管理
const AccInform = () => import('@/views/accInform') //账户信息
const UseStudy = () => import('@/views/useStudy') //我学习的课程
const UseCourse = () => import('@/views/useCourse') //我的课程评论
const UseOffline = () => import('@/views/useOffline') //报名的线下活动
const UseMessage = () => import('@/views/useMessage') //用户站内信
const UseCare = () => import('@/views/useCare') //我关注的商品
const UseAttend = () => import('@/views/useAttend') //我参加的展会
const UseInform = () => import('@/views/useInform') //用户个人信息
const ChangePass = () => import('@/views/changePass') //用户修改密码
const ForeCoop = () => import('@/views/foreCoop') //国外合作
const PurTrans = () => import('@/views/purTrans') //采购交易
const News = () => import('@/views/news') //新闻动态
const ExhSearch = () => import('@/views/exhSearch') //展商搜索列表
const SurrTraffic = () => import('@/views/surrTraffic') //周边交通
const CaterHotel = () => import('@/views/caterHotel') //周边餐饮酒店
const Problem = () => import('@/views/problem') //常见问题
const HighIevel = () => import('@/views/highIevel') //高层次人才服务
const Login = () => import('@/views/login') //登录
const RetPassword = () => import('@/views/retPassword') //找回密码
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
        },{
            path: 'certifcate',
            name: '证书管理',
            component: Certifcate
        },{
            path: 'message',
            name: '站内信',
            component: Message
        },{
            path: 'commodity',
            name: '商品管理',
            component: Commodity
        },{
            path: 'cerdetail',
            name: '上传证书',
            component: Cerdetail
        },{
            path: 'standmage',
            name: '展位管理',
            component: Standmage
        },{
            path: 'comrel',
            name: '商品发布',
            component: ComRel
        },{
            path: 'contform',
            name: '联系表单',
            component: Contform
        },{
            path: 'invoice',
            name: '发票信息',
            component: Invoice
        },{
            path: 'invdetail',
            name: '发票管理',
            component: InvDetail
        },{
            path: 'accinform',
            name: '账户信息',
            component: AccInform
        },{
            path: 'usestudy',
            name: '学习的课程',
            component: UseStudy
        },{
            path: 'usecourse',
            name: '课程评论',
            component: UseCourse
        },{
            path: 'useoffline',
            name: '报名的线下活动',
            component: UseOffline
        },{
            path: 'usemessage',
            name: '用户站内信',
            component: UseMessage
        },{
            path: 'usecare',
            name: '关注的商品',
            component: UseCare
        },{
            path: 'useattend',
            name: '参加的展会',
            component: UseAttend
        },{
            path: 'useinform',
            name: '用户个人信息',
            component: UseInform
        },{
            path: 'changepass',
            name: '用户修改密码',
            component: ChangePass
        },{
            path: 'forecoop',
            name: '国外合作',
            component: ForeCoop
        },{
            path: 'purtrans',
            name: '采购交易',
            component: PurTrans
        },{
            path: 'news',
            name: '新闻动态',
            component: News
        },{
            path: 'exhsearch',
            name: '展商搜索列表',
            component: ExhSearch
        },{
            path: 'surrtraffic',
            name: '周边交通',
            component: SurrTraffic
        },{
            path: 'caterhotel',
            name: '周边餐饮酒店',
            component: CaterHotel
        },{
            path: 'problem',
            name: '常见问题',
            component: Problem
        },{
            path: 'highievel',
            name: '高层次人才服务',
            component: HighIevel
        },{
            path: 'login',
            name: '登录',
            component: Login
        },{
            path: 'retpassword',
            name: '找回密码',
            component: RetPassword
        },{
            path: 'retpassword',
            name: '找回密码',
            component: RetPassword
        }]
    },
    
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router