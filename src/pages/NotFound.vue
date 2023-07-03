<script>
   export default {
      name: 'NotFound'
   }
</script>

<template>
   <div class="container">
      <div class="text-center py-5">
         <h1 class="centrato py-5 display-1 fw-bold">Pagina non trovata!!!</h1>
         <router-link to="/" class="btn btn-primary fancy-button fs-5 p-2">Torna alla Home</router-link>
      </div>
   </div>
</template>


<style lang="scss" scoped>
@use "../styles/general.scss";
</style>