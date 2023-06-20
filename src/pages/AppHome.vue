<script>
import axios from 'axios';
import HeroHome from "../components/HeroHome.vue";

export default {
   name: "AppHome",
   components: {
      HeroHome
   },
   data() {
      return {
         types: [],
         checked:[],
         restaurants: [],
         lista: false,
      }
   },
   methods: {
      check(index) {
         const label = document.getElementById('label' + index);
         label.classList.toggle("checked")
         if(this.checked.includes(index)){
            this.checked = this.checked.filter(x => x != index)
         } else{
            this.checked.push(index);
         }
      },
      getTypes() {
         this.loading = true;
         axios.get(`http://127.0.0.1:8000/api/types/`)
         .then(response => {
            this.types = response.data.results;
         });
         
      },
      getRestaurants() {
         axios.get(`http://127.0.0.1:8000/api/restaurant/type`,
         {
            params: {
               "type_id[]" : this.checked
            }
         })
         .then(response => {
            this.restaurants = response.data.results;
            this.lista = true;
         });
      }
   },
   mounted() {
      this.getTypes();
   }
}
</script>

<template>
   <HeroHome />
   <div class="row g-3 py-3 justify-content-around">
      <div class="col-6 col-md-4 col-lg-3" v-for="(tipo, i) in types">
         <input :id="tipo.id" type="checkbox" class="d-none" :value="tipo.id" name="type_id[]">
         <label :id="'label' + tipo.id" :for="tipo.id" class="carta bg-white text-center" @click="check(tipo.id)">
            <img :src="`http://127.0.0.1:8000/storage/${tipo.image}`" :alt="'Immagine ristorante ' + tipo.name">
            <div class="centrato">
               <h6 class="p-2">{{ tipo.name }}</h6>
            </div>
         </label>
      </div>
   </div>
   <div class="btn btn-primary" @click="getRestaurants">Lista</div>

   <div class="lista" v-show="lista">
      <div class="d-flex justify-content-between my-2 border" v-for="restaurant in restaurants">
         <h2>{{ restaurant.name }}</h2>
         <div>
            <span class="mx-2" v-for="tipo in restaurant.types">{{ tipo.name }}</span>
            <router-link :to="`/ristorante/${restaurant.id}`" class="nav-link logo">Menu</router-link>
            <!-- <a class="btn btn-success my-2 p-1" :restaurant_id="restaurant.id">Menu</a> -->
         </div>
         
      </div>
   </div>
</template>


<style lang="scss" scoped>
@use "../styles/general.scss";

img,
.carta,
h6 {
   transition: all 0.3s;
}

.carta {
   box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.2);
   overflow: hidden;
   border: inset 5px gray;

   &:hover {
      img {
         scale: 1.04;
      }
      h6 {
         font-weight: bolder;
      }
   }

   &:active {
      scale: 0.98;
   }

}

.checked {
   scale: 1.04;
   box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.4);
   border: outset 5px greenyellow;

   h6 {
      font-weight: bolder;
   }

   &:hover {
      img {
         scale: 1;
      }

      h6 {
         font-weight: bolder;
      }
   }
}


img {
   height: 8rem;
   width: 8rem;
   object-fit: fill;
}


@media all and (min-width: 768px) {

   .carta {
      flex-direction: row;
      border-radius: 0;
      display: flex;
      align-items: center;
   }
}


@media all and (min-width: 480px) {}
</style>