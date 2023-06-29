<script>
import { store } from '../store.js';
import AppCart from './AppCart.vue';
export default {
   name: "AppHeader",
   data() {
      return {
         store
      }
   },
   components: {
      AppCart
   },
   mounted() {
      this.store.cartCounterRefresh();
   }
}
</script>

<template>
   <div class="bg-white fixed-top">
      <div class="container">
         <nav class="navbar navbar-expand-md bg-light">
            <router-link to="/" class="nav-link logo">DeliveBoo</router-link>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
               <li class="provvisorio">
                  <ul class="d-flex">
                     <li><router-link to="/checkout" class="nav-link">checkout</router-link></li>
                     <li><router-link to="/success" class="nav-link">success-payment</router-link></li>
                  </ul>
               </li> 
            </ul>
            <div class="d-flex p-1 bg-danger text-white rounded-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
               <div>
                  <i class="fa-brands fa-opencart"></i>
               </div>
               <div class="ps-2 fw-bold">{{ this.store.quantityCounter }}</div>
            </div>
         </nav>
      </div>
   </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.container{
   z-index: 2000;
}

.logo{
   font-size: 3rem;
   font-weight: bold;
}

.fa-opencart{
   font-size: 1.5rem;
   cursor: pointer;
   span{
      font-size: 0.6rem;
   }
}

// debug
.provvisorio{
   border: solid 2px red;
}

.nav-link:hover{
   color: red;
   font-weight: bold;
}

//

</style>
