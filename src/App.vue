<template>
  <v-app>
    <Navbar/>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import Navbar from './components/NavbarComponent';

export default {
  name: 'App',
  components:{
    Navbar
    
  },
  created(){
    this.$store.dispatch("checkAuth");
  },

  data: () => ({
    //
  })
};
</script>
