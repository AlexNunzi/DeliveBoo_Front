<script>
export default {
   name: "AppHeader",
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
            <i class="fa-solid fa-cart-shopping position-relative" data-bs-toggle="dropdown">
               <span class="fw-lighter position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">10</span>
            </i>
            <div class="d-flex align-items-center">
               <div class="dropstart">
                  <ul class="dropdown-menu">
                     <li><a class="dropdown-item" href="#">Qui viene </a></li>
                     <li><a class="dropdown-item" href="#">visualizzato </a></li>
                     <li><a class="dropdown-item" href="#">il carrello</a></li>
                     <li><a href="https://getbootstrap.com/docs/5.2/components/dropdowns/#forms">Oppure un form. cliccami</a></li>
                  </ul>
               </div>
            </div>
      </nav>
   </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.logo{
   font-size: 3rem;
   font-weight: bold;
}

.fa-cart-shopping{
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
