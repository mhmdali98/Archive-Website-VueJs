<template>
  <v-app>
    <div>
      <!-- الراوتر يقوم بعرض الصفحات بشكل تلقائي في الصفحه حسب امر المستخدم -->
      <router-view></router-view>
      <!-- الفوتر هنا ثابت لذلك عرفته ليظهر في كل الصفحات -->
      <app-footer></app-footer>
    </div>
  </v-app>
</template>

<script>
import Footer from './component/Footer.vue'

export default {
  name: 'App',
  components: {
    appFooter : Footer,
  },
}
</script>

<style>
</style>
