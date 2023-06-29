<script>
   export default {
      name: 'SuccessPayment'
   }
</script>

<template>
   <div class="container">
      <h1>Pagamento riuscito!!!</h1>
      <router-link to="/" class="btn btn-success">Torna alla Home</router-link>
   </div>
</template>


<style lang="scss" scoped>
@use "../styles/general.scss";
</style>