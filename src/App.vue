<script >
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
export default{

  data() {
    return {
      
    }
  },
  components:{
    AppMain,
    AppFooter,
    AppHeader
  }
}
</script>

<template>

  <AppHeader></AppHeader>
  <AppMain></AppMain>
  <AppFooter></AppFooter>

</template>

<style >

</style>
