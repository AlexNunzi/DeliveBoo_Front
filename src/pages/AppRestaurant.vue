<script>
import axios from 'axios';
import FoodModal from "../components/FoodModal.vue";

export default {
   name: "AppRestaurant",
   data() {
      return {
         foods: [],
         quantity: 0,
      }
   }, 
   components: {
      FoodModal
   },
   methods: {
      getFoods(){
         const restaurant_id = this.$route.params.id;
         axios.get(`http://127.0.0.1:8000/api/foods/${restaurant_id}`)
         .then(response => {
            this.foods = response.data.results;
            console.log(response.data.results)
         });
      }
   },
   mounted() {
      this.getFoods();
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
   <FoodModal/>
   <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-lg-6 g-3 py-3 justify-content-around">
      <div v-for="food in foods" class="col carta bg-white text-center">
         <div data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img :src="`http://127.0.0.1:8000/storage/${food.image}`" :alt="'Immagine ristorante ' + food.name">
            <div class="centrato flex-column">
               <h6 class="p-2 m-0">{{ food.name }}</h6>
               <small>{{ food.price }} €</small>
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