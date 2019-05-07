import axios from 'axios'

//لتثبيت رابط حزن اضافه يوزر وتسجيل دخولهم بشكل كلوبل 
const instance = axios.create({
    baseURL:'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
})

export default instance