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
      <footer class="py-3 my-4 border-top">
         <div class="d-flex align-items-center justify-content-between flex-wrap">
            <div class="col-12 col-md-6">
               <span class="me-3">© 2023 DeliveBoo, Inc</span>
               <a href="/" class="link-body-emphasis text-decoration-none me-3">
                  Logo
               </a>

            </div>

            <div class="col-12 col-md-6 d-md-flex justify-content-md-end align-items-center">
               <a class="me-3" href="#">Home</a>
               <a class="me-3" href="#">Area Ristoratori</a>
               <a class="me-3" href="#">About</a>
               <a class="text-body-secondary me-3" href="#"><i class="fa-brands fa-instagram"></i></a>
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

</style>