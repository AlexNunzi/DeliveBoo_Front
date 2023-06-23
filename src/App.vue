<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
   name: "App.vue",
   components: {
      AppHeader,
      AppFooter
   }
}
</script>

<template>
   <div class="debug">
      <AppHeader />
      <div class="container bg-warning">
         <router-view/>
      </div>
      <NotFound />
      <AppFooter />
   </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
@use "./styles/variables.scss" as *;

.debug{
   height: 100vh;
}
</style>
