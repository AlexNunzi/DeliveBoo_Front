<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import EmptyCart from "./components/EmptyCart.vue";


export default {
   name: "App.vue",
   components: {
      AppHeader,
      AppFooter,
      EmptyCart
   }
}
</script>

<template>
   <EmptyCart/>
   <AppHeader />
   <div class="contenitore">
      <div class="bg-warning pb-5">
         <router-view/>
      </div>
      <AppFooter />
   </div>
</template>

<style lang="scss" scoped>
@use "./styles/general.scss" as *;
@use "./styles/variables.scss" as *;

.contenitore{
   margin-top: 5.5rem;
}

</style>
