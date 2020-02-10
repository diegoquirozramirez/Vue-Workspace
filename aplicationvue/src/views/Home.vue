<template>
  <div class="home">
    <kanban-list v-bind:users="userList"></kanban-list>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions, mapGetters} from 'vuex'
import KanbanList from '@/components/kanban/KanbanList'

export default {
  name: 'Home',
  components: {
    KanbanList
  },
  mounted(){
    this.getUsers()
  },
  methods:{
    ...mapActions('users', ['getUsers'])
  },
  
  computed:{
    ...mapGetters('users', ['userList'])
  }
}
</script>
