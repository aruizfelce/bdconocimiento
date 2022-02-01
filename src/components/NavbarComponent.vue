<template>
<div>
    <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>BD Conocimiento</v-toolbar-title>
      <v-spacer></v-spacer>

       <v-btn icon class="float-right" v-if="user" @click="doLogout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-shape-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Categorias</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-book-open-blank-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Tips</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</div>
</template>


<script>
  import {mapState} from "vuex";

  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),

    computed:{
      ...mapState("users",["user"])
    },

    methods: {
      async doLogout(){
        try{
          await this.$store.dispatch("users/doLogout");
          this.$router.push({name:'auth'});
        }catch(error){
          console.log(error);
        }
      }
    },
  }
</script>

<style>
</style>