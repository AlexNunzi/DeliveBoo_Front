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
   <div class="d-flex p-1 bg-danger text-white rounded-3" data-bs-toggle="dropdown">
      <div>
         <i class="fa-brands fa-opencart position-relative"></i>
      </div>
      <div class="ps-2 fw-bold">{{ this.store.quantityCounter }}</div>
   </div>
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

<style lang="scss">
@use "../styles/general.scss";

td{
   vertical-align: middle;
}
</style>