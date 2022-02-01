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
              style="display: flex; align-items: center; text-align: center;"
            >
            </v-col>
            <v-col cols="12" style="text-align: center;">
              <h1>BD<span style="color:#016d94">Conocimiento</span></h1>
            </v-col>
          </v-row>
          <v-card-text>
            <v-form v-if="isLogin"> 
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
            <v-form v-else>
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
             <v-row justify="center" align="center">
                <v-list dense v-if="isLogin">
                  <v-list-item @click="isLogin=false">
                    <v-list-item-content>
                      <v-list-item-title class="blue--text"
                        >¡Deseo registrame!</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-list dense v-else>
                  <v-list-item @click="isLogin=true">
                    <v-list-item-content>
                      <v-list-item-title class="blue--text"
                        >Tengo cuenta</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-row>
          </v-card-text>
          <div v-if="error">
            <p class="mx-4 pl-2 blue--text">{{ errorMsg }}</p>
          </div>
          <div v-if="mensaje">
            <p class="mx-4 pl-2 blue--text">{{ mensaje }}</p>
          </div>
          <div v-if="mensajeSinMail">
            <p class="mx-4 pl-2 blue--text">{{ mensajeSinMail }}</p>
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
            userData:{
              name: "",
              email:"",
              password: "",
            },
            error: "",
            errorMsg: "",
            loading: false,
            snackbar: false,
            error2: false,
            mensajeSinMail: "",
            mensaje: "",
            isLogin:true
        }
    },
    methods: {
      resetData(){
        this.userData.email = this.userData.password = this.userData.name = ""
      },
      redirect(){
        this.$router.push({name:"Home"});
      },
      async doLogin(){
        this.loading = true;
        try {
          await this.$store.dispatch("users/doLogin",{
            email: this.userData.email,
            password: this.userData.password
          })
          this.snackbar= true;
          this.mensaje = "Se ingresó con éxito"
          this.resetData();
          this.redirect();
        } catch (error) {
          console.log(error);
        }finally{
          this.loading = false;
        }
      },
      async doRegister(){
        this.loading = true;
        try {
          await this.$store.dispatch("users/doRegister",{
            name: this.userData.name,
            email: this.userData.email,
            password: this.userData.password
          })
          this.resetData();
          this.redirect();
        } catch (error) {
          console.log(error);
        }finally{
          this.loading = false;
        }
      },
    },
}
</script>

<style>

</style>