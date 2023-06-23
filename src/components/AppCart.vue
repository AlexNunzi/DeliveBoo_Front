<template>
   <i class="fa-brands fa-opencart position-relative" data-bs-toggle="dropdown">
      <span class="fw-lighter position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{{ count }}</span>
   </i>
   <div class="d-flex align-items-center">
      <div class="dropstart">
         <ul class="dropdown-menu">
            <li>
               {{ cart }}
            </li>
         </ul>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         count: 0,
         cart: []
      }
   },
   methods: {
      CheckCart() {
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
            let conteggio = null;

            this.cart.forEach(food => conteggio += food.quantity);
            this.count = conteggio;
         }
      },
      loadCart() {
            // Controllo se esiste già un carrello nel localStorage
            const carrelloPrecedente = localStorage.getItem('ilNostroCarrello');
            // Se esiste lo restituisco
            if(carrelloPrecedente) {
                // Riconverto l'oggetto carrello in un array di oggetti
                this.cart = Object.entries(JSON.parse(carrelloPrecedente)).reduce((arr, [key, value]) => (arr[key] = value,arr), []);
                // Altrimenti restituisco un array vuoto
            } 
      }
   },
   mounted(){
      this.CheckCart();
      this.loadCart();
   }
}
</script>

