import state from './state' //contiene los datos
import * as mutations from './mutations' //alteran los datos
//import * as actions from './actions'
import * as getters from './getters' //filtran estos datos

export default {
    namespaced: true,
    state,
    mutations,
    getters
}