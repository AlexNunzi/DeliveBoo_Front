<script>
import { store } from '../store.js';

export default {
    name: 'CartItem',
    data() {
        return {
            store
        }
    },
    props: {
        foodObject: Object
    }
}
</script>

<template>
    <th scope="row">{{ (foodObject.name).substring(0,30) + " ..." }}</th>
    <td v-if="store.cart[foodObject.slug]">
        <span class="px-2 bg-warning border rounded-circle" @click.stop="store.removeFromCart(foodObject)">-</span>
        <span class="px-2 mx-2 border">{{ store.cart[foodObject.slug].quantity }}</span>
        <span class="px-2 bg-warning border rounded-circle" @click.stop="store.addToCart(foodObject, restaurantSlug)">+</span>
    </td> 
    <td>{{ (foodObject.price * foodObject.quantity).toFixed(2)}}€</td>
    <td>
        <div class="bg-danger p-2 rounded-3" @click="">
            <i class="fa-solid fa-trash-can"></i>
        </div>
    </td>
</template>

<style scoped lang="scss">
@use "../styles/general.scss";

</style>