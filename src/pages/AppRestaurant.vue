<script>
import axios from 'axios';
import { store } from '../store.js';
import { router } from '../router';
import FoodModal from "../components/FoodModal.vue";
import FoodCard from "../components/FoodCard.vue";

export default {
   name: "AppRestaurant",
   data() {
      return {
         store,
         restaurant: {},
         restaurantImage: "",
         restaurantSlug: localStorage.getItem('currentSlug'),
         foods: [],
      }
   },
   components: {
      FoodModal,
      FoodCard,
   },
   methods: {
      getRestaurantImage(pathImg) {
         return new URL(`${this.store.baseUrl}storage/${pathImg}`, import.meta.url).href;
      },
      modalShow() {
         let modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
         if (!this.checkRestaurantId() && localStorage.getItem('currentRestaurant') != null) {
            modal.show();
         }
      },
      getFoods() {
         const restaurant_slug = this.$route.params.slug;
         axios.get(`${this.store.urlApi}foods/${restaurant_slug}`)
            .then(response => {
               this.restaurant = response.data.results.restaurant;
               this.restaurantImage = response.data.results.restaurant.image;
               this.foods = response.data.results.foods;
               this.modalShow();
            }).catch(error => {
               router.push({ name: 'not-found' });
            });
      },
      checkRestaurantId() {
         let currentRestaurant = localStorage.getItem('currentRestaurant');
         return currentRestaurant == this.restaurant.id;
      },
      changeRestaurant() {
         router.push({ name: 'restaurant', params: { slug: this.restaurantSlug } })
      }
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
   <div class="container">
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
         aria-labelledby="staticBackdropLabel" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">Attenzione!!!</h1>
               </div>
               <div class="modal-body">
                  <p>Il tuo carrello ha già prodotti di un altro ristorante!</p>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="changeRestaurant()">Torna
                     al ristorante precedente</button>
                  <span>Oppure</span>
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="store.resetLocal()">Svuota
                     il carrello</button>
               </div>
            </div>
         </div>
      </div>
      <div id="hero" class="p-3 p-md-5 centrato" :style="{ backgroundImage: `url(${getRestaurantImage(restaurantImage)})` }">
         <div id="info-ristorante" class="p-2 p-md-3 text-white rounded-3">
            <h3>{{ restaurant.name }}</h3>
            <h5>{{ restaurant.address }}</h5>
            <p v-if="restaurant.description">{{ restaurant.description }}</p>
         </div>
      </div>

      <div id="restaurant-foods" class="row g-3 py-3 justify-content-center">
         <div v-for="food in foods" class="col-sm-6 col-md-4 col-lg-3 p-3 carta text-center p-0">
            <FoodCard :foodObject="food" :restaurantSlug="restaurant.slug"/>
            <FoodModal :foodObject="food" :restaurantSlug="restaurant.slug"/>
         </div>
      </div>
   </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

#hero {
   background-size: cover;
   background-position: center;
   height: 21rem;
   width: 100%;
}

#info-ristorante {
   background-color: rgba(0, 0, 0, 0.5);
}



#btn-cart {
   width: 60%;
   border-radius: 5rem;
   margin: auto;
}

@media all and (min-width: 768px) {}

@media all and (min-width: 480px) {}

</style>
