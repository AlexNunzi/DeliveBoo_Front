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
    <div data-bs-toggle="modal" data-bs-target="#exampleModal">
        <img :src="`${this.store.baseUrl}storage/${foodObject.image}`" :alt="'Immagine ristorante ' + foodObject.name">
        <div class="centrato flex-column">
            <h6 class="p-2 m-0">{{ foodObject.name }}</h6>
            <small>{{ foodObject.price }} €</small>
        </div>
    </div>
    <div class="my-2" v-if="store.cart[foodObject.slug]">
        <span class="px-2 bg-warning border rounded-circle" @click="store.removeFromCart(foodObject)">-</span>
        <span class="px-2 mx-2 border">{{ store.cart[foodObject.slug].quantity }}</span>
        <span class="px-2 bg-warning border rounded-circle" @click="store.addToCart(foodObject, restaurantSlug)">+</span>
    </div> 
    <div id="btn-cart" class="my-2 bg-warning" @click="store.addToCart(foodObject, restaurantSlug)" v-else>
        <i class="fa-brands fa-opencart"></i>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/general.scss";

.carta img{
    height: 10rem;
    width: 100%;
    object-fit: cover;
}

</style>