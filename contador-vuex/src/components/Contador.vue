<template>
    <div class="container">
        <span id="titulo">Componente Contador en VueJs - {{autor}} - {{appName}}</span> 
    
        <button class="btn btn-success btn-block" @click="$store.commit('increment',1)">Incrementar (directo plugin)</button>
        <div class="alert alert-primary mt-3 text-center">
            <button class="btn btn-primary" @click="increment(1)"> Incrementar con Vuex </button>
            {{$store.state.counter}} {{counter}}
            <button class="btn btn-info" @click="decrement(1)"> Decrementar con Vuex </button>
        </div>
        <button class="btn btn-danger btn-block" @click="$store.commit('decrement',1)">Decrementar Incrementar (directo plugin)</button>
    
    </div>
</template>

<script >
import {mapState, mapMutations} from 'vuex'
export default ({
    data(){
        return{
            autor: "Diego Quiroz Ramirez",
        }
    },
    computed: {
        ...mapState(['counter','appName'])
    },
    methods:{
        ...mapMutations(['increment', 'decrement'])
    }
   
})
</script>

<style scoped lang="stylus">
  
</style>