<template>
    <b-container>
        <b-table striped hover :items="user" :fields="fields">
             <template v-slot:cell(actions)="row">
                <b-button variant="info" size="sm" class="mr-1">
                Editar
                </b-button>
                <b-button variant="danger" size="sm" @click="info(row.item)" >
                ELiminar
                </b-button>
            </template>

        </b-table>
         

    </b-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
    props:{
        user:{
            type: Object,
            required: true
        }
    },
    data(){
        return{
            //fields: ['id','text','done',  { key: 'actions', label: 'Actions' }]
            fields: [
          { key: 'id', label: 'Identificador', sortable: true, sortDirection: 'desc' },
          { key: 'text', label: 'Texto', sortable: true, class: 'text-center' },
          { key: 'done', label: 'Estado', sortable: true, class: 'text-center' },

          { key: 'actions', label: 'Actions' }
        ],
        }
    },
    computed:{
        ...mapState('users', ['users'])
    },
    methods:{
        info(parms){
            alert(parms.texto)
        }
    }

}
</script>