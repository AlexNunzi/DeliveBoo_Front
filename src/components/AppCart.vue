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
            <div class="row row-cols-2 py-3 justify-content-around">
               <div v-for="food in store.cart" class="col carta bg-white text-center border">
                  <FoodCard :foodObject="food" :restaurantSlug="restaurantSlug" />
               </div>
            </div>
            <div>
               <h1>Totale: {{ (store.totalPrice.toFixed(2)) }}€</h1>
            </div>
            <div class="d-flex justify-content-around">
               <button type="button" class="empty-cart btn btn-danger fancy-button bg-danger" data-bs-toggle="modal"
                  data-bs-target="#CartModal" @click.stop="">Svuota carrello</button>

               <button v-if="this.$route.name != 'checkout'" @click="goToPayment()"
                  class="pagamento btn p-2 fancy-button bg-success" data-bs-dismiss="offcanvas">Vai al pagamento</button>
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

.fancy-button {
   display: inline-block;
   padding: 5px;
   border: none;
   color: #fff;
   font-weight: bold;
   text-transform: uppercase;
   letter-spacing: 2px;
   border-radius: 10px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
   position: relative;
   overflow: hidden;
   transition: transform 0.3s ease-in-out;
   cursor: pointer;
}

.fancy-button:before {
   content: "";
   position: absolute;
   top: 0;
   left: -100%;
   width: 100%;
   height: 100%;
   background-color: rgba(255, 255, 255, 0.2);
   transform: skewX(-30deg);
   transition: left 0.3s ease-in-out;
}

.fancy-button:hover {
   transform: scale(1.1);
}

.fancy-button:hover:before {
   left: 100%;
}
</style>