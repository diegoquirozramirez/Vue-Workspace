import Vue from 'vue'
import Vuex from 'vuex'
import * as localForage from "localforage";
import VuexPersistence from 'vuex-persist'
//import productsModule from '../modules/products' //con alias
import products from '../modules/products' //sin alias
import cart from '../modules/cart' //sin alias

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  //storage: window.localStorage,
  storage: localForage,
  modules: ['cart'] //para guardar en local storage solamente
})


export default new Vuex.Store({
  /*state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }*/

  /* BASADO EN MODULOS */
  state:{ //rootState

  },
  modules:{
    products, //productState
    cart
  },
 plugins: [vuexLocal.plugin]
})
