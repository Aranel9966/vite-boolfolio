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
            postFound: false,
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

        if(response.data.success) {

            this.project = response.data.results;

            this.projectFound = true;

        } else {
            this.projectFound = false;
        }
    });
    }
}
    
}

</script>
<template>
    <div>
        <h1>{{ project.title }}</h1>
    </div>
</template>
<style lang="scss">
</style>