<script>
import { store } from '../store';

export default {
  name: 'AppHeader',

  data() {
    return {
      store,
    }
  },
 
  methods: {
    
  },
}
</script>

<template>
  <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Portfolio</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page"  :to="{name:'home'}">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'technology'}" class="nav-link">Tecnologie</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'about'}" class="nav-link">Chi sono?</router-link>
          </li>
        </ul>
        <div class="d-flex" role="search" >
          <input @keyup.enter="$emit('serchProject')" v-model="this.store.search" class="rounded p-1 me-2" type="search" placeholder="Search" aria-label="Search">
          <a @click="$emit('serchProject')" class="btn btn-success" type="submit">Search</a>
        </div>
      </div>
    </div>
  </nav>
  
</template>

<style lang="scss">
  nav{
    background-color: #547b9f;

  }
</style>