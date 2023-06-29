<script>
import {store} from '../store.js';
import { router } from '../router';
import FoodCard from "../components/FoodCard.vue";

export default {
   name: 'AppCart',
   data() {
      return {
         store,
         restaurantSlug: localStorage.getItem('currentSlug'),
      }
   },
   components: {
      FoodCard,
   },
   methods: {
      goToPayment() {
         router.push({ name: 'checkout'})
      }
   }   
}
</script>

<template>
   <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
         <h5 class="offcanvas-title" id="offcanvasRightLabel">Carrello</h5>
         <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div id="cart-canvas" class="offcanvas-body">
         <div v-if="!store.cartIsEmpty()" class="">
            <div class="row row-cols-2 g-3 py-3 justify-content-around">
               <div v-for="food in store.cart" class="col carta bg-white text-center p-0">
                  <FoodCard :foodObject="food" :restaurantSlug="restaurantSlug" />
               </div>
            </div>
            <div>
               <h1>Totale: {{ (store.totalPrice.toFixed(2)) }}€</h1>
            </div>
            <div class="d-flex justify-content-around">
               <button type="button" class="empty-cart btn btn-danger" data-bs-toggle="modal" data-bs-target="#CartModal" @click.stop="">Svuota carrello</button>
               <button @click="goToPayment()" class="pagamento btn btn-primary" data-bs-dismiss="offcanvas">Vai al pagamento</button>
            </div>
         </div>
         <div v-else>
            <h4 class="text-center">Scegli quello che vuoi mangiare oggi!</h4>
         </div>
         
      </div>
   </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

#offcanvasRight{
   width: 35rem;
}
</style>