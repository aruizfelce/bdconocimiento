<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-btn @click="add" color="info">Agregar</v-btn>
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
        sort-by="categoria"
      >
        <template v-slot:[`item.controls`]="{ item }">
          <v-btn small icon @click="edit(item)" elevation="1">
            <v-icon small>mdi-pencil</v-icon>
          </v-btn>
          <v-btn small icon elevation="1" @click="deleteItem(item)">
            <v-icon small>
              mdi-delete
            </v-icon>
          </v-btn>
        </template>
      </v-data-table>
      <v-dialog
          v-model="dialog"
          max-width="500px"
        >
         
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      v-model="editedItem.categoria"
                      label="Categoria"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn v-if="formTitle==='Nuevo'"
                color="blue darken-1"
                text
                :loading="loading"
                @click="save"
              >
               Guardar
              </v-btn>
              <v-btn v-if="formTitle==='Editar'"
                color="blue darken-1"
                text
                :loading="loading"
                @click="update(editedItem)"
              >
                Actualizar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      <v-dialog v-model="dialogDelete" max-width="80%">
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
      loading:false,
      item: [],
      search: "",
      dialog: false,
      dialogDelete: false,
      formTitle:"",
      itemDelete: "",
      editedItem: {
        categoria: '',
      },
      columnas: [
        { text: "Categoria", value: "categoria" },
        { text: "", value: "controls", sortable: false }
      ]
    };
  },

  methods: {
    async cargaritems() {
     try {
        const collection = await db.collection("categorias").get();
        collection.forEach((doc) => this.item.push(doc.data()));
      } catch (error) {
        console.log(error);
      }
    },
    edit(item){
      this.formTitle = "Editar";
      this.dialog = true;
      this.editedItem= item;
    }, 
    async update(item) {
      this.loading = true;
        await db.collection("categorias").doc(item.id).update(
          {
            categoria : item.categoria
          }
        );
        this.loading = false;
        this.dialog = false;
    },

    add() {
      this.dialog=true;
      this.formTitle='Nuevo';
      this.editedItem= {
        categoria: '',
      }
    },

    async deleteItemConfirm() {
      try {
        await db
          .collection("categorias")
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
    },
    close () {
        this.dialog = false
    },
     async save(dataPost){
        this.loading = true;
        const docRef = db.collection("categorias").doc();
        await docRef.set({ categoria: this.editedItem.categoria, created: Date.now(), id: docRef.id });
        this.loading = false;
        this.editedItem={
            categoria:''
        };
        this.dialog = false;
        this.item=[];
        this.cargaritems();
    },
  }
};
</script>