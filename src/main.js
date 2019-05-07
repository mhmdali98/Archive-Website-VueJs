import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import App from './App.vue'
import { routes } from './routes'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuetify/dist/vuetify.min.css' 
import Vuelidate from 'vuelidate'
import { store } from './store/store'
import axios from 'axios'

Vue.use(Vuelidate)
Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(BootstrapVue)

//هذا الامر للسماح بستخدام الراوتر بشكل عام في اي مكان
const router = new VueRouter({
  //router.js هذا الامر يعني اننا نستدعي جميع الباثات من ملف 
  routes,
  mode : 'history'
});

//هذا الامر لجعل رابط السيرفر عام في كل الملفات ولا حاجه لاعاده كتابته فيها
axios.defaults.baseURL = 'https://vue-test-10da4.firebaseio.com'
//هذا الامر لجعل الداتا القادمه من السيرفر من نوع جيسون
axios.defaults.headers.get['Accepts'] = 'application/json'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

  
