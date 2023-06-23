<template>
     <div data-bs-toggle="modal" data-bs-target="#exampleModal">
        <img :src="`${this.store.baseUrl}storage/${foodObject.image}`" :alt="'Immagine ristorante ' + foodObject.name">
        <div class="centrato flex-column">
            <h6 class="p-2 m-0">{{ foodObject.name }}</h6>
            <small>{{ foodObject.price }} €</small>
        </div>
    </div>
    <div id="btn-cart" class="my-2 bg-warning" @click="addToCart()" v-show="quantity < 1">
        <i class="fa-brands fa-opencart"></i>
    </div>
    <div class="my-2" v-show="quantity >= 1">
        <span class="px-2 bg-warning border rounded-circle" @click="removeToCart()">-</span>
        <span class="px-2 mx-2 border">{{ this.quantity }}</span>
        <span class="px-2 bg-warning border rounded-circle" @click="addToCart()">+</span>
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
            index: null,
            store,
            
            
        }

    },
    methods: {
        addToCart(){
            console.log('indice:' + this.index);
            let carrello = [];
            const carrelloPrecedente = localStorage.getItem('ilNostroCarrello');
            if(carrelloPrecedente) {
                carrello = Object.entries(JSON.parse(carrelloPrecedente)).reduce((arr, [key, value]) => (arr[key] = value,arr), []);
            }

            console.log(carrello);

            if(carrello[this.foodObject.slug]) {
                console.log('esiste già');
                carrello[this.foodObject.slug].quantity++;
                localStorage.setItem('ilNostroCarrello', JSON.stringify({...carrello}));
            } else {
                console.log('non esiste');
                carrello[this.foodObject.slug] = {
                    quantity: 1,
                    name: this.foodObject.name,
                    price: this.foodObject.price,
                    foodId: this.foodObject.id
                };
                this.index = carrello.length - 1;
                localStorage.setItem('ilNostroCarrello', JSON.stringify({...carrello}));
            }
            this.updateQuantity();
        },
        checkExists(check,arr) {
            let found = false;
            arr.forEach(e => {
                if(e.name == check){
                    found = true;
                }
            }); 
            return found;
        },
        testStorage(id){
          let carrello= [];
          //recuperiamo dal localstorage il valore della key dal carrellolocale che è una stringa
           const carrelloPrecedente = localStorage.getItem('carrelloLocale');
           console.log(carrelloPrecedente);
           
           if(carrelloPrecedente) {
            //JSON.parse traduce la stringa da formato JSON in un array o oggetto o variabile di js
             carrello = JSON.parse(carrelloPrecedente);
           }
            carrello.push(id);
           
           //JSON.stringify traduce l'arrey o la variabile di js in una stringa in formato JSON
           localStorage.setItem('carrelloLocale',JSON.stringify(carrello));
        },
        updateQuantity() {
            let carrello = [];
            const carrelloPrecedente = localStorage.getItem('ilNostroCarrello');
            if(carrelloPrecedente) {
                carrello = Object.entries(JSON.parse(carrelloPrecedente)).reduce((arr, [key, value]) => (arr[key] = value,arr), []);
            }
            if(carrello[this.foodObject.slug]){
                this.quantity = carrello[this.foodObject.slug].quantity;
            }
        }
    },
    mounted() {
        this.updateQuantity();
    }
}

</script>

<style scoped lang="scss">
@use "../styles/general.scss";

.carta img{
   height: 10rem;
   width: 100%;
   object-fit: cover;
}

</style>