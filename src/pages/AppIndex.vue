<script>

import axios from 'axios';

import ProjectCard from '../components/ProjectCard.vue';

export default {
  name: 'AppIndex',

  data() {
    return {

      urlApi:'http://127.0.0.1:8000/api/projects',

      projects: [],

      pagination:{},
      
    }
  },

  components: {
    ProjectCard,
  },  

  created() {
    this.getProjects(this.urlApi);
  },

  methods: {
    getProjects(urlApi) {
      axios.get(urlApi).then(response => {
        console.log(response.data.results);
        this.projects = response.data.results.data;
        this.pagination=response.data.results;
      })

      
    },
    
  },
};
</script>

<template>

  <div class="container pt-5">
    <h1>I Miei Progetti</h1>

    <hr>

    <div class="row">
      <div v-for="project in projects" class="col-4 mb-5">
        <ProjectCard :project="project"></ProjectCard>
      </div>
    </div>
  </div>
 
  
  <div class=" pagination container ">
    <button v-for="link in pagination.links" class="btn m-2" 
    v-html="link.label" 
    :class="link.active?'btn-primary':'btn-outline-light'"
    :disabled="link.url ==null ? true :  false"
    @click="getProjects(link.url)">
    
    </button>
  </div>


  
</template>

<style scoped lang="scss">

  .pagination{
    color: white;
    justify-content: center;

  }
</style>