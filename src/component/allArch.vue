<template>
<div>
       <header role="banner">

  <h1>Admin Panel</h1> 
  <ul class="utilities">
    <br>
    <li class="users warn2"><a href="#">My Account</a></li>
    <li class="logout warn"><a href="">Log Out</a></li>
  </ul>
</header>

<nav role='navigation'>
  <ul class="main">
    <router-link to="/Allarch">
    <li class="dashboard"><a href="#">All Archives</a></li>
    </router-link>
    <router-link to="/AddArch">
    <li class="edit"><a href="#">Add Archive</a></li>
    </router-link>
    <router-link to="/Users">
    <li class="users"><a href="#">All Users</a></li>
    </router-link>
    <router-link to="/AddUser">
    <li class="write"><a href="#">Add User</a></li>
    </router-link>
  </ul>
</nav>

<main role="main">

  <br>
<v-container grid-list-md text-xs-center>
    <v-layout row wrap >
<v-flex xs4  v-for = " i in formData "> 
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

export default {
  data() {
    return {
      fullName:'',
      formData:[]
    }
  },
  created () {
    axios.get('https://vue-test-10da4.firebaseio.com/archive.json')
    .then(res => {
      // console.log(res)
      // const data = res.data
      // const archive = []
      // for(let key in data){
      //   const arch = data[key]
      //   arch.id = key
      //   archive.push(arch)
      // }
      // console.log(archive)
      // this.fullName = archive[0].fullName1
      return res;
    })
    .then(data =>{
      const result = []
      for (let key in data){
        result.push(data[key]);
      }
        console.log(result[0])
        this.formData =result[0]

    })
    .catch(error => console.log(error))
  },
		
}
</script>
<style scoped>
@charset "UTF-8";
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,400italic);
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css);


html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  background: #f1f2f7;
  font-family: "Open Sans", arial, sans-serif;
  color: darkslategray;
}

body.login {
  background-color: white;
  max-width: 500px;
  margin: 10vh auto;
  padding: 1em;
  height: auto;
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

nav[role="navigation"] {
  background: #2a3542;
  color: #ddd;
  /* icons */
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

/* current nav item */
.current, .dashboard .dashboard a,
.write .write a,
.edit .edit a,
.comments .comments a,
.users .users a {
  background-color: rgba(255, 255, 255, 0.1);
}

footer[role="contentinfo"] {
  background: slategray;
  color: #ddd;
  font-size: 0.8em;
  text-align: center;
  padding: 0.2em;
}

/* panels */
.panel {
  background-color: white;
  color: darkslategray;
  -webkit-border-radius: 0.3rem;
  -moz-border-radius: 0.3rem;
  -ms-border-radius: 0.3rem;
  border-radius: 0.3rem;
  margin: 1%;
}
.panel > h2, .panel > ul {
  margin: 1rem;
}

/* typography */
a {
  text-decoration: none;
  color: inherit;
}

h2,
h3,
h4 {
  font-weight: 300;
  margin: 0;
}

h2 {
  color: #ff1a1a;
}

b {
  color: rgb(253, 239, 36);
}

.hint {
  color: lightslategray;
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

/* forms */
form input,
form textarea,
form select {
  width: 100%;
  display: block;
  border: solid 1px #dde;
  padding: 0.5em;
}
form input:after,
form textarea:after,
form select:after {
  content: "";
  display: table;
  clear: both;
}
form input[type="checkbox"],
form input[type="radio"] {
  display: inline;
  width: auto;
}
form label,
form legend {
  display: block;
  margin: 1em 0 0.5em;
}
form input[type="submit"] {
  background: #ff1a1a;
  border: none;
  border-bottom: solid 4px #e60000;
  padding: 0.7em 3em;
  margin: 1em 0;
  color: white;
  text-shadow: 0 -1px 0 #e60000;
  font-size: 1.1em;
  font-weight: bold;
  display: inline-block;
  width: auto;
  -webkit-border-radius: 0.5em;
  -moz-border-radius: 0.5em;
  -ms-border-radius: 0.5em;
  border-radius: 0.5em;
}
form input[type="submit"]:hover {
  background: turquoise;
  border: none;
  border-bottom: solid 4px #21ccbb;
  padding: 0.7em 3em;
  margin: 1em 0;
  color: white;
  text-shadow: 0 -1px 0 #21ccbb;
  font-size: 1.1em;
  font-weight: bold;
  display: inline-block;
  width: auto;
  -webkit-border-radius: 0.5em;
  -moz-border-radius: 0.5em;
  -ms-border-radius: 0.5em;
  border-radius: 0.5em;
}

/* feedback */
.error {
  background-color: #ffe9e0;
  border-color: #ffc4ad;
}

label.error {
  padding: 0.2em 0.5em;
}

.feedback {
  background: #fcfae6;
  color: #857a11;
  margin: 1em;
  padding: 0.5em 0.5em 0.5em 2em;
  border: solid 1px khaki;
}
.feedback:before {
  content: "";
  font-family: fontawesome;
  color: #e4d232;
  margin-left: -1.5em;
  margin-right: 0.5em;
}
.feedback li:before {
  border-left-color: #f6f0b9;
}
.feedback.error {
  background: #ffe9e0;
  color: #942a00;
  margin: 1em;
  padding: 0.5em 0.5em 0.5em 2em;
  border: solid 1px lightsalmon;
}
.feedback.error:before {
  content: "";
  font-family: fontawesome;
  color: #ff5714;
  margin-left: -1.5em;
  margin-right: 0.5em;
}
.feedback.error li:before {
  border-left-color: #ffc4ad;
}
.feedback.success {
  background: #98eee6;
  color: #08322e;
  margin: 1em;
  padding: 0.5em 0.5em 0.5em 2em;
  border: solid 1px turquoise;
}
.feedback.success:before {
  content: "";
  font-family: fontawesome;
  color: #1aa093;
  margin-left: -1.5em;
  margin-right: 0.5em;
}
.feedback.success li:before {
  border-left-color: #6ce7db;
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

  .panel {
    margin: 2% 0 0 2%;
    float: left;
    width: 96%;
  }
  .panel:after {
    content: "";
    display: table;
    clear: both;
  }

  .box, .onethird, .twothirds {
    padding: 1rem;
  }

  .onethird {
    width: 33.333%;
    float: left;
  }

  .twothirds {
    width: 66%;
    float: left;
  }

  footer[role="contentinfo"] {
    clear: both;
    margin-left: 200px;
  }
}
@media screen and (min-width: 900px) {
  footer[role="contentinfo"] {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0px;
    margin: 0;
  }

  .panel {
    width: 47%;
    clear: none;
  }
  .panel.important {
    width: 96%;
  }
  .panel.secondary {
    width: 23%;
  }
}


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
