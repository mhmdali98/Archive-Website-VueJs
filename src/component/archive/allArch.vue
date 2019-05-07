<template>
<div>
  <!-- بداية الهدر -->
  <app-header></app-header> 
  <!-- بداية الكارتات -->
  <main role="main">
    <br>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap >
        <!-- عرض المعلومات -->
        <v-flex xs4  v-for = " i in formData" v-bind:key="i.id"> 
          <figure class="snip1543">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample108.jpg" alt="sample108" />
            <figcaption>
              <h3>{{ i.fullName1 }}</h3>
              <p><b>Nation Identity:</b> {{i.nationIdentity1}}</p>
              <p><b>Car Num:</b> {{i.carNumber1}}</p>
              <p><b>Date:</b> {{i.date1}}</p>
            </figcaption>
            <a href="#"></a>
          </figure>
        </v-flex>
      </v-layout>
    </v-container>
  </main>
</div>
</template>

<script>
import axios from 'axios'
import Header from '../Header.vue'

export default {
  components:{
    appHeader : Header
  },
  data() {
    return {
      fullName:'',
      formData:[],      
    }
  },
	created(){
    // جلب المعلومات لاضهارها
	  this.$store.dispatch('fetchUser')
    axios.get('/archive.json')
    .then(res => {
      return res;
    })
    .then(data =>{
      const result = []
      for (let key in data){
        result.push(data[key]);
      } 
      this.formData =result[0]
      console.log(this.formData)
    })
    .catch(error => console.log(error))
  },
  computed:{},
  methods:{}
}
</script>
<style scoped>
@charset "UTF-8";
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,400italic);
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css);
b {
  color: rgb(253, 239, 36);
}
main  {
  position: relative;
  padding-left: 1.2em;
  margin: 0.5em 0;
}
main li:before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  left: 0;
  top: 0.3em;
  border-left: solid 10px #dde;
  border-top: solid 5px transparent;
  border-bottom: solid 5px transparent;
}
@media screen and (min-width: 600px) {
  main[role="main"] {
    margin: 75px 0 40px 200px;
  }
  main[role="main"]:after {
    content: "";
    display: table;
    clear: both;
  }
}
/* بداية ستايل الكارت */
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro);
@import url(https://fonts.googleapis.com/css?family=Teko:700);
.snip1543 {
  background-color: #fff;
  color: #ffffff;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  margin: 10px;
  max-width: 315px;
  min-width: 230px;
  overflow: hidden;
  position: relative;
  text-align: left;
  width: 100%;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
.snip1543 *,
.snip1543 *:before,
.snip1543 *:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.45s ease;
  transition: all 0.45s ease;
}
.snip1543 img {
  backface-visibility: hidden;
  max-width: 100%;
  vertical-align: top;
}
.snip1543:before,
.snip1543:after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  content: '';
  background-color: #6c63ff;
  opacity: 0.5;
  -webkit-transition: all 0.45s ease;
  transition: all 0.45s ease;
}
.snip1543:before {
  -webkit-transform: skew(30deg) translateX(-80%);
  transform: skew(30deg) translateX(-80%);
}
.snip1543:after {
  -webkit-transform: skew(-30deg) translateX(-70%);
  transform: skew(-30deg) translateX(-70%);
}
.snip1543 figcaption {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;
  bottom: 0;
  padding: 25px 40% 25px 20px;
}
.snip1543 figcaption:before,
.snip1543 figcaption:after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #6c63ff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  content: '';
  opacity: 0.5;
  z-index: -1;
}
.snip1543 figcaption:before {
  -webkit-transform: skew(30deg) translateX(-100%);
  transform: skew(30deg) translateX(-100%);
}
.snip1543 figcaption:after {
  -webkit-transform: skew(-30deg) translateX(-90%);
  transform: skew(-30deg) translateX(-90%);
}
.snip1543 h3,
.snip1543 p {
  margin: 0;
  opacity: 0;
  letter-spacing: 1px;
}
.snip1543 h3 {
  font-family: 'Teko', sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 1em;
  text-transform: uppercase;
}
.snip1543 p {
  font-size: 0.9em;
}
.snip1543 a {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
.snip1543:hover h3,
.snip1543.hover h3,
.snip1543:hover p,
.snip1543.hover p {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  opacity: 0.9;
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
.snip1543:hover:before,
.snip1543.hover:before {
  -webkit-transform: skew(30deg) translateX(-20%);
  transform: skew(30deg) translateX(-20%);
  -webkit-transition-delay: 0.05s;
  transition-delay: 0.05s;
}
.snip1543:hover:after,
.snip1543.hover:after {
  -webkit-transform: skew(-30deg) translateX(-10%);
  transform: skew(-30deg) translateX(-10%);
}
.snip1543:hover figcaption:before,
.snip1543.hover figcaption:before {
  -webkit-transform: skew(30deg) translateX(-40%);
  transform: skew(30deg) translateX(-40%);
  -webkit-transition-delay: 0.15s;
  transition-delay: 0.15s;
}
.snip1543:hover figcaption:after,
.snip1543.hover figcaption:after {
  -webkit-transform: skew(-30deg) translateX(-30%);
  transform: skew(-30deg) translateX(-30%);
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}
</style>
