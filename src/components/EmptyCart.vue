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
                  @click="store.resetLocal()">Svuota<br>carrello</button>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped lang="scss">
@use "../styles/general.scss";

</style>