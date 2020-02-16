<template>
    <div class="contiainer">       
    
     <div v-if="quizStage">
         <div class="container">
             <div class="row">
                 <div class="col-12">
                    <p>{{pregunta.quiz}}</p>
                 </div>                
                <div class="col-4">
                    <div class="options" @click="$emit('indexIncrement', pregunta.answer[0].value)" >
                        <p  class="text-center">{{pregunta.answer[0].value}}</p>
                    </div>
                </div>  
                <div class="col-4">
                    <div class="options" @click="$emit('indexIncrement', pregunta.answer[1].value)">
                        <p class="text-center">{{pregunta.answer[1].value}}</p>
                    </div>
                </div>    
                <div class="col-4">
                    <div class="options" @click="$emit('indexIncrement', pregunta.answer[2].value)">
                        <p class="text-center">{{pregunta.answer[2].value}}</p>
                    </div>
                </div>               
            </div>
         </div>
         
       
            <!--b-form-group :label="pregunta.quiz"
            >
                <b-form-radio-group
                    id="radio-slots"
                    v-model="selected"       
                    name="radio-options-slots"
                >
                 
                    <template v-slot:first>
                        <b-form-radio :value="pregunta.answer[0].value" >{{pregunta.answer[0].value}}</b-form-radio>
                        <b-form-radio :value="pregunta.answer[1].value">{{pregunta.answer[1].value}}</b-form-radio>
                        <b-form-radio :value="pregunta.answer[2].value">{{pregunta.answer[2].value}}</b-form-radio>                     
                    </template>
                </b-form-radio-group>
                  <b-button @click="$emit('indexIncrement', selected)" >Siguiente</b-button>

            </b-form-group-->

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
    methods: {
        ver(){
            alert('hola')
        }
    }
    

 
}
</script>

<style scoped>
.options{
    background-color: #BAD3E5;
    padding: 15px;
    cursor: pointer;
}
p{
    text-align: center
}
</style>