<template>
   <i class="fa-brands fa-opencart position-relative" data-bs-toggle="dropdown">
      <span class="fw-lighter position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{{ this.store.quantityCounter }}</span>
   </i>
   <div class="d-flex align-items-center">
      <div class="dropstart">
         <ul class="dropdown-menu p-3">
            <li>
               <OrderTable />
            </li>
         </ul>
      </div>
   </div>
</template>

<script>
import {store} from '../store.js';
import CartItem from './CartItem.vue';
import OrderTable from './OrderTable.vue';
export default {
   name: "AppCart",
   data() {
      return {
         store
      }
   },
   components: {
      CartItem,
      OrderTable
   },
   mounted(){
      this.store.cartCounterRefresh();
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

