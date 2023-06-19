<script>
   export default {
      name: 'NotFound'
   }
</script>

<template>
   <div class="text-center py-5">
      <h1 class="centrato py-4">Pagina non trovata!!!</h1>
      <router-link to="/" class="btn btn-success">Torna alla Home</router-link>
   </div>
   
</template>


<style lang="scss" scoped>
@use "../styles/general.scss";
</style>