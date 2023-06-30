<script>
import {store} from '../store.js';
export default {
   name: "AppFooter",
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
   <div class="py-4 bg-black" >
      <footer class="py-3 border-top text">
         <div class="d-flex align-items-center justify-content-between flex-wrap container">
            <div class="col-12 col-md-6 text-white">
               <span class="me-3">© 2023 DeliveBoo, Inc</span>
               <a href="/" class="link-body-emphasis text-decoration-none me-3">
                  Logo
               </a>

            </div>

            <div class="col-12 col-md-6 d-md-flex justify-content-md-end align-items-center">
               <router-link to="/" class="me-3 text-decoration-none">
                  Home
               </router-link>
               <a class="me-3 text-decoration-none" :href="this.store.baseUrl">Area Ristoratori</a>
               <!-- <a class="me-3 text-decoration-none" href="#">About</a> -->
               <a class="text-body-secondary me-3 " href="#"><i class="fa-brands fa-instagram"></i></a>
               <a class="text-body-secondary me-3" href="#"><i class="fa-brands fa-twitter"></i></a>
               <a class="text-body-secondary me-3" href="#"><i class="fa-brands fa-facebook"></i></a>
            </div>
         </div>
      </footer>
   </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.fa-brands{
   font-size: 1.5rem;
}
footer a, footer i{
   color: white;
}
</style>