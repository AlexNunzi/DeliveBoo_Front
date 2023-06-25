<script>
import {store} from '../store.js';

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
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
               <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="store.resetLocal()">Svuota carrello</button>
            </div>
         </div>
      </div>
   </div>
</template>