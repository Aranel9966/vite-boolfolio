<script>
export default {
  name: 'ProjectCard',

  data() {
    return {
      baseUrl: 'http://127.0.0.1:8000/',
    }
  },

  props: {
    project: Object,
  },

  computed: {
    shortdescription() {
      if(this.project.description.length > 40) {
        return this.project.description.substring(0, 40) + '...';
      } else {
        return this.project.description;
      }
    },

    coverImage() {
      if(this.project.cover_image == null) {
        return "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
      } else {
        return this.baseUrl + 'storage/' + this.project.cover_image;
      }
    },
  },
}
</script>

<template>
  <div class="card project ">

    <img :src="coverImage" class="cover-image card-img-top" alt="...">

    <div class="card-body">

      <h5 class="card-title">{{ project.title }}</h5>
      <small>Categoria: {{ project.category ? project.category.name : 'nessuna' }}</small>

      <div class="technologies">
        <span v-for="technology in project.technologies" class="badge rounded-pill m-1" :style="{backgroundColor: technology.color}">{{ technology.name }}</span>
      </div>

      <p class="card-text"> {{ shortdescription }} </p>

      <div class="text-center">
        <router-link :to="{name: 'projects.show', params: {slug: project.slug}}" class="btn btn-outline-info">Leggi</router-link>

      </div>

    </div>

  </div>
</template>

<style scoped lang="scss" >
.project{
  min-height:338px;
  background-color: #547b9f;
  h5,small{

    color:#26e422 ;
  }
  p{
    color: white;
  }
  .cover-image {
    height: 200px; 
    object-fit: cover;
    object-position: center;
  }
}



    
    
  
  

</style>