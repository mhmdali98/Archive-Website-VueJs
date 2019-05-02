import Vue from 'vue';
import Vuetify from 'vuetify';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue'
import { routes } from './routes'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vuetify/dist/vuetify.min.css' 
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.http.options.root = 'https://vue-test-10da4.firebaseio.com/data.json';

const router = new VueRouter({
  routes,
  mode : 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

  
