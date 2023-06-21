<script>
import AppCart from './AppCart.vue'
export default {
  
   name: "AppHeader",
  
   components: {
      AppCart
   },
   data() {
      return {

      }
   },
   methods: {

   }
}
</script>

<template>
   <div class="container">
      <nav class="navbar navbar-expand-md bg-light">
            <router-link to="/" class="nav-link logo">DeliveBoo</router-link>
            <button class="navbar-toggler ms-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span><i class="fa-solid fa-burger"></i></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="provvisorio">
                     <ul class="d-flex">
                        <li><router-link to="/ristorante" class="nav-link">restaurant</router-link></li>
                        <li><router-link to="/checkout" class="nav-link">checkout</router-link></li>
                        <li><router-link to="/success" class="nav-link">success-payment</router-link></li>
                     </ul>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="#">Link</a>
                  </li>
               </ul>
               
            </div>
            <AppCart>
               
            </AppCart>
      </nav>
   </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

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
