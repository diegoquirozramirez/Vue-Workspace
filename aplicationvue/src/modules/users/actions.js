import Vue from 'vue'

export async function getUsers( { commit } ){
    try {
        const { data } = await Vue.axios({
            url : '/todos'
        })
        commit('users/setUsers', data, {root:true})
    } catch (error) {
        console.log(error.message)
    } finally {
        console.log('peticion terminada')
    }
}