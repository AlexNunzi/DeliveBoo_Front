<script>
import { store } from '../store.js';
export default {
   name: "AppHeader",
   data() {
      return {
         store
      }
   }
}
</script>

<template>
   <div class="bg-black fixed-top">
      <div class="container">
         <nav class="navbar navbar-expand-md bg-black justify-content-between overflow-hidden">
            <router-link to="/" class="nav-link logo">
               <img class="logo" src="/deliveboo-logo.svg" alt="logo deliveboo">
            </router-link>
            <div class="d-flex p-1 bg-danger text-white rounded-3 fancy-button me-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
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
   width: 11rem;
}

.fa-opencart{
   font-size: 1.5rem;
}

</style>