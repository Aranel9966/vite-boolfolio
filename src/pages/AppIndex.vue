<script>
import { store } from '../store';

import axios from 'axios';

import ProjectCard from '../components/ProjectCard.vue';

export default {
  name: 'AppIndex',

  data() {
    return {
      store,
      urlApi:'http://127.0.0.1:8000/api/projects',
      projects: [],
      pagination:[],
      projectsFound:false,
      search:'',
      cart:[],
      
    }
  },

  components: {
    ProjectCard,
  },  

  created() {
    this.serch(this.urlApi);
  },

  methods: {
    serch(urlApi){
    //     if(this.search!='') {
    //       urlApi = urlApi + '?page=1&title=' + this.search;
    //       axios.get(urlApi).then(response=>{
    //         this.projectsFound = true;
    //         this.projects = response.data.results;
    //       });
    //     }else{
      if(this.store.search==''){

        axios.get(urlApi).then(response => {
          this.pagination = response.data.results;
          this.store.pagination = 'http://127.0.0.1:8000/api/projects?page=1';
          console.log(this.pagination)
        });
      }else{
        axios.get(urlApi).then(response => {
          this.pagination = response.data.results;
          this.store.projects = response.data.results.data;
          console.log(this.pagination)
          })
        }
    // },
    },
    ///////////////////////////////////////
    /// cart methods
    ///////////////////////////////////
    addToCart(project) {
        const existingItem = this.cart.find(item => item.id === project.id);
        // consol.log(project);
      if (existingItem) {
        // Se il piatto è già presente nel carrello, aumenta la quantità
        existingItem.quantity++;
      } else {
        // Se il piatto non è ancora nel carrello, aggiungilo con quantità 1
        
        this.cart.push({
          id: project.id,
          name: project.title,
          // price: dish.price,
          quantity: 1
        });
        console.log(this.cart);
      }
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
      // Creiamo un oggetto per rappresentare l'ordine
    const order = {
      dishes: this.cart // Array dei piatti nel carrello
    };

    // Effettuiamo una chiamata API per inviare l'ordine al backend
    fetch('https://example.com/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(response => response.json())
    .then(data => {
      // L'ordine è stato salvato correttamente nel backend
      console.log('Ordine effettuato:', data);

      // Ripuliamo il carrello dopo aver effettuato l'ordine
      this.cart = [];
    })
    .catch(error => {
      console.error('Si è verificato un errore durante il salvataggio dell\'ordine:', error);
    });
  }
      // console.log('Hai effettuato l\'ordine:', this.cart);
    
  }

  
};
</script>

<template>
  <div class="container pt-5">
    <h1>I Miei Progetti</h1>

    <hr>

    <div class="row" v-if="this.store.projectsFound">
      <div v-for="project in this.store.projects"  class="col-4 mb-5">
        <ProjectCard :project="project"></ProjectCard>
        <button @click="addToCart(project)">Aggiungi al carrello</button>
      </div>
    </div>
  </div>
 
  <div v-if="store.search==''" class=" pagination container ">
    <button v-for="link in pagination.links" class="btn m-2" 
    v-html="link.label" 
    :class="link.active?'btn-primary':'btn-outline-light'"
    :disabled="link.url == null ? true : false"
    
    @click="serch(link.url)"
    >
    </button>
  </div>
  
</template>

<style scoped lang="scss">

  .pagination{
    color: white;
    justify-content: center;

  }
</style>