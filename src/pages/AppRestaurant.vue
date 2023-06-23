<script>
import axios from 'axios';
import { store } from '../store.js';
import FoodModal from "../components/FoodModal.vue";
import FoodCard from "../components/FoodCard.vue";
import { router } from '../router';




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
      FoodCard
   },
   methods: {
      getRestaurantImage(pathImg) {
         // console.log(`${this.store.baseUrl}storage/${pathImg}`)
         return new URL(`${this.store.baseUrl}storage/${pathImg}` , import.meta.url).href;
      },
      getFoods(){
         const restaurant_slug = this.$route.params.slug;
         axios.get(`${this.store.urlApi}foods/${restaurant_slug}`)
         .then(response => {
            this.restaurant = response.data.results.restaurant;
            this.restaurantImage = response.data.results.restaurant.image;
            this.foods = response.data.results.foods;
            this.modalShow();

            // console.log(this.restaurant)
            // console.log(this.foods)
         });
      },
      checkRestaurantId() {
         let currentRestaurant = localStorage.getItem('currentRestaurant');
         return currentRestaurant == this.restaurant.id;
      },
      modalShow(){
         let modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
         if (!this.checkRestaurantId() && localStorage.getItem('currentRestaurant') != null) {
            modal.show();
         }
      },
      changeRestaurant(){

         router.push({ path: `/ristorante/${this.restaurantSlug}`})
      },
      resetLocal() {
         localStorage.clear();
      }
   },
   created() {
      this.getFoods();
   },
   mounted() {
      
   }
}
</script>

<template>
   <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
         <div class="modal-content">
            <div class="modal-header">
               <h1 class="modal-title fs-5" id="staticBackdropLabel">Attenzione!!!</h1>
            </div>
            <div class="modal-body">
               <p>Oh stai calmo, non puoi comprare da 2 ristoranti</p>
            </div>
            <div class="modal-footer">
               <!-- <router-link :to="`/ristorante/${restaurantSlug}`" class="btn btn-secondary" >No, Ritorna al ristorante di prima</router-link>  -->
               <button type="button" class="btn btn-secondary" id="backToRestaurant" @click="changeRestaurant()">No, Ritorna al ristorante di prima</button>
               <!-- <a class="btn btn-secondary" :href="`http://localhost:5173/ristorante/${restaurantSlug}`">No, Ritorna al ristorante di prima</a> -->
               
               <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="resetLocal()">Zappa il carrello</button>
            </div>
         </div>
      </div>
   </div>


   <div id="hero" class="p-3 p-md-5 centrato" :style="{ backgroundImage: `url(${getRestaurantImage(restaurantImage)})` }">
      <div id="info-ristorante" class="p-2 p-md-3 text-white rounded-3">
         <h3>{{ restaurant.name }}</h3>
         <h5>{{ restaurant.address }}</h5>
         <p>{{ restaurant.description }}</p>
      </div>
   </div>
   <!--<FoodModal/>-->
   <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-lg-6 g-3 py-3 justify-content-around">
      <div v-for="food in foods" class="col carta bg-white text-center">
         <FoodCard
         :foodObject="food"
         :restaurantSlug="restaurant.slug"
         />
      </div>
   
   </div>
</template>


<style lang="scss" scoped>
@use "../styles/general.scss";

#hero{
   // background-image: url(`${this.store.baseUrl}storage/${restaurant.image}`);
   background-size: cover;
   background-position: center;
   height: 21rem;
   width: 100%;
}

#info-ristorante{
   background-color: rgba(0, 0, 0, 0.5);
}
.carta {
   transition: all 0.2s;
   box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.2);
   overflow: hidden;
   width: 11rem;
}


#btn-cart{
   width: 60%;
   border-radius: 5rem;
   margin: auto;
}


@media all and (min-width: 768px) {

}


@media all and (min-width: 480px) {


}

@media all and (max-width: 479px) {
.carta{
   width: 11rem;
}

}
</style>