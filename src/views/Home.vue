<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-btn @click="agregar" color="info">Agregar</v-btn>
      </v-col>
      <v-col cols="8">
        <v-text-field label="Buscar" v-model="search">></v-text-field>
      </v-col>
    </v-row>
    <v-app>
      <v-data-table
        :headers="columnas"
        :items="item"
        :items-per-page="10"
        :search="search"
        item-key="item"
        dense
        group-by="categoria"
        multi-sort
        @click:row="view($event)"
      >
        <template v-slot:[`item.controls`]="{ item }" >
          <v-btn small icon @click="editar(item)" elevation="1">
            <v-icon small>mdi-pencil</v-icon>
          </v-btn>
          <v-btn small icon elevation="1" @click="deleteItem(item)">
            <v-icon small>
              mdi-delete
            </v-icon>
          </v-btn>
         
        </template>
      </v-data-table>
      <v-dialog v-model="dialogDelete" max-width="500px">
        <v-card>
          <v-card-title class="headline">
            ¿Está seguro de borrar este registro?
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeDelete">
              Cancelar
            </v-btn>
            <v-btn color="blue darken-1" text @click="deleteItemConfirm">
              OK
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog" max-width="80%">
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ editedItem.titulo }}</span>
            </v-card-title>

            <ckeditor :read-only="true"     
                v-model="editedItem.contenido">
            </ckeditor>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cerrar
              </v-btn>
              
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-app>
  </v-container>
</template>

<script>

import { db } from "../firebase";
export default {

 
  mounted() {
   
    this.cargaritems();
  },

  data() {
    return {
      
      dialog:false,
      item: [],
      search: "",
      dialogDelete: false,
      itemDelete: "",
      editedItem: {
        titulo:'',
        contenido: '',
      },
      columnas: [
        { text: "Categoria", value: "categoria" },
        { text: "Titulo", value: "titulo" },
        // { text: "Contenido", value: "contenido" },
        { text: "", value: "controls", sortable: false }
      ]
    };
  },

  methods: {

    async cargaritems() {
     try {
        const collection = await db.collection("posts").get();
        collection.forEach((doc) => this.item.push(doc.data()));
      } catch (error) {
        console.log(error);
      }
    },

    editar(item) {
      this.$router.push("/edit/" + item.id);
    },
    view(item){
      this.dialog = true;
      this.editedItem= item;
    },
    agregar() {
      this.$router.push("/add");
    },
    close(){
      this.dialog = false
    },

    async deleteItemConfirm() {
      try {
        await db
          .collection("posts")
          .doc(this.itemDelete)
          .delete();
        this.closeDelete();
        this.item = [];
        this.cargaritems();

      } catch (error) {
        console.log(error);
      }
    },

    deleteItem(item) {
      this.itemDelete = item.id;
      this.dialogDelete = true;
    },

    closeDelete() {
      this.dialogDelete = false;
    }
  }
};
</script>