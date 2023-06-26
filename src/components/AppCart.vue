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

<style lang="scss" scoped>
@use "../styles/general.scss";
</style>