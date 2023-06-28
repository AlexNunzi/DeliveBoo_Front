<script>
import axios from 'axios';
import {store} from '../store.js';
import FoodCard from "../components/FoodCard.vue";

export default {
   name: 'AppCart',
   data() {
      return {
         store,
         restaurant: {},
         restaurantSlug: localStorage.getItem('currentSlug'),
         foods: [],
      }
   },
   components: {
      FoodCard,
   },
   methods: {
      getFoods() {
         const restaurant_slug = this.$route.params.slug;
         axios.get(`${this.store.urlApi}foods/${restaurant_slug}`)
            .then(response => {
               this.restaurant = response.data.results.restaurant;
               this.foods = response.data.results.foods;
            });
      },
   },
   created() {
      this.getFoods();
      this.$watch(
         () => this.$route.params,
         (toParams, previousParams) => {
            this.getFoods();
         }
      )
   }
}
</script>

<template>
   <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
         <h5 class="offcanvas-title" id="offcanvasRightLabel">Carrello</h5>
         <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
         <div v-if="!store.cartIsEmpty()" class="">
            <div class="row row-cols-2 g-3 py-3 justify-content-around">
               <div v-for="food in store.cart" class="col carta bg-white text-center p-0">
                  <FoodCard :foodObject="food" :restaurantSlug="restaurant.slug" />
               </div>
            </div>
            <div>
               <h1>qua ci andranno i totali</h1>
            </div>
            <div class="d-flex justify-content-around">
               <button type="button" class="empty-cart btn btn-danger" data-bs-toggle="modal" data-bs-target="#CartModal" @click.stop="">Svuota carrello</button>
               <router-link :to="{ name: 'checkout' }" class="pagamento btn btn-primary">Vai al pagamento</router-link>
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