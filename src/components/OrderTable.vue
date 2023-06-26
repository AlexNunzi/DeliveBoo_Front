<script>
import {store} from '../store.js';
import CartItem from './CartItem.vue';
export default {
   name: 'OrderTable',
   data() {
      return {
         store
      }
   },
   components: {
      CartItem
   }
}
</script>

<template>
   <table class="table table-striped p-3" v-if="!store.cartIsEmpty()">
      <thead>
         <tr>
            <th scope="col">Piatto</th>
            <th scope="col" class="text-center">Quantità</th>
            <th scope="col">Prezzo</th>
         </tr>
      </thead>
      <tbody>
         <tr v-for="cart in store.cart">
            <CartItem
               :foodObject="cart"
            />
         </tr>
         <tr>
            <th scope="row">Totale</th>
            <td class="text-center fw-bold">
               {{ store.quantityCounter }}
            </td>
            <td class="fw-bold">
               {{ (store.totalPrice.toFixed(2)) }}€
            </td>
         </tr>
         <tr v-if="this.$route.name != 'checkout'">
            <th scope="row"></th>
            <td><button type="button" class="btn btn-danger p-1" data-bs-toggle="modal" data-bs-target="#CartModal" @click.stop="">Svuota carrello</button></td>
            <td>
               <router-link :to="{ name: 'checkout' }" class="btn btn-primary">Vai al pagamento</router-link>
            </td>
         </tr>
      </tbody>
      <!-- <tbody>
         <tr v-if="this.$route.name != 'checkout'">
            <th scope="row">-</th>
            <td>-</td>
            <td>-</td>
         </tr>
         <tr>
            <td></td>
            <td class="text-center">
               Il carrello è vuoto, se vuoi...
               <router-link :to="{ name: 'home' }" class="btn btn-primary">Torna alla pagina dei ristoranti</router-link>
            </td>
            <td></td>
         </tr>
      </tbody> -->
   </table>
   <div v-else>
      <h1>Scegli qualcosa</h1>
   </div>
</template>

<style lang="scss">
@use "../styles/general.scss";

</style>