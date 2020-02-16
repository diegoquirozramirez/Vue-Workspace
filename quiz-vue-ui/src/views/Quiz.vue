<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo_acceso.svg" style="width:25%; margin-bottom:100px">
    <b-container class="container">
       <quiz-list msg="Quiz V02" v-bind:preguntas="geting"></quiz-list>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions, mapGetters} from 'vuex'
import QuizList from '@/components/Quiz/QuizList'

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
