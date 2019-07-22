import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

import VueRouter from "vue-router";

Vue.use(VueRouter);

import Search from "./components/Search.vue";
import Repos from "./components/Repos.vue";
import Profile from "./components/Profile.vue";

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: "/", component: Search },
    { path: "/Repos", component: Repos },
    { path: "/Profile/:username", component: Profile }
  ],
  mode: "history"
});

new Vue({
  render: h => h(App),
  store,
  router
}).$mount("#app");
