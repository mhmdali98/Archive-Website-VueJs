import Home from './component/Home.vue'
import Login from './component/Login.vue'
import AllArch from './component/AllArch.vue'
import AddArch from './component/AddArch.vue'
import Users from './component/Users.vue'
import AddUser from './component/AddUser.vue'


export const routes = [
    {path:'/',component:Home},
    {path:'/login',component:Login},
    {path:'/AllArch',component:AllArch},
    {path:'/AddArch',component:AddArch},
    {path:'/Users',component:Users},
    {path:'/AddUser',component:AddUser},

]
