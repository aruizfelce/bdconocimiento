<template>
  <v-container fluid class="grey lighten-3 py-10">
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
            <v-form v-if="action === 'login'">
              <h2 class="text-center">Ingresar</h2>
              <v-text-field
                v-model="userData.email"
                label="Usuario"
                prepend-icon="mdi-account-circle"
              ></v-text-field>
              <v-text-field
                v-model="userData.password"
                label="Password"
                prepend-icon="mdi-key"
                type="password"
              ></v-text-field>
              <v-card-actions class="align-center">
                <v-row justify="center" align="center">
                  <v-col cols="12">
                    <v-btn
                      :loading="loading"
                      block
                      color="teal"
                      dark
                      @click="doLogin()"
                    >
                      Ingresar
                      <v-icon right dark>mdi-login</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-form>
            <v-form v-if="action === 'register'">
              <h2 class="text-center">Registrarse</h2>
              <v-text-field
                v-model="userData.name"
                label="Nombre"
                prepend-icon="mdi-account-circle"
              ></v-text-field>
              <v-text-field
                v-model="userData.email"
                label="Email"
                prepend-icon="mdi-account-circle"
              ></v-text-field>
              <v-text-field
                v-model="userData.password"
                label="Password"
                prepend-icon="mdi-key"
                type="password"
              ></v-text-field>
              <v-card-actions class="align-center">
                <v-row justify="center" align="center">
                  <v-col cols="12">
                    <v-btn
                      :loading="loading"
                      block
                      color="teal"
                      dark
                      @click="doRegister()"
                    >
                      Registrarse
                      <v-icon right dark>mdi-account-plus</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-form>
            <v-form v-if="action === 'reset'">
              <h2 class="text-center">Reiniciar contraseña</h2>
              <v-text-field
                v-model="userData.email"
                label="Usuario"
                prepend-icon="mdi-account-circle"
              ></v-text-field>

              <v-card-actions class="align-center">
                <v-row justify="center" align="center">
                  <v-col cols="12">
                    <v-btn
                      :loading="loading"
                      block
                      color="teal"
                      dark
                      @click="doReset()"
                    >
                      Reiniciar
                      <v-icon right dark>mdi-lock-reset</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-form>
            <v-row justify="center" align="center">
              <v-list dense>
                <v-list-item
                  @click="action = 'register'"
                  v-if="action === 'login' || action === 'reset'"
                >
                  <v-list-item-content>
                    <v-list-item-title class="blue--text"
                      >¡Deseo registrame!</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  @click="action = 'reset'"
                  v-if="action === 'login'"
                >
                  <v-list-item-content>
                    <v-list-item-title class="blue--text"
                      >¡Olvidé la contraseña!</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-list dense v-if="action === 'register'">
                <v-list-item @click="action = 'login'">
                  <v-list-item-content>
                    <v-list-item-title class="blue--text"
                      >Tengo cuenta</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-row>
          </v-card-text>

          <div v-if="mensaje">
            <p class="mx-4 pl-2 blue--text">{{ mensaje }}</p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        name: "",
        email: "",
        password: "",
      },

      loading: false,
      snackbar: false,
      mensaje: "",
      action: "login",
    };
  },
  methods: {
    resetData() {
      this.userData.email = this.userData.password = this.userData.name = "";
    },
    redirect() {
      this.$router.push({ name: "Home" });
    },
    async doLogin() {
      this.loading = true;
      try {
        await this.$store.dispatch("users/doLogin", {
          email: this.userData.email,
          password: this.userData.password,
        });
        this.snackbar = true;
        this.mensaje = "Se ingresó con éxito";
        this.resetData();
        this.redirect();
      } catch (error) {
        this.mensaje = error;
      } finally {
        this.loading = false;
      }
    },
    async doRegister() {
      this.loading = true;
      try {
        await this.$store.dispatch("users/doRegister", {
          name: this.userData.name,
          email: this.userData.email,
          password: this.userData.password,
        });
        this.resetData();
        this.redirect();
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    async doReset() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("users/doReset", this.userData.email);
        this.snackbar = true;
        this.mensaje= `Check ${this.userData.email} for further instructions`;
        this.resetData();
      } catch (error) {
        this.mensaje=error.message;
        console.error(error.message);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style>
</style>