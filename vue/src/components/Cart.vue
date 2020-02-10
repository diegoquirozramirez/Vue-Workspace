<template>
    <div v-if="cart.length">
        <b-table striped hover :items="cart" :fields="fields">
            <template v-slot:cell(actions)="cell">
                <b-button
                size="sm"
                variant="danger"
                @click.stop="removeProductFromCart(cell.item)"
                >
                Eliminar
                </b-button>

            </template>
         
        </b-table>
      
        <b-alert show variant="success" class="text-center">
           Total S/{{ totalCosto.toFixed(2) }} <br>
           
         
        </b-alert>
       
    </div>
    <b-alert v-else show variant="info">No hay productos en el carrito</b-alert>
    
</template>

<script>
import {mapGetters, mapState, mapMutations} from 'vuex'

export default {
    data(){
        return{
            fields: ['name','qty','price','actions']
        }
    },
    computed:{
        ...mapState('cart', ['cart']),
        ...mapGetters('cart', ['totalCosto','myRound']),

    },
  
    methods:{
        ...mapMutations('cart', ['removeProductFromCart']),

    },
    
}
</script>