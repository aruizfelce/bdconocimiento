<template>
  <div class="my-4 text-center">
    <template>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">Categoria</th>
              <th class="text-center">Titulo</th>
              <th class="text-center">Contenido</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(post, index) in dataPost" :key="index">
              <td>{{ post.categoria }}</td>
              <td>{{ post.titulo }}</td>
              <td>{{ post.contenido }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </template>
  </div>
 </template>

<script>
import { db } from "../firebase";

export default {
  name: "Home",

  components: {},
  data() {
    return {
      dataPost: [],
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
