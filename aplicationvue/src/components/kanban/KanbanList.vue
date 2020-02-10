<template>
    <div v-if="users.length">
        <kanban-item  v-bind:user="users"></kanban-item>
    </div>
    <b-alert v-else>No tiene datos</b-alert>
   
</template>
<script>
import KanbanItem from './KanbanItem'
export default {
    components:{
        KanbanItem
    },
    props:{
        users: {
            type: Array,
            required: true
        }
    }
}
</script>