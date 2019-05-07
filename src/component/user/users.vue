<template>
<div> 
  <!-- الهيدر  -->
  <app-header></app-header>
  <!-- جدول اليوزر -->
  <main role="main">
    <br>
    <table class="table">
      <thead class="bgt">
        <tr>
          <th scope="col" class="pdt">Name</th>
          <th scope="col" class="pdt"> Email </th>
          <th scope="col" class="pdt"> password </th>
          <th scope="col" class="pdt"> type </th>
          <th scope="col" class="pdt">Action</th>
        </tr>
      </thead>
      <!-- استدعاء جميع اليوزرز مع كامل المعلومات وعرضها -->
      <tbody v-for = "i in formUser" v-bind:key="i.id">
        <tr>   
          <td>{{i.name}}</td>
          <td>{{i.email}}</td>
          <td>{{i.password}}</td>
          <td>{{i.type}}</td>
          <td>        
            <a>Edit</a> |
            <a>Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
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
      formUser:[]
    }
  },
  created () {
    // جلب معلومات اليوزرز جميعهم
    axios.get('/users.json')
    .then(res => {
      return res;
    })
    .then(data =>{
      const result = []
      for (let key in data){
        result.push(data[key]);
      }
      console.log(result[0])
      this.formUser =result[0]
    })
    .catch(error => console.log(error))
  },
	methods:{
		
	}		
}
</script>
<style scoped>
@charset "UTF-8";
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,400italic);
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css);

*,*:before,*:after {
  box-sizing: inherit;
}

/* lists */
ul,
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

main li {
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

/* tables */
table {
  border-collapse: collapse;
  width: 96%;
  margin: 2%;
}

th {
  text-align: left;
  font-weight: 400;
  font-size: 13px;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 10px;
  padding-bottom: 14px;
}

tr:not(:first-child):hover {
  background: rgba(0, 0, 0, 0.1);
}

td {
  line-height: 40px;
  font-weight: 300;
  padding: 0 10px;
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
.bgt{
  background-color: #2a3542;
  color:white;
}
.pdt{
  padding:15px;
}
</style>
