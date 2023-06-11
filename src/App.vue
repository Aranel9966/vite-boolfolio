<script >
import { store } from './store';
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import axios from 'axios';
export default{

  data() {
    return {
      store,
      urlApi:'http://127.0.0.1:8000/api/projects',
    }
  },
  components:{
    AppFooter,
    AppHeader
  },
  created(){
    this.serch(this.urlApi);
  },
  methods: {
   serch(urlApi){
        if(this.store.search!='') {
          urlApi = urlApi + '?page=1&title=' + this.store.search;
          axios.get(urlApi).then(response=>{
            this.store.projectsFound = true;
            this.store.projects = response.data.results;
          });
        }else{
          axios.get(urlApi).then(response => {
            this.store.projects = response.data.results.data;
            this.store.pagination = response.data.results;
            this.store.projectsFound = true;
          });
        }
    },
  },

}
</script>

<template>

  <AppHeader @serchProject="serch(this.urlApi)"></AppHeader>
  <router-view @serchProject="serch(this.urlApi)"></router-view>
  <AppFooter></AppFooter>

</template>

<style lang="scss">

</style>
