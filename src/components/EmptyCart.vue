<script>
import { store } from '../store.js';

export default {
   name: "EmptyCart",
   data() {
      return {
         store
      }
   }
}
</script>

<template>
   <div class="modal fade" id="CartModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
         <div class="modal-content">
            <div class="modal-header">
               <h1 class="modal-title fs-5" id="exampleModalLabel">Svuota carrello</h1>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
               <h3>Vuoi svuotare il carrello?</h3>
               <p>Perderai tutti i piatti che hai in questo momento nel carrello.</p>
            </div>
            <div class="modal-footer">
               <button type="button" class="fancy-button bg-success" data-bs-dismiss="modal">Chiudi</button>
               <button type="button" class="fancy-button bg-danger" data-bs-dismiss="modal"
                  @click="store.resetLocal()">Svuota
                  carrello</button>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped lang="scss">
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
</style>