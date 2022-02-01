import Vue from 'vue'
import Vuex from 'vuex'
import users from "./users"
import {auth} from "../firebase"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    checkAuth({ commit }) {
      auth.onAuthStateChanged(function(user) {
        if (user) {
          commit("users/setUser", user);
        } else {
          commit("users/setUser", null);
        }
      });
    }
  },
  modules: {
    users
  }
})


