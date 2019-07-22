import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const state = {
  mainsearch: "",
  users: []
};

const getters = {
  getMainSearch(s) {
    return `${s.mainsearch}`;
  }
};
const mutations = {
  setMainSearch(s, mSearch) {
    s.mainsearch = mSearch;
  },

  SET_USERS(state, users) {
      
    state.users = users;
  }
};
const actions = {
  updateMainSearch({ commit }, mSearch) {
    commit("setMainSearch", mSearch);
  },

  searchUsers({ commit, state }) {
    console.log(state.users);
    Vue.axios
      .get(`https://api.github.com/search/users?q=${state.mainsearch}`)
      .then(response => {
        commit("SET_USERS", response.data.items);
      });
  }
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;
