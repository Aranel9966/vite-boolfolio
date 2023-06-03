<script>
import axios from 'axios';
export default{
    name:'SingleProject',
    data(){
        return{
            project:{},
            urlApi:'http://127.0.0.1:8000/',
            projectSlug:'',
            isLoading: true,
            apiSuccess: false,
        }
    },
    mounted() {
    // console.log(this.$route);
    this.projectSlug = this.$route.params.slug;

    this.getProject();
    },

    computed: {
    projectImage() {
      return this.urlApi + 'storage/' + this.project.cover_image;
    }
  },

    methods: {
    getProject() {
      
      console.log('http://127.0.0.1:8000/api/projects/' + this.projectSlug);
      axios.get( this.urlApi  + 'api/projects/' + this.projectSlug).then(response => {
        
        this.isLoading = false;
        // console.log(response.data.succes)

        if(response.data.success) {

            this.project = response.data.results;
            this.apiSuccess=true;

        } else {
            this.projectFound = false;
            this.apiSuccess=false;

        }
    });
    }
}
    
}

</script>
<template>
<div class="container d-flex">
    <div v-if="apiSuccess" class="container show">
        <div class="image text-center">
            <h1>{{ project.title }}</h1>
            <img v-if="project.cover_image" :src="'http://127.0.0.1:8000/storage/'+ project.cover_image" alt="">
        </div>
        <div class="text">
            <p>{{ project.description }}</p>
            <ul>
                <li v-for="technology in project.technologies" class="badge rounded-pill m-1" :style="{backgroundColor: technology.color}">
                {{ technology.name }}</li>
            </ul>
        </div>
    </div>
    <div v-else>
        <div class="alert alert-danger m-3">
            Nessun post trovato
        </div>
    </div>
</div>
</template>
<style scoped lang="scss">
.show{
    margin: auto;
    height: 65vh;
    display: flex;
    justify-content: center;
    gap: 50px;
    background-color: rgba(0, 0, 0, 0.47);
    margin: 50px;
    .image{
        width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img{
            width: 100%;
        }
    }
    .text{
        display: flex;
        flex-direction: column;
        justify-content: center
    }
}
</style>