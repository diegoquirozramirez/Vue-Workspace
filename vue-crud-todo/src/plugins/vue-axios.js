import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const baseUrl = 'http://localhost:3000'

/** el baseUrl es para que en las peticiones http como axios.get('http://localhost:3000/todos') 
 * no sea tan larga sino simplificarlo con un simple axios.get('/todos')
  */


axios.defaults.baseURL = baseUrl;

Vue.use(VueAxios, axios)