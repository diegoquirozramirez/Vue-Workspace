import Vue from 'vue'
import VueAxios from 'vue-axios'
import Axios from 'axios'

const baseUrl = 'http://localhost:3000'

Axios.defaults.baseURL = baseUrl

Vue.use(VueAxios, Axios)