import Vue from 'vue';
import Vuex from 'vuex';
import axios from './axios-auth.js'
import globalAxios from 'axios'
import router from '../routes.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        // هذا المتغير ياخذ اي دي اليوزر عند تسجبل الدخول
        idToken: null,
        // هذا المتغير ياخذ اي دي اليوزر عند المخرون في الدتابيس
        userId: null,
        // هذا المتغير ياخذ معلومات اليوزر عند تسجبل الدخول
        user: null,
        // هذا المتغير ياخذ نوع اليوزر عند تسجبل الدخول
        userType: null,
        email:null
    },
    mutations:{
        //خزن الاي دي والمعلومات في المتغيرات
        authUser (state,userData){
            state.idToken = userData.token
            state.userId = userData.userId
            state.email = userData.email       
        },
        //خزن معلومات اليوزر
        storeUser(state,user){
            state.user = user
            state.userType = user.type
        },
        //يقوم هذا الفكشن بمسح الادي من اللوكل ستورج عند تسجيل الخروج
        clearAuth(state){
            state.idToken = null
            state.userId = null
        },
    },
    actions:{
        signup({commit,dispatch}, authData ){
            //ارسال معلومات تسجيل المستخدم الى هذا الرابط
            axios.post('/signupNewUser?key=AIzaSyCc4ahx_tPDuoXH4G8IqOAmiBBne4yLWJk', {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            })
            .then(res => {
                //بعد تحويل الدتا الى الرابط خزن باقي المعلومات في جدول users
                dispatch('storeUser',authData)
            })
            .catch(error => console.log(error))
        },
        //ارسال معلومات دخول المستخدم الى هذا الرابط
        login ({commit},authData){
            axios.post('/verifyPassword?key=AIzaSyCc4ahx_tPDuoXH4G8IqOAmiBBne4yLWJk', {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            })
            .then(res =>{  
                //حفظ معلومات اليوزر في اللوكل ستورج                                                      
                commit('authUser',{
                    token: res.data.idToken,
                    userId: res.data.localId,
                    email:res.data.email
                })    
            })     
            .catch(error => console.log(error))
        },
        //حفظ داتا اليوزر في الداتا بيس
        storeUser({commit,state},userData) {
            if(!state.idToken){
                return 'no id token'
            }
            globalAxios.post('/users.json' + '?auth=' + state.idToken , userData)
            .catch(error => console.log(error))
        },
        //جلب معلومات اليوزر 
        fetchUser({commit , state},){
            if(!state.idToken){
                return 'no id token'
            }
            globalAxios.get('/users.json' + '?auth=' + state.idToken)
            .then(res => {
                const data = res.data
                const users = []
                for (let key in data){
                    const user = data[key]
                    user.id = key 
                    if(user.email == state.email){
                        users.push(user)
                    }
                }
                commit('storeUser', users[0])
            })
            .catch(error => console.log(error))
        },
        //فكشن لتسجيل الخروج واعادة توجيه الصفحه الى صفحة الدخول
        logout({commit}){
            commit('clearAuth')
            router.replace('/login')
        } 
    },
    getters:{
        //لعرض معلومات اليوزر عند الحاجه
        user(state){
            return state.user
        },
        //لمعرفت اذا كان نوع اليوزر ادمن
        admin(state){
            return state.userType == "Admin"    
        },
        //لمعرف اذا كان نوع اليوزر كاتب
        writer(state){   
            return state.userType == "writer"  
        },
       
    }
});