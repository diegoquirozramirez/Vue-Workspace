<template>
    <div v-if="selectedTodo">
        <todo-form :todo="selectedTodo" @processTodo="updateTodo" todoSubmit="Actualizar todo"></todo-form>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import TodoForm from '@/components/TodoForm'
export default {
    components:{
        TodoForm
    },
    /*data(){
        return{
            todo: null
        }
    },*/
     mounted(){
        const id = this.$route.params.id
        this._getTodoUpdate(id)
        //console.log(id)
    },
    computed:{
        ...mapState('todos', ['selectedTodo'])
    },
   
    methods:{
        ...mapActions({
            _updateTodo: 'todos/updateTodo',
            _getTodoUpdate: 'todos/getTodoUpdate',
        }),
        updateTodo(todo){
            this._updateTodo(todo).then(()=> {
                this.$router.push('/todos')
            })

        }
    }
    
}
</script>