<script>
import {store} from '../store.js';
import OrderTable from '../components/OrderTable.vue';
import axios from 'axios';

export default {
   name: "CheckoutPage",
   data() {
      return {
         store,
      }
   },
   components: {
      OrderTable,
   },
   methods: {
         getToken() {
            axios.get(`${this.store.urlApi}client/token`)
            .then(response => {
               this.store.clientBraintreeToken = response.data.token;
               this.brainTree();
            });
         },
         brainTree() {
            let button = document.querySelector('#submit-button');
         
            braintree.dropin.create({
            authorization: this.store.clientBraintreeToken,
            container: '#dropin-container',
            locale: 'it_IT'
            }, function (createErr, instance) {
            if (createErr) {
               // An error in the create call is likely due to
               // incorrect configuration values or network issues.
               // An appropriate error will be shown in the UI.
               console.log('Create Erros');
               console.error(createErr);
               return;
            }

            button.addEventListener('click', function () {
               instance.requestPaymentMethod((requestPaymentMethodErr, payload) => {
                  if (requestPaymentMethodErr) {
                  // No payment method is available.
                  // An appropriate error will be shown in the UI.
                  console.log('request Payment Method Error')
                  console.error(requestPaymentMethodErr);
                  return;
                  }
                  // Submit payload.nonce to your server

                  const customer_name = document.getElementById('customer_name').value;
                  const customer_phone_number = document.getElementById('customer_phone_number').value;
                  const customer_address = document.getElementById('customer_address').value;
                  const customer_email = document.getElementById('customer_email').value;

                  let food_ids = [];

                  for(const food in store.cart) {
                     console.log(store.cart[food]);
                     food_ids.push({
                        'id': store.cart[food].foodId,
                        'quantity': store.cart[food].quantity
                     }); 
                  }

                  console.log(food_ids);

                  console.log(payload.nonce);
                  axios.post(`${store.urlApi}client/make-payment`, {
                  'token': payload.nonce,
                  'food_ids': food_ids,
                  'customer_name': customer_name,                
                  'customer_phone_number': customer_phone_number,
                  'customer_address': customer_address,
                  'customer_email': customer_email
                  }).then(response => {
                     console.log(response);
                  }).catch(error => {
                     console.log(error);
                  });
               });
            });
         });
      }
   },
   mounted() {
      this.getToken();
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
      <form method="POST" class="mt-5 py-2 bg-white border h-100" @click="changeFormValue" >
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
      </form>
      <div class="mt-3">
         <div id="dropin-container"></div>
         <button  id="submit-button" type="submit" class="btn btn-primary">Salva</button>
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