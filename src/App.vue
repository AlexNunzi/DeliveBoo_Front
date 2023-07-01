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
   margin-top: 4rem;
   padding-bottom: 2rem;
   min-height: calc(100vh - 12.35rem);
}

@media all and (min-width: 768px) {
   .contenitore {
      // min-height: calc(100vh - 7.85rem);
      min-height: calc(100vh - 10.7rem);

   }     
}
</style>
