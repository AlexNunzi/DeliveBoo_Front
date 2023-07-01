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
    },
    methods: {
        cutName(name) {
            if (name.length > 30) {
                return (name).substring(0,30) + " ..."
            } else {
                return name
            }
        }
    }
}
</script>

<template>
    <th scope="row">{{ cutName(foodObject.name) }}</th>
    <td v-if="store.cart[foodObject.slug]">
        <i class="fa-solid fa-circle-minus text-danger fs-4" @click="store.removeFromCart(foodObject)"></i>
        <span class="px-2 mx-2 border">{{ store.cart[foodObject.slug].quantity }}</span>
        <i class="fa-solid fa-circle-plus text-success fs-4" @click="store.addToCart(foodObject, restaurantSlug)"></i>
    </td> 
    <td>{{ (foodObject.price * foodObject.quantity).toFixed(2)}}€</td>
    <td class="td-elimina">
        <div class="btn elimina bg-danger p-2 rounded-3" @click.stop="store.removeCartItem(foodObject)">
            <i class="fa-solid fa-trash-can text-white"></i>
        </div>
    </td>
</template>

<style scoped lang="scss">
@use "../styles/general.scss";

table .td-elimina{
    display: flex;
    justify-content: center;
    padding: 12px 0;
}

.elimina{
    width: 2rem;
}

</style>