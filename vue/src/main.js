import Vue from 'vue'
import App from './App.vue'
import store from './store'

require('./plugins') //importamos todos los plugins de la carpeta Plugins

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
