<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <b-container class="container">
       <quiz-list msg="Quiz" v-bind:preguntas="geting"></quiz-list>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions, mapGetters} from 'vuex'
import QuizList from '@/components/QuizList.vue'

export default {

  components: {
    QuizList
  },
  data(){
    return {
     
    }
  },
  mounted(){
    this.getPreguntas();
    
  },
  methods:{
    ...mapActions('quiz', ['getPreguntas'])
  },
  computed:{
    ...mapGetters('quiz', ['geting']),

  }
}
</script>
