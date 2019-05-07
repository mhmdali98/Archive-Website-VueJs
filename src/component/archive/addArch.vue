<template>
<div>
  <!-- الهدر -->
  <app-header></app-header>
  <!-- بداية الفورم -->
  <main role="main">
    <form>
      <!-- اضافة اسم -->
      <v-text-field
        v-model="fullName"
        :error-messages="fullNameErrors"
        :counter="50"
        label="Full Name"
        required
        @input="$v.fullName.$touch()"
        @blur="$v.fullName.$touch()"
      ></v-text-field>
      <!-- اضافة نوع الهوية -->
      <v-text-field
        v-model="nationIdentity"
        :error-messages="nationIdentityErrors"
        :counter="50"
        label="national Identity"
        required
        @input="$v.nationIdentity.$touch()"
        @blur="$v.nationIdentity.$touch()"
      ></v-text-field>
      <!-- اضافة رقم السيارة -->
      <v-text-field
        v-model="carNumber"
        :error-messages="carNumberErrors"
        :counter="50"
        label="Car Number"
        required
        @input="$v.carNumber .$touch()"
        @blur="$v.carNumber .$touch()"
      ></v-text-field>
      <!-- اضافة حرف بلانكليزي -->
      <v-text-field
        v-model="carEnglishChar"
        :error-messages="carEnglishCharErrors"
        :counter="50"
        label="Car English Char"
        required
        @input="$v.carEnglishChar.$touch()"
        @blur="$v.carEnglishChar.$touch()"
      ></v-text-field>
      <!-- اضافة حرف بلعربي -->
      <v-text-field
        v-model="carArabicChar"
        :error-messages="carArabicCharErrors"
        :counter="50"
        label="Car Arabic Char"
        required
        @input="$v.carArabicChar.$touch()"
        @blur="$v.carArabicChar.$touch()"
      ></v-text-field>
      <!-- اضافة رقم اجازة السوق -->
      <v-text-field
        v-model="drivingLicenseNumber"
        :error-messages="drivingLicenseNumberErrors"
        :counter="50"
        label="Driving License Number"
        required
        @input="$v.drivingLicenseNumber.$touch()"
        @blur="$v.drivingLicenseNumber.$touch()"
      ></v-text-field>
      <v-btn @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
    <br>
    <!-- <v-btn raised @click="onUpLoad">UpLoad</v-btn>
    <input 
    class="primary" 
    type="file" 
    style="display:none" 
    ref="fileInput" 
    accept="image/*"
    @change="onFilePicked"
    >
    <br>
    <img :src="imageUrl" height="150"> -->
  </main>
</div>
</template>

<script>
import axios from 'axios'
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'
import Header from '../Header.vue'

export default {
  components:{
    appHeader : Header
  },
  // استدعاء فكشنات الفالديشن
	mixins: [validationMixin],
  validations: {
    fullName: { required, maxLength: maxLength(50) },
    nationIdentity: { required, maxLength: maxLength(50) },
    carNumber: { required, maxLength: maxLength(50) },
    carEnglishChar: { required, maxLength: maxLength(50) },
    carArabicChar: { required, maxLength: maxLength(50) },
    drivingLicenseNumber:  { required, maxLength: maxLength(50) },
  },
  components:{
    appHeader : Header,
  },
  data(){
    return{
      fullName: '',
      nationIdentity:'',
      carNumber: '',
      carEnglishChar: '',
      carArabicChar:'',
      drivingLicenseNumber:'',            
      imageUrl:'',
      image: null
    }
  },
  computed: {
    // التحقق من ادخال الاسم
    fullNameErrors () {
      const errors = []
      if (!this.$v.fullName.$dirty) return errors
      !this.$v.fullName.maxLength && errors.push('Name must be at most 50 characters long')
      !this.$v.fullName.required && errors.push('Name is required.')
      return errors
    },
    // التحقق من اسم الهوية
    nationIdentityErrors () {
      const errors = []
      if (!this.$v.nationIdentity.$dirty) return errors
      !this.$v.nationIdentity.maxLength && errors.push('nation Identity must be at most 50 characters long')
      !this.$v.nationIdentity.required && errors.push('nation Identity is required.')
      return errors
    },
    // التحقق من رقم السيارة
    carNumberErrors () {
      const errors = []
      if (!this.$v.carNumber.$dirty) return errors
      !this.$v.carNumber.maxLength && errors.push('car Number must be at most 50 characters long')
      !this.$v.carNumber.required && errors.push('car Number is required.')
      return errors
    },
    // التحقق من الادخال 
    carEnglishCharErrors () {
      const errors = []
      if (!this.$v.carEnglishChar.$dirty) return errors
      !this.$v.carEnglishChar.maxLength && errors.push('car English Char must be at most 50 characters long')
      !this.$v.carEnglishChar.required && errors.push('car English Char is required.')
      return errors
    },
    // التحقق من الادخال
    carArabicCharErrors () {
      const errors = []
      if (!this.$v.carArabicChar.$dirty) return errors
      !this.$v.carArabicChar.maxLength && errors.push('car Arabic Char must be at most 50 characters long')
      !this.$v.carArabicChar.required && errors.push('car Arabic Char is required.')
      return errors
    },
    // التحقق من رقم اجازة السوق
    drivingLicenseNumberErrors () {
      const errors = []
      if (!this.$v.drivingLicenseNumber.$dirty) return errors
      !this.$v.drivingLicenseNumber.maxLength && errors.push('driving License Number must be at most 50 characters long')
      !this.$v.drivingLicenseNumber.required && errors.push('driving License Number is required.')
      return errors
    }
  },
	methods:{
    // خاص برفع الصورة
    onCreateD(){
      const upData = {
        imageUrl: this.image
      }
      this.$store.dispatch('creatData',upData)
    },
    onUpLoad(){
      this.$refs.fileInput.click()
    },
    onFilePicked(event){
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.')<= 0){
        return alert('please add a valid file')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load',() => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    },
    // ارسال المدخلات
    submit () {
      this.$v.$touch()
        const formData = {
        fullName1 : this.fullName,
        nationIdentity1 : this.nationIdentity,
        carNumber1 : this.carNumber,
        carEnglishChar1 : this.carEnglishChar,
        carArabicChar1 : this.carArabicChar,
        drivingLicenseNumber1 : this.drivingLicenseNumber,
        date1 : new Date() ,    
      }
      // ارسال المعلومات الى السيرفر للخزن
      axios.post('/archive.json', formData)
      .catch(error => console.log(error))
    },
    // تفريغ المدخلات
    clear () {
      this.$v.$reset()
      this.fullName = ''
      this.nationIdentity = ''
      this.carNumber = ''
      this.carEnglishChar = ''
      this.carArabicChar = ''
      this.drivingLicenseNumber = ''     
    }
  }		
}
</script>

<style scoped>
@charset "UTF-8";
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,400italic);
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css);
form{
  padding: 20px 200px;
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
  main[role="main"] {
    margin: 75px 0 40px 200px;
  }
  main[role="main"]:after {
    content: "";
    display: table;
    clear: both;
  }
}
</style>
