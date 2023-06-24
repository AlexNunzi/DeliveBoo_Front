<template>
   <table class="table table-striped p-3">
      <thead>
         <tr>
            <th scope="col">Piatto</th>
            <th scope="col" class="text-center">Quantità</th>
            <th scope="col">Prezzo</th>
         </tr>
      </thead>
      <tbody v-if="!store.cartIsEmpty()">
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
               {{ store.totalPrice }} €
            </td>
         </tr>
         <tr v-if="this.$route.name != 'checkout'">
            <th scope="row"></th>
            <td></td>
            <td>
               <router-link :to="{ name: 'checkout' }" class="btn btn-primary">
                  Vai al pagamento
               </router-link>
            </td>
         </tr>
      </tbody>
      <tbody v-else>
         <tr v-if="this.$route.name != 'checkout'">
            <th scope="row">-</th>
            <td>-</td>
            <td>-</td>
         </tr>
         <tr v-else>
            <td></td>
            <td class="text-center">
               Il carrello è vuoto, se vuoi...
               <router-link :to="{ name: 'home' }" class="btn btn-primary">
                  Torna alla pagina dei ristoranti
               </router-link>
            </td>
            <td></td>
         </tr>
      </tbody>
   </table>
</template>

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

<style lang="scss">
@use "../styles/general.scss";

</style>