<script>
import { store } from '../store.js';
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
         router.push({ name: 'checkout' })
      }
   }
}
</script>

<template>
   <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
         <h3 class="offcanvas-title fw-bold" id="offcanvasRightLabel">Carrello</h3>
         <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div id="cart-canvas" class="offcanvas-body">
         <div v-if="!store.cartIsEmpty()" class="">
            <div class="row row-cols-2 py-3 justify-content-between">
               <div v-for="food in store.cart" class="col carta p-0 bg-white text-center">
                  <FoodCard :foodObject="food" :restaurantSlug="restaurantSlug" />
               </div>
            </div>
            <div>
               <h1 class="py-3">Totale: {{ (store.totalPrice.toFixed(2)) }}€</h1>
            </div>
            <div class="d-flex justify-content-around">
               <button type="button" class="empty-cart btn btn-danger fancy-button" data-bs-toggle="modal"
                  data-bs-target="#CartModal" @click.stop="">Svuota<br>carrello</button>
               <button v-if="this.$route.name != 'checkout'" @click="goToPayment()"
                  class="pagamento btn p-2 fancy-button bg-success" data-bs-dismiss="offcanvas">Vai al<br>pagamento</button>
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

#offcanvasRight {
   width: 35rem;
}
</style>