import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://api-vue.aldogranados.com/api/';//agregar ruta de la api
//axios.defaults.baseURL = 'http://localhost:8000/api/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.prototype.$axios = axios

let auth = window.localStorage.getItem('auth-granados');
if(auth){
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth;
}