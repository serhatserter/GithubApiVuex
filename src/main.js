import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

import VueRouter from "vue-router";

Vue.use(VueRouter);

import Search from "./pages/Search.vue";
import RepoDetail from "./pages/RepoDetail.vue";
import Profile from "./pages/Profile.vue";

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: "/", component: Search },
    { path: "/Profile/:username", component: Profile },
    { path: "/Profile/:username/:repoName", component: RepoDetail }
  ],
  mode: "history"
});

new Vue({
  render: h => h(App),
  store,
  router
}).$mount("#app");
