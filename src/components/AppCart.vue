<template>
   <i class="fa-brands fa-opencart position-relative" data-bs-toggle="dropdown">
      <span class="fw-lighter position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{{ count }}</span>
   </i>
   <div class="d-flex align-items-center">
      <div class="dropstart">
         <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Qui viene </a></li>
            <li><a class="dropdown-item" href="#">visualizzato </a></li>
            <li><a class="dropdown-item" href="#">il carrello</a></li>
            <li><a href="https://getbootstrap.com/docs/5.2/components/dropdowns/#forms">Oppure un form. cliccami</a></li>
         </ul>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         count: 0
      }
   },
   methods: {
      CheckCart() {
         let carrello = [];
            // Controllo se esiste già un carrello nel localStorage
            const carrelloPrecedente = localStorage.getItem('ilNostroCarrello');
            // Se esiste lo restituisco
            if(carrelloPrecedente) {
                // Riconverto l'oggetto carrello in un array di oggetti
                carrello = JSON.parse(carrelloPrecedente);
               console.log(carrello)
            }

         if (Object.keys(carrello).length == 0) {
            this.count=0;
         } else {
            // Altrimenti aggiorno i dati precedentemente salvati
            let conteggio = null;

            carrello.forEach(food => conteggio += food.quantity);
            this.count = conteggio;
         }
      }
   },
   mounted(){
      this.CheckCart();
   }
}
</script>

