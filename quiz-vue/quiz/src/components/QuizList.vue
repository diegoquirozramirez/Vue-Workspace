<template>
    <div>
        <quiz-item v-for="pregunta in preguntas" :key="pregunta" :pregunta="pregunta"></quiz-item>
    </div>
</template>

<script>
import QuizItem from '@/components/QuizItem'
export default {
    components:{
        QuizItem
    },
    props:{
        preguntas : {
            type: Array,
            required: true
        }
    }
}
</script>