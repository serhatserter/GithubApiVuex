/* eslint-disable no-unused-vars */
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const state = {
  mainsearch: "",
  users: [],
  userdetails: [],
  selectinguser: "",
  repos: []
};

const getters = {
  getMainSearch(s) {
    return `${s.mainsearch}`;
  },
  getSelectingUser(s) {
    return `${s.selectinguser}`;
  }
};

const mutations = {
  setMainSearch(s, mSearch) {
    s.mainsearch = mSearch;
  },

  SET_USERS(state, users) {
    state.users = users;
  },

  SET_REPOS(state, repos) {
    state.repos = repos;
  },

  SET_SELECT_USER(state, selectinguser) {
    state.selectinguser = selectinguser;
  }
};

const actions = {
  updateMainSearch({ commit }, mSearch) {
    commit("setMainSearch", mSearch);
  },

  updateSelectingUser({ commit }, selectinguser) {
    commit("SET_SELECT_USER", selectinguser);
  },

  searchUsers({ commit, state }) {
    Vue.axios
      .get(`https://api.github.com/search/users?q=${state.mainsearch}`)
      .then(response => {
        commit("SET_USERS", response.data.items);
      });
  },

  searchRepos({ commit, state }) {
    Vue.axios
      .get(`https://api.github.com/users/${state.selectinguser.login}/repos`)
      .then(response => {
        commit("SET_REPOS", response.data.items);
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
