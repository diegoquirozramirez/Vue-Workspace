import Vue from 'vue'

export async function getPreguntas( {commit} ){
    try{
        const { data } = await Vue.axios({            
            url: '/quiz'            
        })
        commit('quiz/addRespuestas', data, {root:true})
    }catch(e){
        console.log(e)
    }finally{
        console.log('Finalizo la tarea')
    }
}