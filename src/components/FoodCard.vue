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
            store,
        }
    }
}
</script>

<template>
    <div data-bs-toggle="modal" :data-bs-target="'#'+foodObject.slug">
        
        <img :src="`${this.store.baseUrl}storage/${foodObject.image}`" :alt="'Immagine ristorante ' + foodObject.name">

        <div class="centrato my-1">
            <h6 class="p-2">{{ foodObject.name }}</h6>
        </div>
        <small id="single-price">{{ foodObject.price }} €</small>
        <small id="total-price">{{ (foodObject.price * foodObject.quantity).toFixed(2)}} €</small>
    </div>
    <div class="my-2 pt-1" v-if="store.cart[foodObject.slug]">
        <span class="px-2 bg-warning border rounded-circle" @click="store.removeFromCart(foodObject)">-</span>
        <span class="px-2 mx-2 border">{{ store.cart[foodObject.slug].quantity }}</span>
        <span class="px-2 bg-warning border rounded-circle" @click="store.addToCart(foodObject, restaurantSlug)">+</span>
    </div> 
    <div id="btn-cart" class="my-2 mx-5 p-1 bg-warning rounded-5" @click="store.addToCart(foodObject, restaurantSlug)" v-else>
        <i class="fa-brands fa-opencart"></i>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.carta img{
    height: 10rem;
    width: 100%;
    object-fit: cover;
}

.centrato{
    height: 4rem;
}

#cart-canvas #single-price{
    display: none;
}

#restaurant-foods #total-price{
    display: none;
}

</style>