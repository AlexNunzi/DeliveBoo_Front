<script>
import {store} from '../store.js';
import OrderTable from '../components/OrderTable.vue';

export default {
   name: "CheckoutPage",
   data() {
      return {
         store
      }
   },
   components: {
      OrderTable,
   },
   methods: {
      brainTree() {
         
         var button = document.querySelector('#submit-button');
         braintree.dropin.create({
            authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b',
            selector: '#dropin-container'
         }, function (err, instance) {
            button.addEventListener('click', function () {
               instance.requestPaymentMethod(function (err, payload) {
                  // Submit payload.nonce to your server

               });
            })
         });
      }
   },
   mounted() {
      this.brainTree()
   }
}
</script>

<template>
   <div class="pt-5">
      <OrderTable />
   </div>
   <div v-show="!store.cartIsEmpty()" class="row row-cols-md-2">
      <!-- <form id="payment-form" action="/success" method="get">
         <div id="dropin-container"></div>
         <input type="submit" />
      </form> -->
      <form method="POST" class="mt-5 py-2 bg-white border h-100" @click="changeFormValue">
         <div class="mb-3">
            <div class="d-flex">
               <div class="w-75">
                  <label for="customer_name" class="form-label">Nome:</label>
                  <input type="text" class="form-control" id="customer_name" name="customer_name" placeholder="Mario Rossi" required>
               </div>
               <div class="ms-5">
                  <label for="customer_phone_number" class="form-label">Telefono:</label>
                  <input type="tel" class="form-control" id="customer_phone_number" name="customer_phone_number" placeholder="012-3456789" required>
               </div>
            </div>
         </div>
         <div class="mb-3">
            <label for="customer_address" class="form-label">Indirizzo:</label>
            <input type="text" class="form-control" id="customer_address" name="customer_address" placeholder="Via Le dita dal Naso 5" required>
         </div>
         <div class="mb-3">
            <label for="customer_email" class="form-label">Email</label>
            <input type="email" class="form-control" id="customer_email" name="customer_email" placeholder="m.rossi@deliveboo.it" required>
         </div>
         <button  id="submit-button" type="submit" class="btn btn-primary">Salva</button>
      </form>
      <div class="mt-3">
         <div id="dropin-container"></div>
         <!-- <button class="button btn btn-outline-success">Purchase</button> -->
         <ul>
            <li>Visa: 4111111111111111</li>
            <li>Mastercard: 5555555555554444</li>
            <!-- <li>American Express: 378282246310005</li>
            <li>Discover: 6011111111111117</li>
            <li>JCB: 3530111333300000</li> -->
         </ul>
         <p>data: 01/25</p>
      </div>
   </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

//brainTree
.braintree-heading, .braintree-placeholder, .braintree-sheet__header .braintree-sheet__header-label{
   display: none;
}
</style>