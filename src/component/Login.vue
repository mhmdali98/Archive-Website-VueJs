<template>
<div class="bg-c">
  <div id="animate-area">
    <div class="bod">
    <br><br><br>
      <!-- ادخال الايميل -->
      <div class="form-group" >
        <label for="exampleInputEmail1" >Email address</label>
        <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      </div>
      <!--  ادخال الباسورد -->
      <div class="form-group">
        <label for="exampleInputPassword1" >Password</label>
        <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password">
      </div>
      <!-- زر تسجيل الدخول -->
        <button type="submit" @click="onSubmit" class="btn btn-warning txtc btn-lg btcol2">LogIn</button>
      <!-- زر العودة -->
      <router-link to="/">
        <button type="submit" class="btn btn-outline-primary btn-lg btcol">Back To Home</button>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
   data() {
      return {
        userData:{
          email:'',
          password:'',
        },
      }
    },
    methods: {
      onSubmit(){
        // اوبجكت لخزن المدخلات
        const formUser = {
          email: this.email,
          password: this.password
        }
        console.log(formUser)
        // ارسال المعلومات الى فكشن تسجيل الدخول الموجود في فايل store.js
        this.$store.dispatch('login',{email: formUser.email , password: formUser.password})
        //بعد التاكد من معلومات اليوزر تحويله الى الادمن بنل 
        .then(this.$router.replace('/AllArch'))
      }
    },  
  }
</script>

<style>
  .bod{
    padding:100px 30%;
  }
  .bg-c{
    background-color: #FFFFFF;
    height:600px;
  }
  @keyframes animatedBackground {
    from {
     background-position: 0 0;
    }
    to {
     background-position: 100% 0;
    }
  }
  .txtc{
    color: white;
  }

  #animate-area {
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 400px;
    background-image: url(../assets/bg-cloud.svg);
    background-position: 0px 0px;
    background-repeat: repeat-x;
    animation: animatedBackground 40s linear infinite;
  }
  .btcol:hover{
    border: #6B62FF;
    background-color:#6B62FF
  }
  .btcol{
    border-color: #6B62FF;
    color: #6B62FF;
  }
  .btcol2{
    background-color: #F9CE00;
  }
</style>
