import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//magazyn zmiennych
export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    }
  },
  actions: {
    //aktualizacja stanu usera firebase
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email,
          isAnonymous: user.isAnonymous
        });
      } else {
        commit("SET_USER", null);
      }
    }
  }
});