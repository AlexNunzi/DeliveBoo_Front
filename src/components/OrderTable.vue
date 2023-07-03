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
            <tr class="fs-4">
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
         </tbody>
      </table>
      <div class="centrato pb-3">
         <button type="button" class="empty-cart btn fancy-button bg-danger" data-bs-toggle="modal" data-bs-target="#CartModal" @click.stop="">Svuota<br>carrello</button>
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