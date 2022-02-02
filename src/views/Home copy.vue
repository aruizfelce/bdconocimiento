<template>
  <div class="my-4 text-center">
  <v-spacer></v-spacer>
      <v-btn v-if="!usuario" @click="doLogin" depressed color="primary">
         Login con Google
      </v-btn>
      <template v-else>
        <h1>Hola: {{ usuario.displayName }}</h1>
        <v-btn @click="doLogout" depressed color="primary">
         Log Out
      </v-btn>  
      </template> 
      
  </div>  
    
</template>

<script>
  import {fb,auth} from '../firebase'
  export default {
    name: 'Home',

    components: {
  
    },
    data() {
      return {
        usuario:null
      }
    },
    methods: {
      async doLogin(){
        try {
          const provider = new fb.auth.GoogleAuthProvider();
          const user = await auth.signInWithPopup(provider);
          this.usuario = user.user;
        } catch (error) {
          console.log(error);
        }
      },
      async doLogout(){
        try {
          await auth.signOut();
          this.usuario = null;
        } catch (error) {
          console.log(error);
        }
        
      }
    },
  }
</script>
