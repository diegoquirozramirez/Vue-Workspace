<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <div v-if="intro">
            Retanqueo Quiz <br>
          <b-button variant="primary" @click="empezar()">Empezar</b-button>
    </div>
    <div v-if="finall">
         <h4>Finalizó la QUIZ</h4>
         <h5>Gracias por elegir Acceso</h5>
         <h6>Puntaje obtenido : {{puntaje}}</h6>
     </div>
   
      <quiz-item :pregunta="preguntas[index]" :quizStage="quizStage" @indexIncrement="incremIndex"></quiz-item>
      
 
   
  </div>
  
</template>

<script>
import QuizItem from '@/components/QuizItem'
export default {


    components:{
        QuizItem
    },
    props: {
        msg: String,
        preguntas: {
            type: Array,
            required: true
        },
       
    },
    data(){
      return{
        intro: false,
        quizStage: false,
        index: 0,
        arrayResponse: [],
        finall: false,
        puntaje: 0
     
      }
    },
    created(){
        this.intro = true
        

    },
    methods: {
      empezar(){
        this.quizStage = true;
        this.intro = false
      },
      incremIndex(valor){  
        /*do{
          this.index = this.index + 1;
          console.log(valor)
        }while((this.index) <= preguntas.length) */ 
        if( valor === this.preguntas[this.index].validated){
          this.puntaje = this.puntaje + 1 
        } 
        this.index = this.index + 1;
        console.log(valor)
        if(this.index == 3){
          this.quizStage = false;
          this.finall = true
        }
        
      }
    }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
