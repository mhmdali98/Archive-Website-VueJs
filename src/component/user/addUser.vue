<template>
<div>
  <!-- الهدر -->
  <app-header></app-header>
  <!-- بداية فورم الاضافة -->
  <main role="main">
    <br>
    <form>
      <!-- اضافة اسم -->
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="50"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <!-- اضاقة ايميل -->
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <!-- اضافة باسورد -->
      <v-text-field
        v-model="password"
        :append-icon="show1 ? 'visibility' : 'visibility_off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Password"
        hint="At least 8 characters"
        counter
        @click:append="show1 = !show1"
      ></v-text-field>
      <!-- اضافة نوع اليوزر -->
      <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="Item"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
      <v-btn @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </main>
</div>
</template>

<script>
import Header from '../Header.vue'
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
    components:{
        appHeader : Header,
    },
    // استدعاء كلاسات الفالدلشن
		mixins: [validationMixin],
    validations: {
      name: { required, maxLength: maxLength(50) },
      email: { required, email },
      select: { required },
    },
    data: () => ({
      show1: false,
      name: '',
      email: '',
      select: null,
      items: [
        'Admin',
        'writer',
        'user'
      ],
      password:'',
      // قواعد للتحقق
      rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match')
      }
    }),
    computed: {
      // فكشنات التحقق من الادخال
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 50 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },
    methods: {
      submit () {
        this.$v.$touch()
        const formUser = {
          name : this.name,
          email : this.email,
          type : this.select,
          password : this.password  
        }
        // ارسال المعلومات الى صفحة الستورج لتنفيذ اضافة يوزر
        this.$store.dispatch('signup',formUser)
      },
      // تفريغ المدخلات
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
        this.password= ''
      }
    }
  }
</script>

<style scoped>
@charset "UTF-8";
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,400italic);
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css);
form{
  padding: 50px;
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
