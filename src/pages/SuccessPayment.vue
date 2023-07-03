<script>
import {store} from '../store.js';
export default {
   name: 'SuccessPayment',
   data() {
      return {
         store
      }
   },
   mounted() {
      this.store.resetLocal();
   }
}
</script>

<template>
   <div class="py-3 text-center">
      <div class="row m-0 py-lg-5 justify-content-center">
         <div class="col-lg-6 col-md-8">
            <i class="fa-solid fa-cash-register my_registrer"></i>
            <i class="fa-regular fa-face-smile-beam my_registrer mx-3"></i>
            <h1 class="fw-light">Pagamento eseguito!</h1>
            <p class="lead text-body-secondary">Grazie per aver ordinato da Deliveboo, ti abbiamo inviato una mail
               con i dettagli dell'ordine. Il ristoratore ha preso in carico l'ordinazione. <br>
               Uno dei nostri rider arriverà al più presto a casa tua.</p>
         </div>
      </div>
      <div class="personal_btn my-3">
         <button class="fancy-button bg-success">
            <router-link to="/" class="btn btn-success">Torna<br>alla Home</router-link>
         </button>
      </div>
   </div>
</template>


<style lang="scss" scoped>
@use "../styles/general.scss";

.my_registrer {
   font-size: 90px;
}
</style>