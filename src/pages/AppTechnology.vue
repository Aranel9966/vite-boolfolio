<script >
import axios from 'axios';

export default{

  data() {
    return {
        urlApi:'http://127.0.0.1:8000/api/technologies',
        technologies:[],
        pag:{},
    }
  },
  created() {
    this.getTechnologies(this.urlApi);
  },
  methods: {
    getTechnologies(urlApi) {
      axios.get(urlApi).then(response => {
        console.log(response.data.results);
        this.technologies = response.data.results.data;
        this.pag = response.data.results;
      })

    },
    
  },
  
}
</script>

<template>
  <h1 class="text-center">Tecnologie </h1>
    <div class="container pt-5 ">
        <div class=" d-flex justify-content-center">
            <div v-for="technology in technologies" class="tags col-4 mb-5">
                <div class="card project " :style="{backgroundColor:technology.color}">
                    <div class="card-body">
                        <h1 class="card-title">{{ technology.name }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container d-flex justify-content-center">
      <button v-for="link in pag.links" class="btn m-2 " 
      v-html="link.label" 
      :class="link.active?'btn-primary':'btn-outline-light'"
      :disabled="link.url ==null ? true :  false"
      @click="getTechnologies(link.url)">
    </button>
  </div>

</template>

<style scoped lang="scss" >

.project{

  min-height:500px;
  min-width:500px;
  background-color: #547b9f;
}
  .tags{
    display: flex;
      justify-content: center;
      align-items: center;
    div{
      display: flex;
      justify-content: center;
      align-items: center;
      h1{            
          color: white;
      }
    }
  }

</style>
