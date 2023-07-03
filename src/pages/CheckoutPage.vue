<script>
import { store } from '../store.js';
import OrderTable from '../components/OrderTable.vue';
import axios from 'axios';
import { router } from '../router';

export default {
   name: "CheckoutPage",
   data() {
      return {
         store,
         customerName: 'Carlo Magno',
         customerPhone: '3331113239',
         customerEmail: 'c.magno@deliveboo.it',
         customerAddress: 'Via Dante Alighieri 3',
         nameError: null,
         phoneError: null,
         emailError: null,
         addressError: null,
         loading: false
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
      ValidationForm() {

         let button = document.querySelector('#submit-button');
         if (this.customerName != '' && this.customerPhone != '' && this.customerEmail != '' && this.customerAddress != '') {
            button.disabled = false;
         } else {
            button.disabled = true;
         }
      },
      brainTree() {
         let button = document.querySelector('#submit-button');
         braintree.dropin.create({
            authorization: this.store.clientBraintreeToken,
            container: '#dropin-container',
            locale: 'it_IT'
         }, (createErr, instance) => {
            if (createErr) {
               // An error in the create call is likely due to
               // incorrect configuration values or network issues.
               // An appropriate error will be shown in the UI.
               console.error(createErr);
               return;
            }

            button.addEventListener('click', () => {
               instance.requestPaymentMethod((requestPaymentMethodErr, payload) => {
                  if (requestPaymentMethodErr) {
                     // No payment method is available.
                     // An appropriate error will be shown in the UI.
                     console.error(requestPaymentMethodErr);
                     return;
                  }
                  // Submit payload.nonce to your server
                  this.loading = true;
                  let food_ids = [];
                  for (const food in store.cart) {
                     food_ids.push({
                        'id': store.cart[food].foodId,
                        'quantity': store.cart[food].quantity,
                        'name': store.cart[food].name,
                        'price': store.cart[food].price
                     });
                  }
                  axios.post(`${store.urlApi}client/make-payment`, {
                     'token': payload.nonce,
                     'food_ids': food_ids,
                     'customer_name': this.customerName,
                     'customer_phone_number': this.customerPhone,
                     'customer_address': this.customerAddress,
                     'customer_email': this.customerEmail
                  }).then(response => {
                     if (response.data.success) {
                        this.loading = false
                        router.push({ name: 'success-payment' })
                     };
                  }).catch(error => {
                     this.loading = false;
                     if (error.response.data.errors.customer_name != null) {
                        this.nameError = error.response.data.errors.customer_name;
                     }
                     if (error.response.data.errors.customer_phone_number != null) {
                        this.phoneError = error.response.data.errors.customer_phone_number;
                     }
                     if (error.response.data.errors.customer_address != null) {
                        this.addressError = error.response.data.errors.customer_address;
                     }
                     if (error.response.data.errors.customer_email != null) {
                        this.emailError = error.response.data.errors.customer_email;
                     }
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
   <div class="container">
      <h1 class="py-4 fw-bold display-5">Riepilogo</h1>
      <div>
         <OrderTable />
      </div>
      <div class="myLoading" v-if="loading">
         <img class="myImg"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgbtpos.com%2Fwp-content%2Fuploads%2F2019%2F10%2FPOS-Animation.gif&f=1&nofb=1&ipt=74579b96a8ed7e91d135eb64726df2c0e36be7b78034685bdfcf581e82bacf04&ipo=images">
      </div>
      <div v-show="!store.cartIsEmpty()" class="row row-cols-md-2 bg-white">
         <form method="POST" class="mt-5 py-2 h-100" @click="changeFormValue">
            <div class="mb-3">
               <div class="d-flex">
                  <div class="w-75">
                     <label for="customer_name" class="form-label">Nome:</label>
                     <input type="text" class="form-control" :class="nameError != null ? 'is-invalid' : ''"
                        id="customer_name" name="customer_name" @keyup="ValidationForm()" v-model="customerName" required>
                     <div v-if="nameError != null" class="invalid-feedback">
                        <p v-for="element in nameError">{{ element }}</p>
                     </div>
                  </div>
                  <div class="ms-5">
                     <label for="customer_phone_number" class="form-label">Telefono:</label>
                     <input type="tel" class="form-control" :class="phoneError != null ? 'is-invalid' : ''"
                        id="customer_phone_number" name="customer_phone_number" @keyup="ValidationForm()"
                        v-model="customerPhone" required>
                     <div v-if="phoneError != null" class="invalid-feedback">
                        <p v-for="element in phoneError">{{ element }}</p>
                     </div>
                  </div>
               </div>
            </div>
            <div class="mb-3">
               <label for="customer_address" class="form-label">Indirizzo:</label>
               <input type="text" class="form-control" :class="addressError != null ? 'is-invalid' : ''"
                  id="customer_address" name="customer_address" @keyup="ValidationForm()" v-model="customerAddress"
                  required>
               <div v-if="addressError != null" class="invalid-feedback">
                  <p v-for="element in addressError">{{ element }}</p>
               </div>
            </div>
            <div class="mb-3">
               <label for="customer_email" class="form-label">Email</label>
               <input type="email" class="form-control" :class="emailError != null ? 'is-invalid' : ''" id="customer_email"
                  name="customer_email" @keyup="ValidationForm()" v-model="customerEmail" required>
               <div v-if="emailError != null" class="invalid-feedback">
                  <p v-for="element in emailError">{{ element }}</p>
               </div>
            </div>
         </form>
         <div class="mt-3">
            <div id="dropin-container"></div>
            <button id="submit-button" type="submit" class="btn btn-primary" disabled>Salva</button>
         </div>
      </div>
   </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";


.myLoading {
   background-color: rgba(0, 0, 0, 0.5);
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: 1213;
   display: flex;
   justify-content: center;
   align-items: center;

   .myImg {
      border-radius: 50px;
      width: 250px;
   }
}

@media all and (min-width: 768px) {
   .myLoading .myImg {
      width: 500px;
   }
}
</style>