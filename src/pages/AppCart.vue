  
  <script>
  export default {
    data() {
      return {
        dishes: [], // Inizialmente l'array dei piatti sarà vuoto
        cart:[]
      };
    },
    mounted() {
      this.fetchDishes(); // Chiamiamo la funzione per ottenere i piatti al caricamento del componente
    },
    methods: {
      fetchDishes() {
        // Chiamata API per ottenere i piatti dal backend
        // Puoi sostituire l'URL con quello corretto per la tua API
        // fetch('https://example.com/api/dishes')
        //   .then(response => response.json())
        //   .then(data => {
        //     this.dishes = data; 
        // })
        // Assegna i piatti ottenuti alla variabile dishes
        //   .catch(error => {
        //     console.error('Si è verificato un errore durante il recupero dei piatti:', error);
        //   });
      },
      addToCart(dish) {
        const existingItem = this.cart.find(item => item.id === dish.id);

      if (existingItem) {
        // Se il piatto è già presente nel carrello, aumenta la quantità
        existingItem.quantity++;
      } else {
        // Se il piatto non è ancora nel carrello, aggiungilo con quantità 1
        this.cart.push({
          id: dish.id,
          name: dish.name,
          price: dish.price,
          quantity: 1
        });
      }
        console.log('Hai aggiunto al carrello:', dish);
      },
      removeFromCart(item) {
      // Rimuovi l'elemento corrispondente dal carrello
      const index = this.cart.findIndex(cartItem => cartItem.id === item.id);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    },

    calculateTotal() {
      // Calcola il totale del carrello
      return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },

    placeOrder() {
      // Qui puoi implementare la logica per inviare l'ordine al backend
      // Utilizza una chiamata API al tuo endpoint nel backend per gestire l'ordine del carrello
      console.log('Hai effettuato l\'ordine:', this.cart);
    }
    }
  };
  </script>
  
    <template>
        <div>
        <h2>Lista piatti</h2>
        <ul>
            <li v-for="dish in dishes" :key="dish.id">
            {{ dish.name }} - {{ dish.price }}
            <button @click="addToCart(dish)">Aggiungi al carrello</button>
            </li>
        </ul>
            <h2>Carrello</h2>
            <ul>
                <li v-for="item in cart" :key="item.id">
                    {{ item.name }} - {{ item.price }} - Quantità: {{ item.quantity }}
                    <button @click="removeFromCart(item)">Rimuovi dal carrello</button>
                </li>
            </ul>

            <h3>Riepilogo</h3>
            <p>Totale: {{ calculateTotal() }}</p>
            <button @click="placeOrder">Effettua ordine</button>
        </div>
        
    </template>