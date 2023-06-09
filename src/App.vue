<script >
import { store } from './store';
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import axios from 'axios';
export default{

  data() {
    return {
      store,
      urlApi:'http://127.0.0.1:8000/api/projects?page=1',
    }
  },
  components:{
    AppFooter,
    AppHeader
  },
  created(){
    // axios.get(this.store.urlApi).then(response=>{
    //     this.store.projects= response.data.results.data;
    //     // console.log(response.data.results)

    //   });
    // this.serch(this.urlApi);

  },
  methods: {
    // serch(urlApi){
    //   // urlApi = this.urlApi;
    //   urlApi = urlApi+'&title=' + this.store.serch; 
    //   axios.get(urlApi).then(response=>{
    //     console.log('ciao')
    //     this.store.projects = response.data.results.data;
    //     this.store.pagination=response.data.results;

    //     console.log(this.store.projects)
        
    //   });
    // },
  },
}
</script>

<template>

  <AppHeader @serchProject="serch()"></AppHeader>
  <router-view></router-view>
  <AppFooter></AppFooter>

</template>

<style lang="scss">

</style>
