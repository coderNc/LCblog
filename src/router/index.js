import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const Login = () => import('../views/Login.vue')
const AdminIndex = () => import('../views/admin/AdminIndex.vue')
const Admin = () => import('../views/admin/Admin.vue')
const Index = () => import('../views/Index/Index.vue')
const MapList = () => import('../views/MapList.vue')
export default new Router({
  routes: [
    {
      path: '',
      redirect: '/login'
    },
    {
      path:'/index',
      name:'index',
      component:Index
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
          component:AdminIndex
        },
        {
          path:'maplist',
          name:'maplist',
          component:MapList
        }
      ]
    }
  ]
})
