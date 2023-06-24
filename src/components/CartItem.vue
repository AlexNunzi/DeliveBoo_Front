<template>
    <th scope="row">{{ foodObject.name }}</th>
    <td v-if="store.cart[foodObject.slug]">
        <span class="px-2 bg-warning border rounded-circle" @click.stop="store.removeFromCart(foodObject)">-</span>
        <span class="px-2 mx-2 border">{{ store.cart[foodObject.slug].quantity }}</span>
        <span class="px-2 bg-warning border rounded-circle" @click.stop="store.addToCart(foodObject, restaurantSlug)">+</span>
    </td> 
    <td>{{ foodObject.price }}</td>
</template>

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

<style scoped lang="scss">
@use "../styles/general.scss";

</style>