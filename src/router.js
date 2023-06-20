import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppRestaurant from "./pages/AppRestaurant.vue";
import CheckoutPage from "./pages/CheckoutPage.vue";
import SuccessPayment from "./pages/SuccessPayment.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter(
   {
      history: createWebHistory(),
      routes: [
         {
            path: "/",
            name: "home",
            component: AppHome
         },
         {
            path: "/ristorante/:id", //:slug
            name: "restaurant",
            component: AppRestaurant
         },
         {
            path: "/checkout",
            name: "checkout",
            component: CheckoutPage
         },
         {
            path: "/success",
            name: "success-payment",
            component: SuccessPayment
         },
         {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
         }
      ]
   }
);

export { router };