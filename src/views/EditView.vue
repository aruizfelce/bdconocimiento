<template>
  <v-container fluid class="grey lighten-3 py-10">
    <v-row class="my-10" justify="center" align="center">
      <v-col>
        <v-card class="mx-auto" max-width="80%" >
          <v-card-text>
            <v-form>
              <h2 class="text-center">Editar Tip</h2>
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
            contenido:'',
            id:''
        },
        loading:false,
        categories:[]
    }
},
mounted() {
    this.dataPost.id = this.$route.params.id;
    this.loadItem();
    this.loadCategories();
},
methods: {
   async loadItem() {
     try {
        const collection = await db
          .collection("posts")
          .where("id", "==", this.dataPost.id)
          .get();
        collection.forEach((doc) => this.dataPost=(doc.data()));
      } catch (error) {
        console.log(error);
      }
    },
    async save(dataPost){
        this.loading = true;
        await db.collection("posts").doc(this.dataPost.id).update(
          {
            categoria : this.dataPost.categoria,
            titulo : this.dataPost.titulo,
            contenido : this.dataPost.contenido
          }
        );
        this.loading = false;
        this.$router.push('/');
    },
    async loadCategories() {
     try {
        const collection = await db.collection("categorias").get();
        collection.forEach((doc) => this.categories.push(doc.data().categoria));
      } catch (error) {
        console.log(error);
      }
    },

}
}
</script>

<style>

</style>