<template>
<div>
  <header role="banner">
    <!-- استدعاء اسم اليوزر -->
    <h1 class="headText" v-if="name"><mark>Hello</mark> {{name}}</h1> 
    <ul class="utilities">
      <br>
      <!-- زر البروفايل -->
      <li class="users warn2"><a href="">My Account</a></li>
      <!-- زر تسجيل الخروج -->
      <li class="logout warn" ><a href="" ><button @click="logout">logOut</button></a></li>
    </ul>
  </header>
  <!-- بداية السايد منيو -->
  <nav role='navigation'>
    <ul class="main">
      <router-link to="/Allarch">
        <li class="dashboard"><a href="#">All Archives</a></li>
      </router-link>
      <router-link to="/AddArch">
        <li class="edit"><a href="#" v-if="writer || admin">Add Archive</a></li>
      </router-link>
      <router-link to="/Users">
        <li class="users" v-if="admin"><a href="#">All Users</a></li>
      </router-link>
      <router-link to="/AddUser">
        <li class="write" v-if="admin"><a href="#">Add User</a></li>
      </router-link>
    </ul>
  </nav>
</div>
</template>

<script>
export default {
  computed:{
    // استدعاء معلومات اليوزر
		name(){
			return !this.$store.getters.user ? false : this.$store.getters.user.name
    },
    // استدعاء اذا كان نوع اليوزر ادمن
		admin(){
      return this.$store.getters.admin
    },
    // اذا كان نوع اليوزر كاتب
    writer(){
      return this.$store.getters.writer
		}
	},
	methods: {
    //ارسال امر تسجيل الخروج
	  logout(){
      this.$store.dispatch('logout')
    }
  },
}
</script>

<style scoped>
@charset "UTF-8";
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,400italic);
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css);

*,*:before,*:after {
  box-sizing: inherit;
}
.warn {
  color: #F9CE00;
}
.warn2 {
  color: rgb(255, 255, 255);
}
/* header */
header[role="banner"] {
  background: #6c63ff;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
}
header[role="banner"] h1 {
  margin: 0;
  font-weight: 300;
  padding: 1rem;
}
header[role="banner"] .utilities {
  width: 100%;
  background: slategray;
  color: #ddd;
}
header[role="banner"] .utilities li a {
  padding: 0.7em;
  display: block;
}
/* header */
.utilities a:before {
  content: "\f248";
  font-family: FontAwesome;
  padding-right: 0.6em;
}
.logout a:before {
  content: "";
}
.users a:before {
  content: "";
}
/* side menu */
nav[role="navigation"] {
  background: #2a3542;
  color: #ddd;
}
nav[role="navigation"] li {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
nav[role="navigation"] li a {
  color: #ddd;
  text-decoration: none;
  display: block;
  padding: 0.7em;
}
nav[role="navigation"] li a:hover {
  background-color: rgba(255, 255, 255, 0.05);
}
nav[role="navigation"] li a:before {
  content: "\f248";
  font-family: FontAwesome;
  padding-right: 0.6em;
}
nav[role="navigation"] .dashboard a:before {
  content: "";
}
nav[role="navigation"] .write a:before {
  content: "";
}
nav[role="navigation"] .edit a:before {
  content: "";
}
nav[role="navigation"] .comments a:before {
  content: "";
}
nav[role="navigation"] .users a:before {
  content: "";
}
a {
  text-decoration: none;
  color: inherit;
}
h2,h3,h4 {
  font-weight: 300;
  margin: 0;
}
b {
  color: rgb(253, 239, 36);
}
ul,li {
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

@media screen and (min-width: 600px) {
  html,
  body {
    height: 100%;
  }

  header[role="banner"] {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    height: 75px;
  }
  header[role="banner"] .utilities {
    position: absolute;
    top: 0;
    right: 0;
    background: transparent;
    color: darkslategray;
    width: auto;
  }
  header[role="banner"] .utilities li {
    display: inline-block;
  }
  header[role="banner"] .utilities li a {
    padding: 0.5em 1em;
  }

  nav[role="navigation"] {
    position: fixed;
    width: 200px;
    top: 75px;
    bottom: 0px;
    left: 0px;
  }

  main[role="main"] {
    margin: 75px 0 40px 200px;
  }
  main[role="main"]:after {
    content: "";
    display: table;
    clear: both;
  }
}

.headText{
	font-weight: bold;
	font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	color:white;
}

mark{
	color:#F9CE00;
	background-color:#2a3542 ;
}
</style>

