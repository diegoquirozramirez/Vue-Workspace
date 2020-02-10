import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const urlBase = 'http://localhost:3000'

axios.defaults.baseURL= urlBase
Vue.use(VueAxios, axios)