<template>
  <v-container fluid class="grey lighten-3 py-10">
    <v-row class="my-10" justify="center" align="center">
      <v-col>
        <v-card class="mx-auto" max-width="80%" >
          <v-card-text>
            <v-form>
              <h2 class="text-center">Agregar Tip</h2>
              <v-select
                :items="categories"
                label="Categoria"
                v-model="dataPost.categoria"
                prepend-icon="mdi-shape-outline"
              ></v-select>
              <v-text-field
                v-model="dataPost.titulo"
                label="Titulo"
                prepend-icon="mdi-format-title"
              ></v-text-field>
              <v-textarea
                v-model="dataPost.contenido"
                label="Contenido"
                prepend-icon="mdi-book-open-blank-variant"
              ></v-textarea>
              <v-card-actions class="align-center">
                <v-row justify="center" align="center">
                  <v-col cols="12">
                    <v-btn
                      :loading="loading"
                      block
                      color="teal"
                      dark
                      @click="save(dataPost)"
                    >
                      Guardar
                      <v-icon right dark>mdi-content-save</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { db } from "../firebase";
export default {
data() {
    return {
        dataPost:{
            categoria:'',
            titulo: '',
            contenido:''
        },
        loading:false,
        categories:['GIT','VUE','PHP','FIREBASE']
    }
},
methods: {
    async save(dataPost){
        this.loading = true;
        const docRef = db.collection("posts").doc();
        await docRef.set({ categoria: dataPost.categoria, titulo: dataPost.titulo, contenido: dataPost.contenido, created: Date.now(), id: docRef.id });
        this.loading = false;
        this.dataPost={
            categoria:'',
            titulo: '',
            contenido:''
        }
    }
},
}
</script>

<style>

</style>