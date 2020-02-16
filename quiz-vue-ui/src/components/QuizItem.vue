<template>
    <div class="contiainer">       
    
     <div v-if="quizStage">
       
            <b-form-group :label="pregunta.quiz">
                <b-form-radio-group
                    id="radio-slots"
                    v-model="selected"       
                    name="radio-options-slots"
                >
                    <!-- Radios in this slot will appear first -->
                    <template v-slot:first>
                        <b-form-radio :value="pregunta.answer[0].value" >{{pregunta.answer[0].value}}</b-form-radio>
                        <b-form-radio :value="pregunta.answer[1].value">{{pregunta.answer[1].value}}</b-form-radio>
                        <b-form-radio :value="pregunta.answer[2].value">{{pregunta.answer[2].value}}</b-form-radio>                     
                    </template>
                </b-form-radio-group>
                  <b-button @click="$emit('indexIncrement', selected)" >Siguiente</b-button>

            </b-form-group>

            <!--div-- class="mt-3">Selected: <strong>{{ selected }}</strong></!--div-->
           
     </div>
    
   
    </div>
</template>

<script>
export default {
    props: {
        pregunta: {
            //type:Object,
            required: true
        },
        quizStage: false
    },
    data(){
        return{
            numero_pregunta: Number,
            selected: '',
            index: 1,
        }
           
    },
    

 
}
</script>