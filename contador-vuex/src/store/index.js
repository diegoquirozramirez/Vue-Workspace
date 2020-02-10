import Vue from 'vue'
import Vuex from 'vuex' //plugin

Vue.use(Vuex)

export default new Vuex.Store({ //se crea la instancia de vuex
  state: {
    counter: 0,
    appName: 'Contador'
  },
  mutations: {
    increment(state, value){ //(state, opcional pasarle un valor)
      state.counter += value;
    },
    decrement(state, value){ //(state, opcional pasarle un valor)
      state.counter -= value;
    }
  },
  actions: {
  },
  modules: {
  }
})
