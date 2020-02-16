<template>    
    <div>
        <quiz-list :preguntas="getingPreguntas"></quiz-list>
    </div>
   
</template>
<script>
import  { mapActions, mapGetters } from 'vuex'
import QuizList from '@/components/QuizList'

export default {
    components:{
        QuizList
    },
   
    mounted(){
        this.getPreguntas();
        console.log(this.getingPreguntas)

    },
    methods: {
        ...mapActions('quiz', ['getPreguntas'])
    },
    computed:{
        ...mapGetters('quiz', ['getingPreguntas'])
    }
    
}
</script>