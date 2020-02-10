import Vue from 'vue'

export async function fetchTodos ({commit}){
    try{
        /*const response = await Vue.axios({
            url: '/todos'
        })
        const payload = response && response.data*/
        const { data } = await Vue.axios({
            url: '/todos'
        })
        //commit('setTodos', data) funciona pero se recomienda hacer lo siguiente namespaced es setTodos
        commit('todos/setTodos', data, { root:true })
    }catch(e){
        commit('todosError', e.message)
    }finally{
        console.log('la peticion para obtener los datos a finalizado')
    }
}

export async function addTodo ({commit}, todo){
    try{
        /*const response = await Vue.axios({
            url: '/todos'
        })
        const payload = response && response.data*/        
        await Vue.axios({
            method: 'POST',
            url: '/todos',
            data:{
                id: Date.now(),
                text: todo.text,
                done: false
            }
        })
        //dispatch('fetchTodos')
    }catch(e){
        commit('todosError', e.message)
    }finally{
        console.log('la peticion para crear un todo a finalizado')
    }
}


export async function updateTodo ({commit}, todo){
    try{
        /*const response = await Vue.axios({
            url: '/todos'
        })
        const payload = response && response.data*/        
        await Vue.axios({
            method: 'PUT',
            url: `/todos/${todo.id}`,
            data:{
                id: todo.id,
                text: todo.text,
                done: todo.done
            }
        })
      //  dispatch('fetchTodos')
    }catch(e){
        commit('todosError', e.message)
    }finally{
        console.log('la peticion para actualizar un todo a finalizado')
    }
}

export async function updateTodoStatus ({commit, dispatch}, todo){
    try{
        /*const response = await Vue.axios({
            url: '/todos'
        })
        const payload = response && response.data*/        
        await Vue.axios({
            method: 'PUT',
            url: `/todos/${todo.id}`,
            data:{
                id: todo.id,
                text: todo.text,
                done: ! todo.done
            }
        })
        dispatch('fetchTodos')
    }catch(e){
        commit('todosError', e.message)
    }finally{
        console.log('la peticion para actualizar el estado un todo a finalizado')
    }
}

export async function removeTodo ({dispatch}, id){
    try{
        /*const response = await Vue.axios({
            url: '/todos'
        })
        const payload = response && response.data*/        
        await Vue.axios({
            method: 'DELETE',
            url: `/todos/${id}`,         
        })
        dispatch('fetchTodos') // cuando se esta en una pagina y se carge la pagina sin refrescar, en anterires no ya que un redirect actualizara las funciones como setTodos que llama a toda la data :)
    }catch(e){
        commit('todosError', e.message)
    }finally{
        console.log('la peticion para actualizar el estado un todo a finalizado')
    }
}

export async function getTodoUpdate ({commit}, id){
    try{
        /*const response = await Vue.axios({
            url: '/todos'
        })
        const payload = response && response.data*/        
        const {data} = await Vue.axios({
            method: 'GET',
            url: `/todos/${id}`,
            /*data:{
                id: todo.id,
                text: todo.text,
                done: todo.done
            }*/
        })
      //  dispatch('fetchTodos')
      commit('setTodo', data)
    }catch(e){
        commit('todosError', e.message)
    }finally{
        console.log('la peticion para actualizar un todo a finalizado')
    }
}