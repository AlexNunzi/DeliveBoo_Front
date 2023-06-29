<script>
export default {
   name: "AppFooter",
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
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
         <p class="col-md-4 mb-0 text-body-secondary">© 2023 DeliveBoo, Inc</p>
         <a href="/"
            class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            Nostro Logo
         </a>
         <div>
            <ul class="nav justify-content-end">
               <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
               <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Area Ristoratori</a></li>
               <li class="nav-item"><a href="#" class="nav-link pe-0 text-body-secondary">About</a></li>
            </ul>
            <ul class="nav justify-content-end list-unstyled d-flex">
               <li class="ms-3"><a class="text-body-secondary" href="#"><i class="fa-brands fa-instagram"></i></a></li>
               <li class="ms-3"><a class="text-body-secondary" href="#"><i class="fa-brands fa-twitter"></i></a></li>
               <li class="ms-3"><a class="text-body-secondary" href="#"><i class="fa-brands fa-facebook"></i></a></li>
            </ul>
         </div>
      </footer>
   </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.fa-brands{
   font-size: 1.5rem;
}

</style>