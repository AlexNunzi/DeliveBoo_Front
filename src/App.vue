<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import EmptyCart from "./components/EmptyCart.vue";
import AppCart from './components/AppCart.vue';



export default {
   name: "App.vue",
   components: {
      AppHeader,
      AppFooter,
      EmptyCart,
      AppCart
   }
}
</script>

<template>
   <EmptyCart />
   <AppHeader />
   <AppCart />
   <div class="bg-warning contenitore">
      <router-view />
   </div>
   <AppFooter />
</template>

<style lang="scss" scoped>
@use "./styles/general.scss" as *;
@use "./styles/variables.scss" as *;

.contenitore {
   margin-top: 8rem;
   padding-bottom: 2rem;
   min-height: calc(100vh - 14.7rem);
}
</style>
