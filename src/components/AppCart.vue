<script>
import { toRaw } from 'vue';

export default {
   name: "AppCart",
   data() {
      return {
         count: 0,
         cart: []
      }
   },
   methods: {
      checkCart() {
         let carrello = [];
            // Controllo se esiste già un carrello nel localStorage
            const carrelloPrecedente = localStorage.getItem('ilNostroCarrello');
            // Se esiste lo restituisco
            if(carrelloPrecedente) {
               carrello = Object.entries(JSON.parse(carrelloPrecedente)).reduce((arr, [key, value]) => (arr[key] = value,arr), []);
               for(const food in carrello){
                  this.cart.push(carrello[food]);
               }
            }
         if (this.cart.length == 0) {
            this.count=0;
         } else {
            // Altrimenti aggiorno i dati precedentemente salvati
            this.cart.forEach(food => this.count += food.quantity);
            
            console.log(toRaw(this.cart))
            console.log("il conto è: " + this.count)
         }
      },
      loadCart() {
         // Controllo se esiste già un carrello nel localStorage
         const carrelloPrecedente = localStorage.getItem('ilNostroCarrello');
         // Se esiste lo restituisco
         if(carrelloPrecedente) {
               // Riconverto l'oggetto carrello in un array di oggetti
            this.cart = Object.entries(JSON.parse(carrelloPrecedente)).reduce((arr, [key, value]) => (arr[key] = value,arr), []);
         } 
      },
      clearCart() {
         localStorage.clear();
      }
   },
   mounted(){
      this.checkCart();
      this.loadCart();
   }
}
</script>


<template>
   <i class="fa-brands fa-opencart position-relative" data-bs-toggle="dropdown">
      <span class="fw-lighter position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{{ count }}</span>
   </i>
   <div class="d-flex align-items-center">
      <div class="dropstart">
         <ul class="dropdown-menu">
            <li v-for="(value, name, index) in cart">
               <!-- {{ value }} {{ name }} {{ index }} -->
               <p>ciao</p>
            </li>
            <li>
               <button type="button" class="btn btn-danger p-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Svuota carrello</button>
            </li>
         </ul>

         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
               <div class="modal-content">
                  <div class="modal-header">
                     <h1 class="modal-title fs-5" id="exampleModalLabel">Svuota carrello</h1>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                     <h3>Vuoi svuotare il carrello?</h3>
                  </div>
                  <div class="modal-footer">
                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
                     <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="clearCart()">Svuota carrello</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

