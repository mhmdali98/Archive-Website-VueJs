<template>
  <v-app>
  <div class="bg">
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
  </v-app>
</template>

<script>
import Home from './component/Home.vue'
import Login from './component/Login.vue'
import Header from './component/Header.vue'
import Footer from './component/Footer.vue'

export default {
  name: 'App',
  
  components: {
    appHome : Home,
    appFooter : Footer,
    appHeader : Header,
    appLogin : Login,

    
  },
  data () {
    return {
      //
    }
  }
}
</script>
<style>

</style>
