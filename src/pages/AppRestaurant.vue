<script>
import FoodModal from "../components/FoodModal.vue";

export default {
   name: "AppRestaurant",
   data() {
      return {
         food: ['Pizza', 'Panino', 'Pasta', 'Riso', 'Spaghetti', 'Biscotti', 'Involtini', 'Arrosto', 'Insalata', "Formaggio", "Lasagne", "Cappelletti"],
         quantity: 0,
      }
   },
   components: {
      FoodModal
   },
   methods: {
   }
}
</script>

<template>
   <div id="hero" class="p-3 p-md-5 centrato">
      <div id="info-ristorante" class="p-2 p-md-3 text-white rounded-3">
         <h3>Nome Ristorante</h3>
         <h5>Indirizzo del ristorante</h5>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorum optio, recusandae vero itaque animi qui voluptates eveniet mollitia commodi facere voluptas nostrum aliquam vitae. Placeat voluptas id eligendi dolores!</p>
      </div>
   </div>
   <FoodModal></FoodModal>
   <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-lg-6 g-3 py-3 justify-content-around">
      <div v-for="(cibo, i) in food" class="col carta bg-white text-center">
         <div class="" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img src="https://picsum.photos/200/300" :alt="'Immagine ristorante ' + cibo">
            <div class="centrato flex-column">
               <h6 class="p-2 m-0">{{ cibo }}</h6>
               <small>Prezzo €</small>
            </div>
         </div>
         <div id="btn-cart" class="my-2 bg-warning" @click="quantity++" v-show="quantity<1">
            <i class="fa-brands fa-opencart"></i>
         </div>
         <div class="my-2" v-show="quantity>=1">
            <span class="px-2 bg-warning border rounded-circle" @click="quantity--">-</span>
            <span class="px-2 mx-2 border">{{ this.quantity }}</span>
            <span class="px-2 bg-warning border rounded-circle" @click="quantity++">+</span>
         </div>
      </div>
   </div>
</template>


<style lang="scss" scoped>
@use "../styles/general.scss";

#hero{
   background-image: url("https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F80000%2Fvelka%2Fshabu-shabu-food.jpg&f=1&nofb=1&ipt=d65d10e3a85c4f3db1b192cc526facd69178c8adc6149b2a6afd7d21ca4e43bd&ipo=images");
   height: 21rem;
   width: 100%;
}

#info-ristorante{
   background-color: rgba(0, 0, 0, 0.5);
}
.carta {
   transition: all 0.2s;
   box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.2);
   overflow: hidden;
   width: 11rem;
}
.checked {
   scale: 1.02;
   box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.4);
}


.carta img{
   height: 10rem;
   width: 100%;
   object-fit: cover;
}

#btn-cart{
   width: 60%;
   border-radius: 5rem;
   margin: auto;
}


@media all and (min-width: 768px) {

}


@media all and (min-width: 480px) {


}

@media all and (max-width: 479px) {
.carta{
   width: 11rem;
}

}
</style>