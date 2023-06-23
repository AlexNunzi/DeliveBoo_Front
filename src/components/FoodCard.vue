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
        <span class="px-2 bg-warning border rounded-circle" @click="removeFromCart()">-</span>
        <span class="px-2 mx-2 border">{{ this.quantity }}</span>
        <span class="px-2 bg-warning border rounded-circle" @click="addToCart()">+</span>
    </div> 

    

</template>

<script>
import { store } from '../store.js';
export default {
    name: 'FoodCard',
    props: {
        foodObject: Object,
        restaurantSlug: String
    },
    data() {
        return {
            quantity: 0,
            store,
            foodSlug: this.foodObject.slug
        }

    },
    methods: {
        // Inizializzo il carrello
        checkLocalCart(){
            // Controllo se esiste già un carrello nel localStorage
            const carrelloPrecedente = localStorage.getItem('ilNostroCarrello');
            // Se esiste lo restituisco
            if(carrelloPrecedente) {
                // Riconverto l'oggetto carrello in un array di oggetti
                return Object.entries(JSON.parse(carrelloPrecedente)).reduce((arr, [key, value]) => (arr[key] = value,arr), []);
                // Altrimenti restituisco un array vuoto
            } else {
                return [];
            }
        },
        // Aggiunta food al carrello
        addToCart(){
            // Recupero i dati dal localStorage se esistono
            let carrello = this.checkLocalCart();
            
            // Recupero da localStorage il riferimento al ristorante da cui sto ordinando
            let currentRestaurant = localStorage.getItem('currentRestaurant');
            let currentSlug = localStorage.getItem('currentSlug');

            // Se non esiste già un riferimento ci salvo l'id del ristorante da cui sto ordinando
            if(!currentRestaurant) {
                currentRestaurant = this.foodObject.restaurant_id;
                currentSlug = this.restaurantSlug;
                // E lo salvo nel localStorage
                localStorage.setItem('currentRestaurant', currentRestaurant);
                localStorage.setItem('currentSlug', currentSlug);
            }

            // Se è presente nel carrello una key uguale allo slug di food
            if(carrello[this.foodSlug]) {
                // Aggiungo uno alla sua proprietà quantity
                carrello[this.foodSlug].quantity++;
                // E lo salvo
                localStorage.setItem('ilNostroCarrello', JSON.stringify({...carrello}));
            } else {
                // Altrimenti aggiungo all'array un nuovo oggetto la cui key è uguale allo slug di food
                carrello[this.foodSlug] = {
                    quantity: 1,
                    name: this.foodObject.name,
                    price: this.foodObject.price,
                    foodId: this.foodObject.id
                };
                // E lo salvo nel localStorage
                localStorage.setItem('ilNostroCarrello', JSON.stringify({...carrello}));
            }
            // Aggiorno la proprietà quantiti all'interno di data di questo component
            this.updateQuantity();
        },
        // Rimozione food da carrello
        removeFromCart(){
            // Recupero i dati dal localStorage se esistono
            let carrello = this.checkLocalCart();
            // Se è presente nel carrello una key uguale allo slug di food
            if(carrello[this.foodSlug]) {
                // Faccio -1 alla sua proprietà quantity
                carrello[this.foodSlug].quantity--;
                // Se la sua proprietà quantity è uguale a 0 cancello la coppia chiave-valore la cui key è uguale allo slug
                if(carrello[this.foodSlug].quantity == 0) {
                    delete carrello[this.foodSlug];
                }
                if(carrello.length) {
                    currentRestaurant = this.foodObject.restaurant_id;
                    localStorage.setItem('currentRestaurant', currentRestaurant);
                }
                // Se il carrello è vuoto pulisco il localStorage
                if(Object.keys(carrello).length == 0) {
                    localStorage.clear();
                } else {
                    // Altrimenti aggiorno i dati precedentemente salvati
                    localStorage.setItem('ilNostroCarrello', JSON.stringify({...carrello}));
                }
            }
            // Aggiorno la proprietà quantiti all'interno di data di questo component
            this.updateQuantity();
        },
        // Aggiorno proprietà quantity
        updateQuantity() {
            // Recupero i dati dal localStorage se esistono
            let carrello = this.checkLocalCart();
            // Se è presente nel carrello una key uguale allo slug di food
            if(carrello[this.foodSlug]){
                // Assegno alla proprietà quantity all'interno di data di questo component il valore di quantity contenuto nel carrello
                this.quantity = carrello[this.foodSlug].quantity;
            } else {
                // Altrimenti la setto a zero
                this.quantity = 0;
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