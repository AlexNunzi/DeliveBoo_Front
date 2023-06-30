<script>
export default {
   name: 'SuccessPayment'
}
</script>

<template>
   <div class="ms_container mx-auto">
      <div class="row">
         <!-- sezione top -->
         <div class="py-3 text-center container">
            <div class="row py-lg-5">
               <div class="col-lg-6 col-md-8 mx-auto">
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
                  <router-link to="/" class="btn btn-success">Torna alla Home</router-link>
               </button>
            </div>
         </div>
      </div>
   </div>
</template>


<style lang="scss" scoped>
@use "../styles/general.scss";

.fancy-button {
   display: inline-block;
   padding: 5px;
   border: none;
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

.ms_container {
   height: 100vh;
   width: 100%;
   margin: 20px auto;
}

.my_registrer {
   font-size: 90px;
}
</style>