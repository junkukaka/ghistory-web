import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../components/web/MainPage.vue'
import ContentArea from '../components/article/ContentArea.vue'
import Login from '../components/userComponents/Login.vue'
import Registered from '../components/userComponents/Registered.vue'
import Welcome from '../components/userComponents/Welcome.vue'
import ContentDetail from '../components/article/ContentDetail.vue'
import UserInfo from '../components/userComponents/UserInfo.vue'
import AdminArticle from '../components/article/AdminArticle.vue'
import CodeManager from '../components/admin/codeManager.vue'


//1.引路vueRouter插件
Vue.use(VueRouter)

//2.路由的规则定义函数
const routes = [
    {
        path : "/",
        redirect : '/home'
    },
    {
        name: 'home',
        path: '/home',
        component : MainPage
    },
    {    //内容区域
        name:'contentArea',
        path : '/contentArea',
        component: ContentArea
    },
    {  
        name: 'login',
        path: '/login',
        component : Login
    },
    {
        name: 'registered',
        path: '/registered',
        component : Registered
    },
    //欢迎页面
    {
        name: 'welcome',
        path: '/welcome',
        component : Welcome
    },
    //会员个人信
    {
        name : 'userInfo',
        path : '/userInfo',
        component : UserInfo
    },
    //文章详细页面
    {
        name : 'contentDetail',
        path : '/contentDetail',
        component : ContentDetail
    },
    //文章编辑页面
    {
        name : 'adminArticle',
        path : '/adminArticle',
        component : AdminArticle
    },
    //共同代码管理
    {
        name : 'codeManager',
        path : '/codeManager',
        component : CodeManager
    }
]


const router = new VueRouter({
    routes,
    mode:'history'
  })
  
  export default router


