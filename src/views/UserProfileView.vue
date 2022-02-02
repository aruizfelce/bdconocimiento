<template>
  <v-container fluid class="grey lighten-3 py-10">
    <v-snackbar v-model="snackbar" :timeout="2000" top>
      {{ mensaje }}
    </v-snackbar>
    <v-row class="my-10" justify="center" align="center">
      <v-col>
        <v-card class="mx-auto" max-width="400">
          <v-row>
            <v-col
              cols="12"
              style="display: flex; align-items: center; text-align: center"
            >
            </v-col>
            <v-col cols="12" style="text-align: center">
              <h1>BD<span style="color: #016d94">Conocimiento</span></h1>
            </v-col>
          </v-row>
          <v-card-text>
            <v-form v-if="user">
              <h2 class="text-center">Perfil del Usuario</h2>
              <v-text-field
                v-model="userData.name"
                label="Nombre"
                prepend-icon="mdi-account-circle"
                :placeholder="user.displayName"
                persistent-placeholder
              ></v-text-field>
              <v-text-field
                v-model="userData.email"
                label="Email"
                prepend-icon="mdi-account-circle"
                :placeholder="user.email"
                persistent-placeholder
              ></v-text-field>

              <v-text-field
                v-model="userData.password"
                label="Password"
                prepend-icon="mdi-key"
                type="password"
                persistent-placeholder
              ></v-text-field>
              <v-card-actions class="align-center">
                <v-row justify="center" align="center">
                  <v-col cols="12">
                    <v-btn
                      :loading="isLoading"
                      block
                      color="teal"
                      dark
                      @click="updateProfile()"
                    >
                      Actualizar
                      <v-icon right dark>mdi-login</v-icon>
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
import { mapState } from "vuex";

export default {
  data() {
    return {
      isLoading: false,
      snackbar:false,
      mensaje:'',
      userData: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async updateProfile() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("users/updateProfile", {
          name: this.userData.name,
          email: this.userData.email,
          password: this.userData.password,
        });
        this.userData.name = this.userData.email = this.userData.password = "";
        this.mensaje = "Se actualizaron los datos"
        this.snackbar = true;
      } catch (error) {
        this.snackbar = true;  
        this.mensaje = error.message;
        
      } finally {
        this.isLoading = false;
      }
    },
  },
  computed: {
    ...mapState("users", ["user"]),
    hasDataChanged() {
        return (
            (this.userData.name && this.userData.name !== this.user.displayName) ||
            (this.userData.email && this.userData.email !== this.user.email) ||
            this.userData.password.length
        );
    },
  },
};
</script>

<style>
</style>