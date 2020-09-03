import Vue from 'vue'
import VueRouter from 'vue-router'

const Layout = () => import ('@/layout')
const notFount = () => import ('@/views/error404') // 404页面
const Home = () => import ('@/views/Home') // 首页
const Mine = () => import('@/views/exhibitor/Mine') //展商中心
const Evemanage = () => import('@/views/exhibitor/eveManage') //参展人员管理
const Evedail = () => import('@/views/exhibitor/eveDail') //参展人员管理详情
const Eveadd = () => import('@/views/exhibitor/eveAdd') //参展人员管理添加人员
const Certifcate = () => import('@/views/exhibitor/certifcate') //证书管理
const Cerdetail = () => import('@/views/exhibitor/certDetail') //上传证书
const Message = () => import('@/views/exhibitor/message') //站内信
const Commodity = () => import('@/views/exhibitor/commodity') //商品管理
const Standmage = () => import('@/views/exhibitor/standMage') //展位管理
const ComRel = () => import('@/views/exhibitor/comRel') //商品发布
const Contform = () => import('@/views/exhibitor/contForm') //联系表单
const Invoice = () => import('@/views/exhibitor/invoice') //发票信息
const InvDetail = () => import('@/views/exhibitor/invDetail') //发票管理
const AccInform = () => import('@/views/exhibitor/accInform') //账户信息
const UseStudy = () => import('@/views/user/useStudy') //我学习的课程
const UseCourse = () => import('@/views/user/useCourse') //我的课程评论
const UseOffline = () => import('@/views/user/useOffline') //报名的线下活动
const UseMessage = () => import('@/views/user/useMessage') //用户站内信
const UseCare = () => import('@/views/user/useCare') //我关注的商品
const UseAttend = () => import('@/views/user/useAttend') //我参加的展会
const UseInform = () => import('@/views/user/useInform') //用户个人信息
const ChangePass = () => import('@/views/changePass') //用户修改密码
const ForeCoop = () => import('@/views/international/foreCoop') //国外合作
const PurTrans = () => import('@/views/purTrans') //采购交易
const News = () => import('@/views/news') //新闻动态
const ExhSearch = () => import('@/views/exhSearch') //展商搜索列表
const SurrTraffic = () => import('@/views/peripheral/surrTraffic') //周边交通
const CaterHotel = () => import('@/views/peripheral/caterHotel') //周边餐饮酒店
const Problem = () => import('@/views/peripheral/problem') //常见问题
const HighIevel = () => import('@/views/international/highIevel') //高层次人才服务
const Login = () => import('@/views/login') //登录
const RetPassword = () => import('@/views/retPassword') //找回密码
const Register = () => import('@/views/register') //注册
const Newsform = () => import('@/views/newsForm') //新闻详情
const AcdeTails = () => import('@/views/active/acdeTails') //活动详情
const OriTails = () => import('@/views/international/oriTails') //国内详情
const ExTails = () => import('@/views/peripheral/exTails') //展会介绍
const HotCourse = () => import('@/views/theme/hotCourse') //热门课程
const Inter = () => import('@/views/user/inter') //我感兴趣的
const Inraim = () => import('@/views/user/inraim') //参观展会的目的
const Exam = () => import('@/views/user/exam') //疫情防控调查
const EnterFor = () => import('@/views/user/enterFor') //报名参加
const DataDownLoad = () => import('@/views/peripheral/dataDownLoad') //资料下载
const domeCoop = () => import('@/views/international/domeCoop') //国内合作
const oriTaOut = () => import('@/views/international/oriTaOut') //国外详情
const exChange = () => import('@/views/active/exChange') //交流活动
const offlineActive = () => import('@/views/active/offlineActive') //交流活动
const offlineDetail = () => import('@/views/active/offlineDetail') //线下的活动详情
const themeList = () => import('@/views/theme/themeList') //主题培训
const Onlinex = () => import('@/views/onlinex') //网上展厅
const Search = () => import('@/views/search') //搜索
const exhibitionxq = () => import('@/views/search/exhibitionxq') //展商
const comdetail = () => import('@/views/search/comDetail') //商品详情
// const newsform = () => import('@/views/newsform') 
// Standard 


Vue.use(VueRouter)

// 解决点击当前页面报错的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (location, onResolve, onReject) {
//   if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
//   return originalPush.call(this, location).catch(err => err)
// }

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
            path: 'register',
            name: '注册',
            component: Register
        },{
            path: 'newsform',
            name: '新闻详情',
            component: Newsform
        },{
            path: 'acdetails',
            name: '交流活动详情',
            component: AcdeTails
        },{
            path: 'oritails',
            name: '国内外详情',
            component: OriTails
        },{
            path: 'extails',
            name: '展会介绍',
            component: ExTails
        },{
            path: 'hotcourse',
            name: '热门课程',
            component: HotCourse
        },{
            path: 'inter',
            name: '我感兴趣的',
            component: Inter
        },{
            path: 'inraim',
            name: '参观展会的目的',
            component: Inraim
        },{
            path: 'exam',
            name: '疫情防控调查',
            component: Exam
        },{
            path: 'enterfor',
            name: '报名参加',
            component: EnterFor
        },{
            path: 'download',
            name: '资料下载',
            component: DataDownLoad
        },{
            path: 'domecoop',
            name: '国内合作',
            component: domeCoop
        },{
            path: 'oritaout',
            name: '国外详情',
            component: oriTaOut
        },{
            path: 'exchange',
            name: '交流活动',
            component: exChange
        },{
            path: 'offlineactive',
            name: '线下活动',
            component: offlineActive
        },{
            path: 'offlinedetail',
            name: '线下活动详情',
            component: offlineDetail
        },{
            path: 'themelist',
            name: '主题培训',
            component: themeList
        },{
            path: 'search',
            name: '搜索',
            component: Search
        },{
            path: 'onlinex',
            name: '网上展厅',
            component: Onlinex
        },{
            path: 'exhibitionxq',
            name: '展商',
            component: exhibitionxq
        },{
            path: 'comdetail',
            name: '商品详情',
            component: comdetail
        }]
    },
    
]



const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})



export default router