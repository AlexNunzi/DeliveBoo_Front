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
         checked:[1,4,7],
         restaurant: [],
         lista: false,
      }
   },
   methods: {
      check(index) {
         const label = document.getElementById('lable' + index);
         label.classList.toggle("checked")
         // if(){

         // } else{
         //    this.checked.push(index);
         // }


         //con if, controlla se il tipo/ristorante non è nell'array, lo aggiunge, se c'è lo toglie
         //cicla array e mostra nella lista (dopo il click su "Lista"?!)

         // this.getRestaurant();
         console.log(index)
      },
      getTypes() {
         this.loading = true;
         axios.get(`http://127.0.0.1:8001/api/types/`)
         .then(response => {
            this.types = response.data.results;
            console.log(this.types);
         });
         
      },
      getRestaurant() {
         axios.get(`http://127.0.0.1:8001/api/restaurant/type`,
         {
            params: {
               "type_id[]" : this.checked
            }
         })
         .then(response => {
            console.log(response.data);
            this.restaurant = response.data.results;
         });
      }
   },
   mounted() {
      this.getTypes();
      this.getRestaurant();
   }
}
</script>

<template>
   <HeroHome />
   <form action="/" method="post" class="py-5">
      <div class="row g-3 py-3 justify-content-around">
         <div class="col-6 col-md-4 col-lg-3" v-for="(tipo, i) in types">
            <input :id="tipo.id" type="checkbox" class="d-none cecco" :value="tipo.id" name="type_id[]">
            <label :id="'lable' + tipo.id" :for="tipo.id" class="carta bg-white text-center" @click="check(tipo.id)">
               <!-- <img :src="`../../public/${tipo.name}.jpg`" :alt="'Immagine ristorante ' + tipo.name"> -->
               <div class="centrato">
                  <h6 class="p-2">{{ tipo.name }}</h6>
               </div>
            </label>
         </div>
      </div>
      <button type="submit" class="btn btn-success">Cerca</button>
   </form>
   <div class="btn btn-primary" @click="lista = true">Lista</div>
   <div class="lista" v-show="lista">
      <h1>Qua ci sarà la lista dei ristoranti selezionati</h1>
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
   // filter: grayscale(85%);

   &:hover {
      // filter: grayscale(0%);

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
   filter: grayscale(0%);

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