<template>
     <div data-bs-toggle="modal" data-bs-target="#exampleModal">
        <img :src="`${this.store.baseUrl}storage/${foodObject.image}`" :alt="'Immagine ristorante ' + foodObject.name">
        <div class="centrato flex-column">
            <h6 class="p-2 m-0">{{ foodObject.name }}</h6>
            <small>{{ foodObject.price }} €</small>
        </div>
    </div>
    <div id="btn-cart" class="my-2 bg-warning" @click="quantity++" v-show="quantity < 1">
        <i class="fa-brands fa-opencart"></i>
    </div>
    <div class="my-2" v-show="quantity >= 1">
        <span class="px-2 bg-warning border rounded-circle" @click="quantity--">-</span>
        <span class="px-2 mx-2 border">{{ this.quantity }}</span>
        <span class="px-2 bg-warning border rounded-circle" @click="quantity++">+</span>
    </div> 

    

</template>

<script>
import { store } from '../store.js';
export default {
    name: 'FoodCard',
    props: {
        foodObject: Object
    },
    data() {
        return {
            quantity: 0,
            store,
            
        }

    },
    mounted (){
       
    }
}

</script>