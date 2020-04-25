import Vue from'vue'
import VueRouter from 'vue-router'


const Home = ()=> import('../components/Home')
const Login = ()=> import('../components/Login')
const Main = ()=> import("../components/common/Main")
const UserInfo = ()=> import("../components/users/UserInfo")
const ChagePassword = ()=> import("../components/users/ChangePassword")

Vue.use(VueRouter)

const routes=[
    {
        path:'',
        redirect:'/users'
    },
    {
        path:'/users',
        component:Login
    },
    {
        path:'/home',
        component:Home,
        children:[
            {
              path: '',
              redirect:'main'
            },
            {
                path:'main',
                component:Main
            },
            {
                path:'userInfo',
                component:UserInfo
            },
            {
                path:'userPass',
                component:ChagePassword
            }
        ]
    },
]

const router = new VueRouter({
    routes,
    mode:'history'
})
export  default router