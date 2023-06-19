<script>
export default {
   name: "FoodModal",
   data() {
      return {
         food: ['Pizza', 'Panino', 'Pasta', 'Riso', 'Spaghetti', 'Biscotti', 'Involtini', 'Arrosto', 'Insalata', "Formaggio", "Lasagne", "Cappelletti"],
         quantity: 0,
      }
   },
   methods: {

   }
}
</script>

<template>
   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
         <div class="modal-content">
            <div class="modal-body position-relative">
               <button type="button" class="close btn btn-secondary rounded-circle" data-bs-dismiss="modal">
                  <i class="fa-solid fa-x"></i>
               </button>
               <div class="testo">
                  <img class="h-100 w-100" src="https://picsum.photos/200/300" :alt="'Immagine ristorante ' + cibo">
               </div>
               <div class="centrato flex-column">
                  <h6 class="p-2 m-0">{{ cibo }}</h6>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reiciendis corporis corrupti accusamus pariatur perspiciatis blanditiis assumenda consequatur vero. Necessitatibus fuga iste velit nobis, quidem sit fugiat maiores nihil repellat.</p>
                  <small>Prezzo €</small>
               </div>
               <div class="text-center">
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
         </div>
      </div>
   </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.testo{
   height: 30vh;

   img{
   object-fit: cover;
   }
}

.close{
   position: absolute;
   top: 2rem;
   right: 2rem;
}

#btn-cart{
   width: 40%;
   line-height: 2rem;
   border-radius: 5rem;
}
</style>
