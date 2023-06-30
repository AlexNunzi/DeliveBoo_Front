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
   <div v-if="!store.cartIsEmpty()">
      <table id="tabella" class="table table-striped p-3 text-center">
         <thead>
            <tr>
               <th scope="col">Piatto</th>
               <th scope="col">Quantità</th>
               <th scope="col">Prezzo</th>
               <th scope="col">Elimina</th>
            </tr>
         </thead>
         <tbody>
            <tr v-for="cart in store.cart" class="align-middle">
               <CartItem
                  :foodObject="cart"
               />
            </tr>
            <tr>
               <th scope="row">Totale</th>
               <td class="fw-bold">
                  {{ store.quantityCounter }}
               </td>
               <td class="fw-bold">
                  {{ (store.totalPrice.toFixed(2)) }}€
               </td>
               <td></td>
            </tr>
            <!-- <tr v-if="this.$route.name != 'checkout'">
               <th scope="row"></th>
               <td></td>
               <td></td>
            </tr> -->
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
      <div class="d-flex justify-content-around">
         <button type="button" class="empty-cart btn btn-danger" data-bs-toggle="modal" data-bs-target="#CartModal" @click.stop="">Svuota carrello</button>
         <router-link v-if="this.$route.name != 'checkout'" :to="{ name: 'checkout' }" class="pagamento btn btn-primary">Vai al pagamento</router-link>
      </div>
   </div>
   <div v-else>
      <h4 class="text-center">Scegli quello che vuoi mangiare oggi!</h4>
   </div>
</template>

<style lang="scss">
@use "../styles/general.scss";

#tabella{
   width: 100%;
}

#tabella .pagamento, #tabella .empty-cart{
   width: 7rem;
   padding: 0;
   font-weight: bold;
}


@media all and (max-width: 35rem) {
   #tabella{
      width: 100%;
   }
}

</style>