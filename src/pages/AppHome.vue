<script>
import axios from 'axios';
import { store } from '../store.js';
import HeroHome from "../components/HeroHome.vue";

export default {
   name: "AppHome",
   components: {
      HeroHome,
   },
   data() {
      return {
         store,
         types: [],
         checked: [],
         restaurants: [],
         lista: false,
         noSelected: false,
         noResults: false
      }
   },
   methods: {
      check(index) {
         const label = document.getElementById('label' + index);
         label.classList.toggle("checked")
         if (this.checked.includes(index)) {
            this.checked = this.checked.filter(x => x != index)
         } else {
            this.checked.push(index);
         }
      },
      reset() {
         const label = document.querySelectorAll(".checked")
         const lista = document.getElementById("lista");
         lista.classList.remove("show")
         for (let i = 0; i < label.length; i++) {
            label[i].classList.remove("checked");
         }
         document.getElementsByClassName("checkbox").checked = false
         this.checked = []
         this.restaurants = []
         this.lista = false
      },
      getTypes() {
         this.loading = true;
         axios.get(`${this.store.urlApi}types/`)
            .then(response => {
               this.types = response.data.results;
            });

      },
      getRestaurants() {
         this.noResults = false;
         this.noSelected = false;
         const lista = document.getElementById("lista");
         lista.classList.add("show")
         if (this.checked.length != 0) {
            axios.get(`${this.store.urlApi}restaurant/type`,
               {
                  params: {
                     "type_id[]": this.checked
                  }
               })
               .then(response => {
                  this.restaurants = response.data.results;
                  this.lista = true;
                  if (this.restaurants.length == 0) {
                     this.noResults = true
                  }

               }).catch((error) => {
                  if (error) {
                     this.noResults = true
                  }
               })
         } else {
            this.noSelected = true
         }
      }
   },
   mounted() {
      this.getTypes();
   }
}
</script>

<template>
   <HeroHome />
   <div class="container-xxl">
      <div class="row g-3 py-3 justify-content-around">
         <div class="col-6 col-sm-4 col-md-5 col-xl-4 col-xxl-3 d-flex d-md-block justify-content-center"
            v-for="tipo in types">
            <input :id="tipo.id" type="checkbox" class="checkbox d-none" :value="tipo.id" name="type_id[]">
            <label :id="'label' + tipo.id" :for="tipo.id" class="carta bg-white text-center" @click="check(tipo.id)">
               <img :src="`${this.store.baseUrl}storage/${tipo.image}`" :alt="'Immagine ristorante ' + tipo.name">
               <h4 class="p-2 centrato flex-grow-1">{{ tipo.name }}</h4>
            </label>
         </div>
      </div>
      <div class="d-flex justify-content-center">
         <button class="fancy-button bg-success text-decoration-none" @click="getRestaurants" data-bs-add="collapse"
            data-bs-target="#lista">Cerca</button>
         <button class="fancy-button bg-primary text-decoration-none ms-3" @click="reset">Reset</button>
      </div>
      <div id="lista" class="p-4 rounded-3 accordion-collapse collapse">
         <h1 v-if="noSelected">Seleziona almeno una tipologia</h1>
         <h1 v-if="noResults">Non ci sono ristoranti che rispettano i parametri selezionati</h1>
         <div class="d-flex justify-content-between my-2 border-bottom border-black py-2"
            v-for="restaurant in restaurants">
            <h3>{{ restaurant.name }}</h3>
            <div class="d-flex align-items-center">
               <span class="mx-2 badge rounded-pill text-bg-light p-2" v-for="tipo in restaurant.types">{{ tipo.name
               }}</span>

               <button class="fancy-button">
                  <router-link class="text-black text-decoration-none"
                     :to="`/ristorante/${restaurant.slug}`">Menu</router-link>
               </button>

            </div>
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
   object-fit: cover;
}

//btn prova
.fancy-button {
   display: inline-block;
   padding: 5px;
   border: none;
   background-color: orange;
   color: #fff;
   font-weight: bold;
   text-transform: uppercase;
   letter-spacing: 2px;
   border-radius: 10px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
   position: relative;
   overflow: hidden;
   transition: transform 0.3s ease-in-out;
   cursor: pointer;
}

.fancy-button:before {
   content: "";
   position: absolute;
   top: 0;
   left: -100%;
   width: 100%;
   height: 100%;
   background-color: rgba(255, 255, 255, 0.2);
   transform: skewX(-30deg);
   transition: left 0.3s ease-in-out;
}

.fancy-button:hover {
   transform: scale(1.1);
}

.fancy-button:hover:before {
   left: 100%;
}

//responsive
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