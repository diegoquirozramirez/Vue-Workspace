<template>
    <div>About works!
        <!--  ante en el form @submit.prevent="addUser"-->
        <form  @submit.prevent>
            <input type="text" name="text" v-model="user.text" placeholder="Ingrese Texto">  <br>
            <button v-if="option == 1" @click="addUser">Agregar</button>
            <button v-else @click="EditUser(user.id)">Editar</button>
        </form>
         

       <ul v-for="user in users" :key="user.id">
           <li>{{user.id}}</li>
           <li>{{user.text}}</li>
           <li>{{user.done}}</li>
           <ul>
               <li ><button @click="deleteUser(user)" class="btn btn-danger">Eliminar</button></li>
               <li class="mt-3"><button  @click="editUser(user)" class="btn btn-success">Editar</button></li>
           </ul>
       </ul>
        
    </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'

export default {
    data(){
        return{
            users : [ ],
            user: {
                    id: Date.now(),
                    text: '',
                    done: false
            },
            option: 1           
            
        }
    },
    mounted(){
        axios.get('http://localhost:3000/todos').then(res =>{
            this.users = res.data
        },
        error => {
            console.log(error)
        })
    },
    methods:{
        addUser(){
            try {
                axios.post('http://localhost:3000/todos', this.user).then(res => {
                    const us = res.data
                    this.users.push(us);
                    this.user.id = '';
                    this.user.text = '';
                    this.user.done= '';
             
                },
                e =>{
                    console.log(e)
                })
                
            } catch (error) {
                console.log(error)
            }
        },

        deleteUser(user){
            alert(user.id)
       
        },

        editUser(user){
            this.option = 0
            this.user.text = user.text;

        },
        EditUser(id){
            Vue.axios({
                method: 'PUT',
                url: '/todos/${id}'
            }).then(res => {
                console.log(res)
            },
            err =>{
                console.log(err)
            })
        }
        
    },


}
</script>