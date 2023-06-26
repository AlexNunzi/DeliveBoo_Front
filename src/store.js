import { reactive } from "vue";

export const store = reactive ({
   baseUrl: 'http://localhost:8000/',
   urlApi: "http://localhost:8000/api/",
   totalPrice: 0,
   quantityCounter: 0,
   cart: {},
   clientBraintreeToken: '',
   // Controllo se il carrello non è vuoto
   cartIsEmpty(){
      if(Object.keys(this.cart).length == 0){
         return true;
      } else {
         return false;
      }
   },
   // Aggiornamento dei contatori di quantità totale e prezzo totale dello store
   cartCounterRefresh() {
      this.loadCart();
      // Se il carrello è vuoto setto i contatori di quantità e prezzo totale a zero
      if (this.cartIsEmpty()) {
         this.quantityCounter = 0;
         this.totalPrice = 0;
      } else {
         let counter = 0;
         let price = 0;
         // Altrimenti per ogni elemento contenuto nel carrello
         for(const food in this.cart) {
            // Sommo la proprietà quantity in una variabile di appoggio
            counter += this.cart[food].quantity;
            // Sommo la proprietà price moltiplicata per la propria quantity in una variabile di appoggio
            price += (Number(this.cart[food].price) * this.cart[food].quantity);
         }
         // E le salvo nello store
         this.quantityCounter = counter;
         this.totalPrice = price;
      }
   },
   // Caricamento dei dati del carrello da localStorage
   loadCart() {
      // Controllo se esiste già un carrello nel localStorage
      const carrelloPrecedente = localStorage.getItem('ilNostroCarrello');
      // Se esiste lo salvo nello store
      if(carrelloPrecedente) {
         // Dopo averlo riconvertito da formato JSON a variabile JS (in questo caso un oggetto)
         this.cart = JSON.parse(carrelloPrecedente);
         // Altrimenti salvo nello store un oggetto vuoto
      } else {
         this.cart = {};
      }
   },
   // Aggiunta di un food nel carrello
   addToCart(food, restaurantSlug){
      // Recupero da localStorage i riferimenti al ristorante da cui sto ordinando
      let currentRestaurant = localStorage.getItem('currentRestaurant');
      let currentSlug = localStorage.getItem('currentSlug');

      // Se non esistono già riferimenti creo i riferimenti per l'id e lo slug del ristorante da cui sto ordinando
      if(!currentRestaurant) {
         currentRestaurant = food.restaurant_id;
         currentSlug = restaurantSlug;
         // E li salvo nel localStorage
         localStorage.setItem('currentRestaurant', currentRestaurant);
         localStorage.setItem('currentSlug', currentSlug);
      }
      // Se è presente nel carrello una key uguale allo slug di food
      if(this.cart[food.slug]) {
         // Aggiungo uno alla sua proprietà quantity
         this.cart[food.slug].quantity++;
         // E lo salvo
         localStorage.setItem('ilNostroCarrello', JSON.stringify(this.cart));
      } else {
          // Altrimenti aggiungo all'oggetto un nuovo oggetto la cui key è uguale allo slug di food
         this.cart[food.slug] = {
            quantity: 1,
            name: food.name,
            slug: food.slug,
            price: food.price,
            foodId: food.id
         };
         // E lo salvo nel localStorage
         localStorage.setItem('ilNostroCarrello', JSON.stringify(this.cart));
      }
      // Poi aggiorno i contatori di quantità totale e prezzo totale nello store
      this.cartCounterRefresh();
   },
   // Rimozione di un food dal carrello
   removeFromCart(food){
      // Se è presente nel carrello una key uguale allo slug di food
      if(this.cart[food.slug]) {
         // Faccio -1 alla sua proprietà quantity
         this.cart[food.slug].quantity--;
         // Se la sua proprietà quantity è uguale a 0 cancello la coppia chiave-valore la cui key è uguale allo slug
         if(this.cart[food.slug].quantity == 0) {
            delete this.cart[food.slug];
         }
         // Se il carrello è vuoto pulisco il localStorage
         if(this.cartIsEmpty()) {
            localStorage.clear();
         } else {
            // Altrimenti aggiorno i dati precedentemente salvati
            localStorage.setItem('ilNostroCarrello', JSON.stringify(this.cart));
         }
      }
      // Poi aggiorno i contatori di quantità totale e prezzo totale nello store
      this.cartCounterRefresh();
   },
   // Reset del localStorage
   resetLocal() {
      localStorage.clear();
      this.cartCounterRefresh();
   }
});