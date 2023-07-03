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
                  this.restaurants = [];
                  this.restaurants = response.data.results;
                  this.lista = true;
                  if (this.restaurants.length == 0) {
                     this.noResults = true
                  }

               }).catch((error) => {
                  this.restaurants = [];
                  if (error) {
                     this.noResults = true
                  }
               })
         } else {
            this.restaurants = [];
            this.noSelected = true
         }
         // setTimeout(() => {
         //    document.getElementById("lista").scrollIntoView();
         //    console.log('bella');
         // }, 500);
      },
      truncateDescription(text, max) {
         if(text.length > max) {
            return (text.substring(0, max) + '...');
         }
         else {
            return text;
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
   <div class="container">
      <div class="d-flex flex-wrap justify-content-center my-2 py-3">
         <div
            v-for="tipo in types" class="mx-2 rounded-3 mb-3">
            <input :id="tipo.id" type="checkbox" class="checkbox d-none" :value="tipo.id" name="type_id[]">
            <label :id="'label' + tipo.id" :for="tipo.id" class="carta bg-white text-center rounded-5" @click="check(tipo.id), getRestaurants()">
               <img class="my-select-img" :src="`${this.store.baseUrl}storage/${tipo.image}`" :alt="'Immagine ristorante ' + tipo.name">
               <h4 class="p-2 centrato flex-grow-1">{{ tipo.name }}</h4>
            </label>
         </div>
      </div>
      <div class="d-flex justify-content-center">
         <button class="fancy-button bg-primary text-decoration-none ms-3" @click="reset">Reset</button>
      </div>
      <div id="lista" class="p-4 rounded-3 accordion-collapse collapse">
         <h1 v-if="noSelected">Seleziona almeno una tipologia</h1>
         <h1 v-if="noResults">Non ci sono ristoranti che rispettano i parametri selezionati</h1>

         <router-link :to="`/ristorante/${restaurant.slug}`" class="my-card-restaurant card mb-3 text-decoration-none" v-for="restaurant in restaurants">
            <div class="row h-100">

               <div class="card-containers col-12 col-sm-3">
                  <img v-if="restaurant.image" :src="`${this.store.baseUrl}storage/${restaurant.image}`" class="h-100 w-100 object-fit-cover rounded-start" :alt="restaurant.name">
                  <img v-else src="/placeholder.png" class="h-100 w-100 object-fit-cover rounded-start" :alt="restaurant.name">
               </div>

               <div class="card-containers col-12 col-sm-9 p-3">
                  <!-- <div class="card-body d-flex justify-content-between align-items-center h-100"> -->
                     <!-- <div class="h-100"> -->
                        <h5 class="card-title">{{ restaurant.name }}</h5>

                        <span class="me-2 badge rounded-pill text-bg-warning p-2 d-none d-md-inline-block mb-1" v-for="tipo in restaurant.types">{{ tipo.name }}</span>

                        <div v-if="restaurant.types.length < 3" class="overflow-x-scroll d-flex d-md-none">
                           <span class="me-2 badge rounded-pill text-bg-warning p-2" v-for="tipo in restaurant.types">{{ tipo.name }}</span>
                        </div>
                        <div v-else class="d-md-none">
                           <span class="me-2 badge rounded-pill text-bg-warning p-2" v-for="n in 2">{{ restaurant.types[n].name }}</span>

                           <span class="dropdown">
                              <button class="me-2 badge rounded-pill text-bg-warning p-2 border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                 +
                              </button>
                              <ul class="dropdown-menu">
                                 <li v-for="tipo in restaurant.types.slice(3)" class="text-center mb-1"><span class="me-2 badge rounded-pill text-bg-warning p-2 px-4">{{ tipo.name }}</span></li>
                              </ul>
                           </span>
                        </div>
                        <p class="card-text d-sm-none">{{ truncateDescription(restaurant.description, 30) }}</p>
                        <p v-if="restaurant.description" class="card-text d-none d-sm-block">{{ truncateDescription(restaurant.description, 250) }}</p>
                     <!-- </div> -->
                     <!-- <div class="align-self-end">
                        <button class="fancy-button">
                           <router-link class="text-black text-decoration-none"
                              :to="`/ristorante/${restaurant.slug}`">Menu</router-link>
                        </button>
                     </div> 
                  </div> -->
               </div>
            </div>
         </router-link>
         

          <!-- <div class="d-flex justify-content-between my-2 border-bottom border-black py-2" v-for="restaurant in restaurants">
            <h3>{{ restaurant.name }}</h3>
            <div class="d-flex align-items-center">
               <span class="mx-2 badge rounded-pill text-bg-light p-2" v-for="tipo in restaurant.types">{{ tipo.name }}</span>

               <button class="fancy-button">
                  <router-link class="text-black text-decoration-none"
                     :to="`/ristorante/${restaurant.slug}`">Menu</router-link>
               </button>

            </div>
         </div>  -->

      </div>
   </div>
</template>


<style lang="scss" scoped>
@use "../styles/general.scss";

.card-containers{
   height: 50%;
}

img,
.carta{
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
   }
}


.my-select-img {
   height: 7rem;
    width: 10rem;
   object-fit: cover;
}

.my-card-restaurant {
   height: 14rem;

   &:hover {
      transform: scale(1.01);
      cursor: pointer;
      transition: all 0.5s;
      -webkit-box-shadow: 2px 2px 5px 0px darken(#FFC008, 10); 
      box-shadow: 2px 2px 5px 0px darken(#FFC008, 10);
   }
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

//responsive
@media all and (min-width: 576px) {
   .card-containers{
      height: 100%;
   }
}

@media all and (min-width: 768px) {

   .carta {
      // flex-direction: row;
      // border-radius: 0;
      // display: flex;
      // align-items: center;
   }
}

@media all and (min-width: 480px) {}
</style>