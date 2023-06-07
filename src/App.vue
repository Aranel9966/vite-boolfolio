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
    axios.get(this.store.urlApi).then(response=>{
        this.store.projects= response.data.results.data;
        console.log(response.data.results)

      });
  },
  methods: {
    serch(){
      let serchUrlApi = this.store.urlApi;
      if(this.store.serch){

        serchUrlApi += `&title=${this.store.serch}`
      }
      console.log('serchUrlApi')
      
      axios.get(serchUrlApi).then(response=>{
        this.store.projects = response.data.results.data;
        console.log(this.store.projects)

      });
    },
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
