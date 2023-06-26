<script>
export default {
   name: "HeroHome",
}
</script>

<template>
<div class="bd-example position-relative">
   <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
         <div class="carousel-item active">
            <img class="d-block w-100"  width="800" height="600" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Filfattoalimentare.it%2Fwp-content%2Fuploads%2F2020%2F11%2Ffood-delivery-rider-consegna-a-domicilio-AdobeStock_280845828-scaled.jpeg&f=1&nofb=1&ipt=488b10fc1f1577fdadd1d12c57997cc08c75803d27f323042a8c051016d98c3d&ipo=images" alt="">
         </div>
         <div class="carousel-item" v-for="slide in 4">
            <img class="d-block w-100"  width="800" height="600"  src="https://picsum.photos/800/400" alt="">
         </div>
      </div>
   </div>
   <h1 class="display-1 fw-bold text-center text-white position-absolute translate-middle">Tu lo desideri,<br/> noi te lo Bootiamo!</h1>
</div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

h1{
   top: 50%;
   left: 50%;
   text-shadow: 0 0 5px #000000;
}

img{
   object-fit: cover;
}

</style>
