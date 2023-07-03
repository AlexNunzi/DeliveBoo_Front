<script>
import { store } from '../store.js';
export default {
   name: "FoodModal",
   props: {
         foodObject: Object,
         restaurantSlug: String
   },
   data() {
      return {
         store
      }
   },
   methods: {

   }
}
</script>

<template>
   <div class="modal fade" :id="foodObject.slug" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
         <div class="modal-content">
            <div class="modal-body position-relative">
               <button type="button" class="close btn btn-secondary rounded-circle" data-bs-dismiss="modal">
                  <i class="fa-solid fa-x"></i>
               </button>
               <div class="testo">
                  <img :src="`${this.store.baseUrl}storage/${foodObject.image}`" :alt="'Immagine ristorante ' + foodObject.name">
               </div>
               <div class="centrato flex-column">
                  <h5 class="p-2 m-0">{{ foodObject.name }}</h5>
                  <p>{{ foodObject.description }}</p>
                  <small>{{ foodObject.price }}€</small>
               </div>
               <div class="centrato">
                  <div class="my-2 pt-1" v-if="store.cart[foodObject.slug]">
                     <i class="fa-solid fa-circle-minus text-danger fs-4" @click="store.removeFromCart(foodObject)"></i>
                     <span class="px-2 mx-2 border">{{ store.cart[foodObject.slug].quantity }}</span>
                     <i class="fa-solid fa-circle-plus text-success fs-4" @click="store.addToCart(foodObject, restaurantSlug)"></i>
                  </div> 
                  <div id="btn-cart" class="w-25 my-2 p-1 bg-warning rounded-5" @click="store.addToCart(foodObject, restaurantSlug)" v-else>
                     <i class="fa-brands fa-opencart"></i>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.testo{
   height: 30vh;

   img{
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
}

.close{
   position: absolute;
   top: 2rem;
   right: 2rem;
}

#btn-cart{
   line-height: 1.5rem;
}
</style>
