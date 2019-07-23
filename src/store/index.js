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
  repos: [],
  starred: [],
  following: [],
  followers: [],
  reponame: "",
  repodetail: [],
  forks: [],
  issues: []
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

  SET_USER_DETAIL(state, userdetails) {
    state.userdetails = userdetails;
  },

  SET_REPOS(state, repos) {
    state.repos = repos;
  },

  SET_REPO_NAME(state, reponame) {
    state.reponame = reponame;
  },

  SET_STARRED(state, starred) {
    state.starred = starred;
  },

  SET_FOLLOWING(state, following) {
    state.following = following;
  },

  SET_FOLLOWERS(state, followers) {
    state.followers = followers;
  },

  SET_SELECT_USER(state, selectinguser) {
    state.selectinguser = selectinguser;
  },

  SET_REPODETAIL(state, repodetail) {
    state.repodetail = repodetail;
  },
  SET_FORKS(state, forks) {
    state.forks = forks;
  },
  SET_ISSUES(state, issues) {
    state.issues = issues;
  }
};

const actions = {
  updateMainSearch({ commit }, mSearch) {
    commit("setMainSearch", mSearch);
  },

  updateSelectingUser({ commit }, selectinguser) {
    commit("SET_SELECT_USER", selectinguser);
  },

  updateRepoName({ commit }, selectinguser) {
    commit("SET_REPO_NAME", selectinguser);
  },

  searchUsers({ commit, state }) {
    Vue.axios
      .get(`https://api.github.com/search/users?q=${state.mainsearch}`)
      .then(response => {
        commit("SET_USERS", response.data.items);
      });
  },
  fetchUserDetail({ commit, state }) {
    Vue.axios
      .get(`https://api.github.com/users/${state.mainsearch}`)
      .then(response => {
        commit("SET_USER_DETAIL", response.data);
      });
  },

  searchRepos({ commit, state }) {
    Vue.axios
      .get(`https://api.github.com/users/${state.mainsearch}/repos`)
      .then(response => {
        commit("SET_REPOS", response.data);
      });
  },

  fetchStarred({ commit, state }) {
    Vue.axios
      .get(`https://api.github.com/users/${state.mainsearch}/starred`)
      .then(response => {
        commit("SET_STARRED", response.data);
      });
  },

  fetchFollowing({ commit, state }) {
    Vue.axios
      .get(`https://api.github.com/users/${state.mainsearch}/following`)
      .then(response => {
        commit("SET_FOLLOWING", response.data);
      });
  },

  fetchFollowers({ commit, state }) {
    Vue.axios
      .get(`https://api.github.com/users/${state.mainsearch}/followers`)
      .then(response => {
        commit("SET_FOLLOWERS", response.data);
      });
  },

  fetchRepoDetail({ commit, state }, user) {
    Vue.axios
      .get(`https://api.github.com/repos/${user}/${state.reponame}`)
      .then(response => {
        commit("SET_REPODETAIL", response.data);
      });
  },
  fetchIssues({ commit, state }, user) {
    Vue.axios
      .get(`https://api.github.com/repos/${user}/${state.reponame}/issues`)
      .then(response => {
        commit("SET_ISSUES", response.data);
      });
  },
  fetchForks({ commit, state }, user) {
    Vue.axios
      .get(`https://api.github.com/repos/${user}/${state.reponame}/forks`)
      .then(response => {
        commit("SET_FORKS", response.data);
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
