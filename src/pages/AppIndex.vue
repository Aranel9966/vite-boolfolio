<script>
import { store } from '../store';

import axios from 'axios';

import ProjectCard from '../components/ProjectCard.vue';

export default {
  name: 'AppIndex',

  data() {
    return {
      store,

      urlApi:'http://127.0.0.1:8000/api/projects?page=1',

      projects: [],

      pagination:{},
      projectsFound:false,
      search:'',
      
    }
  },

  components: {
    ProjectCard,
  },  

  created() {
    this.serch(this.urlApi);
  },

  methods: {
    // getProjects(urlApi) {
    //   axios.get(urlApi).then(response => {
    //     // console.log(response.data.results);
    //     this.projects = response.data.results.data;
    //     this.pagination=response.data.results;
    //   });
    // }
    serch(urlApi){
      urlApi = urlApi + '&title=' + this.search;
      
      axios.get(urlApi).then(response=>{
        console.log(response.data)
        // this.projects = response.data;
        // this.projects = response.data.results;
        // this.projectsFound = true;

        
        console.log(urlApi)
        if(this.search!='') {
          this.projectsFound = true;
          this.projects = response.data.results;
          // this.pagination = response.data.results;
          console.log(this.projects)
        }else{
          this.projectsFound = false;
          // this.projects = response.data.results;
        }

        
      });
    },
    
  },
};
</script>

<template>
  <form class="d-flex" role="search">
          <input @change="serch(urlApi)" v-model="this.search" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <a @click="serch(urlApi)" class="btn btn-outline-success">Search</a>
        </form>

  <div class="container pt-5">
    <h1>I Miei Progetti</h1>

    <hr>

    <div class="row" v-if="projectsFound">
      <div v-for="project in this.projects"  class="col-4 mb-5">
        <ProjectCard :project="project"></ProjectCard>
      </div>
    </div>
  </div>
 
  <div class=" pagination container ">
    <button v-for="link in pagination.links" class="btn m-2" 
    v-html="link.label" 
    :class="link.active?'btn-primary':'btn-outline-light'"
    :disabled="link.url == null ? true : false"
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