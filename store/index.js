
import Vue from "vue";
import Vuex from "vuex";


const store = () => new Vuex.Store({
   state : {
        user: null,
       facility: null
},
  getters: {
      user: (state) => {
          return state.user;
      },
      facility: (state) => {
          return state.facility;
      }
  },
  actions: {
      user(context, user) {
          context.commit('user', user);
      },
      facility (context, facility) {
          context.commit('facility', facility);
      }
  },
  mutations: {
      user(state, user) {
          state.user = user;
      },
      facility(state, facility) {
          state.facility = facility;
      }
  }
});

export default store