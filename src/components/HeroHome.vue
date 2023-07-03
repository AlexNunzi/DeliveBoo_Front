<script>
export default {
   name: "HeroHome",

   data() {
      return {
         currentImage: 0,
         images: [
            {
               src: '/rider-carousel.jpg'
            },
            {
               src: '/carne-carousel.jpg'
            },
            {
               src: '/cozze-vongole.jpg'
            },
            {
               src: '/hamburger-carousel.jpg'
            },
            {
               src: '/pasta-carousel.jpg'
            },
            {
               src: '/sushi-carousel.jpg'
            }
         ],
      };
   }
}

</script>

<template>
   <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
         <div class="carousel-item" :class="key == 0 ? 'active' : ''" v-for="(image, key) in images"
            data-bs-interval=" 3000">
            <img :src="image.src" alt="immagini" class="d-block w-100" width="800" height="600">
         </div>
      </div>
      <h1 class="display-1 fw-bold text-center text-white position-absolute translate-middle">Tu lo desideri,<br /> noi te
         lo Bootiamo!
      </h1>
   </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

h1 {
   top: 50%;
   left: 50%;
   text-shadow: 0 0 5px #000000;
}

img {
   object-fit: cover;
}
</style>
