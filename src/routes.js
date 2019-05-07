import Home from './component/Home.vue'
import Login from './component/Login.vue'
import AllArch from './component/archive/AllArch.vue'
import AddArch from './component/archive/AddArch.vue'
import Users from './component/user/Users.vue'
import AddUser from './component/user/AddUser.vue'
import Header from './component/header.vue'
import { store } from './store/store.js'

//اعادة توجيه الباثات مع التاكد من تصريح الدخول
export const routes = [
    {path:'/',component:Home},
    {path:'/login',component:Login},
    {path:'/AllArch',
    component: AllArch,
    beforeEnter (to, from, next) {
        if(store.state.idToken){
            next()
        } else {
            next('/login')
        }
    }},
    {path:'/AddArch',component:AddArch,
    beforeEnter (to, from, next) {
        if(store.state.idToken){
            next()
        } else {
            next('/login')
        }
    }},
    {path:'/Users',component:Users,
    beforeEnter (to, from, next) {
        if(store.state.idToken){
            next()
        } else {
            next('/login')
        }
    }},
    {path:'/AddUser',component:AddUser,
    beforeEnter (to, from, next) {
        if(store.state.idToken){
            next()
        } else {
            next('/login')
        }
    }},
    {path:'/Header',component:Header,
    beforeEnter (to, from, next) {
        if(store.state.idToken){
            next()
        } else {
            next('/login')
        }
    }},
    //هذا الامر يجعل اي باث غير موجود ضمن الباثات فوق يدخله المستخدم يعيد توجيهه الى الصحفه الرئيسيه
    { path: '*', redirect: '/' }
]
