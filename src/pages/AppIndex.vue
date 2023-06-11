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
          axios.get(urlApi).then(response => {
            this.pagination = response.data.results;
            console.log(this.pagination)
          });
        }
    // },
  },
  
};
</script>

<template>
  <div class="container pt-5">
    <h1>I Miei Progetti</h1>

    <hr>

    <div class="row" v-if="this.store.projectsFound">
      <div v-for="project in this.store.projects"  class="col-4 mb-5">
        <ProjectCard :project="project"></ProjectCard>
      </div>
    </div>
  </div>
 
  <div class=" pagination container ">
    <button v-for="link in pagination.links" class="btn m-2" 
    v-html="link.label" 
    :class="link.active?'btn-primary':'btn-outline-light'"
    :disabled="link.url == null ? true : false"
    @click="serch(link.url)">
    </button>
  </div>
  
</template>

<style scoped lang="scss">

  .pagination{
    color: white;
    justify-content: center;

  }
</style>