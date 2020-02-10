<template>
    <b-row class="mb-2">
        <b-col cols="2">{{todo.text}}</b-col>
        <b-col class="ml-3" cols="1">{{todo.done}}</b-col>
        <b-col >
            <b-button variant="primary" class="ml-2" @click="goToUpdateTodo(todo)">Editar</b-button>
        </b-col>
        <b-col>
            <b-button variant="warning"  class="ml-2" @click="updateTodoStatus(todo)">Estado</b-button>
        </b-col>
    
        <b-col>
            <b-button variant="danger"  class="ml-2" @click="removeTodo(todo.id)">Eliminar</b-button>
        </b-col>
    </b-row>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'
export default {
    props:{
        todo:{
            type:Object,
            required: true
        }
    },
    methods:{
        ...mapActions({
            _updateTodoStatus: 'todos/updateTodoStatus',
            _removeTodo: 'todos/removeTodo',
        }),
        //...mapMutations('todos', ['setTodo']),
        ...mapMutations({
            _setTodo: 'todos/setTodo'
        }),
        goToUpdateTodo( todo ){
            this._setTodo(todo)
            this.$router.push({
                name: 'todos-update',
                //path: `/todos/${todo.id}/update`,
                params: {id: todo.id}
            })
        },
        updateTodoStatus ( todo ){
            this._updateTodoStatus(todo)
        },
        removeTodo (id){
            this._removeTodo(id)
        }
    }
}
</script>