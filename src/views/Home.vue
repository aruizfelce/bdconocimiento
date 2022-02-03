<template>
   
    <v-card class="mx-auto" max-width="80%">
    
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="dataPost"
      :search="search"
      group-by="categoria"
    ></v-data-table>
  </v-card>
  
 </template>

<script>
import { db } from "../firebase";

export default {
  name: "Home",

  components: {},
  data() {
    return {
      dataPost: [],
      search: '',
        headers: [
          {
            
            align: 'start',
            filterable: false,
            value: 'name',
          },
          { text: 'Categoria', value: 'categoria' },
          { text: 'Titulo', value: 'titulo' },
          { text: 'Contenido)', value: 'contenido' },
          
        ],
    };
  },
  methods: {
    async loadData() {
      try {
        const collection = await db.collection("posts").get();
        collection.forEach((doc) => this.dataPost.push(doc.data()));
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.loadData();
  },
};
</script>
