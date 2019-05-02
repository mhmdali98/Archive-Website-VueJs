<template>
    <div>
        <div class="bg ">

            <nav class="navbar navbar-expand-lg ">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
             
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                
                </ul>
                <form class="form-inline my-2 my-lg-0">
                <router-link to="/login" active-class="active" ><a class="">
            <button type="button" class="btn btn-link btn-lg" style="color:white">Login</button>
            </a></router-link>
                </form>
            </div>
            </nav>

         
        </div>
           <section class="section2">
            <div class="column">
                <div class="container">
                <div class="row">
                    <div class="col-sm text-left">
                        <br><br><br><br>
                        <h1>Archive Website</h1>
                        <p>A site for archiving personal documents</p>
                         <div class="wrap">
                             <router-link to="/login" active-class="active" >
                            <a href="#" class="button2 a1">Get Started</a>
                             </router-link>
                        </div>
                    </div>
                    
                    <div class="col anm">
                        <img src="../assets/bkg.svg" width="650px">
                   
                    </div>
                </div>
                </div>
            </div>
        </section>

        
        <svg id="clouds" xmlns="http://www.w3.org/2000/svg" style="background-color:#6c63ff" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M-5 100 Q 0 20 5 100 Z
                 M0 100 Q 5 0 10 100
                 M5 100 Q 10 30 15 100
                 M10 100 Q 15 10 20 100
                 M15 100 Q 20 30 25 100
                 M20 100 Q 25 -10 30 100
                 M25 100 Q 30 10 35 100
                 M30 100 Q 35 30 40 100
                 M35 100 Q 40 10 45 100
                 M40 100 Q 45 50 50 100
                 M45 100 Q 50 20 55 100
                 M50 100 Q 55 40 60 100
                 M55 100 Q 60 60 65 100
                 M60 100 Q 65 50 70 100
                 M65 100 Q 70 20 75 100
                 M70 100 Q 75 45 80 100
                 M75 100 Q 80 30 85 100
                 M80 100 Q 85 20 90 100
                 M85 100 Q 90 50 95 100
                 M90 100 Q 95 25 100 100
                 M95 100 Q 100 15 105 100 Z">
                 </path>  
        </svg>
        
        <section class="clouds">
            
            <div class="container">
                <div class="row">
                    <div class="col-sm text-left">
                        <img src="../assets/uplode.svg" width="300px">
                       
                    </div>
                    
                    <div class="col descr">
                            <br><br>
                        <h1 >Archive Website</h1>
                        <p>Security for uploading files and documents</p>
                                        
                    </div>
                    <div class="col-sm text-left">
                        <img src="../assets/securty.svg" width="300px">
                       
                    </div>
                </div>
                </div>

        </section>

       

    </div>    
</template>
<script>
import Header from './Header.vue'
export default {
    components:{
      appHeader : Header,
    }
}
</script>
<style scoped>

*, *:after, *::before {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

/* General styles and layout */
.bg{
	background: #6c63ff;
    
}
body {
	background: #6c63ff;
	color: #fff;
	font-family: 'Lato', Arial, sans-serif;
  padding:0px;
  margin:0px;
}


.logbut{
    margin:20px;
    
}

section {
	position: relative;
	padding: 10em ;
	background: #6c63ff;
	color: #fff;
	text-align: center;
}

.section2 {
	position: relative;
	padding: 0em ;
	background: #6c63ff;
	color: #fff;
	text-align: center;
}


section p {
	color: lighten(6c63ff, 65%);
	font-size: 1.3em;
	line-height: 1.5;
}

.text:first-child {
	text-align: right;
}

.text:nth-child(2) {
	text-align: left;
}

.col-2 {
	width: 49%;
}

.col-3  {
	padding: 0 1%;
	width: 33%;
	text-align: center;
}

.col-3 p {
	padding: 1.4em;
}

.colum {
	display: inline-block;
	vertical-align: top;
}


.color {
	background: darken(6c63ff, 7%);
}

/*** Individual section styles and separators ***/

/* Common style for pseudo-elements */
section::before,
section::after {
	position: absolute;
	content: '';
	pointer-events: none;
}




/* Clouds */
#clouds path {
	fill: #ecf0f1;
	stroke: #ecf0f1;
}
.clouds {
  background: #ecf0f1;

  }


/* Media Queries for the layout */
@media screen and (max-width: 68em) {
	section {
		font-size: 80%;
	}
}

@media screen and (max-width: 54em) {
	.column {
		display: block;
		width: 100% !important;
	}

	.text:first-child,
	.text:nth-child(2) {
		text-align: center;
	}

	.icon {
		margin: 0 auto;
	}

	.col-2 .column:first-child .icon {
		margin: 0 auto 50px;
	}

	.col-2 .column:nth-child(2) .icon {
		margin: 50px auto 0;
	}
}

.wrap {

	text-align: center;
    float: left;
    padding-left: 100px;
}

.a1 {
	-webkit-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
	-moz-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
	-ms-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
	-o-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
	transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
	display: block;
	margin: 20px auto;
	max-width: 180px;
	text-decoration: none;
	border-radius: 4px;
	padding: 20px 30px;
    
}

.a1.button2 {
	color: rgb(255, 255, 255);
	box-shadow: #F9CE00 0 0px 0px 2px inset;
}

.a1.button2:hover {
	color: rgba(0, 0, 0, 0.85);
	box-shadow: #F9CE00 0 80px 0px 2px inset;
    
}
.descr{
    color:rgb(56, 56, 53);
}
a{
    	text-decoration: none;
}
.anm{
  -webkit-animation-name: example; /* Safari 4.0 - 8.0 */
  -webkit-animation-duration: 5s; /* Safari 4.0 - 8.0 */
  animation-name: example;
  animation-duration: 8s;
  animation-iteration-count: infinite;

}

/* Safari 4.0 - 8.0 */
@-webkit-keyframes example {
  0%   {left:0px; top:0px;}
  99%  {left:40px; top:0px; top: 20px;}
  100%  {left:0px; top:0px;}
}

/* Standard syntax */
@keyframes example {
  0%   {left:0px; top:0px;}
  50%  {left:40px; top:0px; top: 20px;}
  100%  {left:0px; top:0px;}
}
</style>
