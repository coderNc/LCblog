import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const Login = () => import('@/views/Login.vue')

const Index = () => import('@/views/Index/Index.vue')
const MapList = () => import('@/views/MapList.vue')
const Category = () => import('@/views/category/Category.vue')
const Detail = () => import('@/views/detail/Detail.vue')
const About = () => import('@/views/about/About.vue')
const User = () => import('@/views/user/User.vue')
const UserAvatar = () => import('@/views/user/UserAvatar.vue')
const UserInfo = () => import('@/views/user/UserInfo.vue')

const Admin = () => import('@/views/admin/Admin.vue')
const AdminIndex = () => import('@/views/admin/AdminIndex.vue')
const AdminUser = () => import('@/views/admin/AdminUser.vue')
const AdminCategory = () => import('@/views/admin/AdminCategory.vue')
const AdminArticle = () => import('@/views/admin/AdminArticle.vue')
const AdminAddArticle = () => import('@/views/admin/AdminAddArticle.vue')



export default new Router({
  routes: [
    {
      path: '',
      redirect: '/admin'
    },
    {
      path:'/index',
      name:'index',
      component:Index
    },
    {
      path:'/category/:id',
      name:'category',
      component:Category
    },
    {
      path:'/detail/:id',
      name:'detail',
      component:Detail
    },
    {
      path:'/about',
      name:'about',
      component:About
    },
    {
      path:'/user',
      name:'user',
      redirect:'/user/info',
      component:User,
      children:[
        {
          path:'avatar',
          name:'avatar',
          component:UserAvatar
        },
        {
          path:'info',
          name:'info',
          component:UserInfo
        }
      ]
    },
    {
      path: '/login',
      component:Login,

    },

    {
      path:'/admin',
      component:Admin,
      children:[
        {
          path:'index',
          component:AdminIndex,
          
        },
        {
          path:'maplist',
          name:'maplist',
          component:MapList,
        
        },
        {
          path:'user',
          name:'user',
          component:AdminUser,
          
        },
        {
          path:'category',
          name:'category',
          component:AdminCategory,
          
        },
        {
          path:'article',
          name:'article',
          component:AdminArticle,
          
        },{
          path:'addarticle',
          name:'addarticle',
          component:AdminAddArticle,
          
        }
      ]
    }
  ]
})
