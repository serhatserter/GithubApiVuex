<template>
    <div id="app">
      <div class ="bioBack">
        <br />
        <img class="photo" :src="userdetails.avatar_url" height="200" width="200" />

        <h1>{{userdetails.name}}</h1>
        <h2>@ {{userdetails.login}}</h2>
        <p>{{userdetails.bio}}</p>

        <div v-if="userdetails.email!==null">
          <b>e-Mail</b>
          <p>{{userdetails.email}}</p>
        </div>

        <div v-if="userdetails.company!==null">
          <b>Company</b>
          <p>{{userdetails.company}}</p>
        </div>

        <br />
        <br />
      </div>

      <b-tabs content-class="mt-3">

        <b-tab title="Stars" active>
          <stars></stars>
        </b-tab>

        <b-tab title="Following" active>
          <following></following>
        </b-tab>

        <b-tab title="Followers" active>
          <followers></followers>
        </b-tab>

        <b-tab title="Repos" active>
          <repos></repos>
        </b-tab>

      </b-tabs>

    </div>


</template>

<script>
import Repos from '../components/Repos.vue';
import Stars from "../components/Stars.vue";
import Following from "../components/Following.vue";
import Followers from "../components/Followers.vue";

import { mapState, mapGetters, mapActions } from "vuex";

export default {
  components: { Repos, Stars, Following, Followers },
  name: "Profile",
  data() {
    return {};
  },

  computed: {
    ...mapState(["userdetails", "mainsearch", "users"]),

    ...mapGetters([])
  },

   watch: {

    "$route.params.username": function() {
      this.pageLoad();
    }
  },

  methods: {
    ...mapActions([
      "searchUsers",
      "setMainSearch",
      "updateMainSearch",
      "searchRepos",
      "fetchStarred",
      "fetchFollowing",
      "fetchFollowers",
      "fetchUserDetail"
    ]),

    async pageLoad() {
      await this.updateMainSearch(this.$route.params.username);

      await this.fetchUserDetail();
      await this.searchRepos();
      await this.fetchStarred();
      await this.fetchFollowing();
      await this.fetchFollowers();
    },

  },

  async created() {
    this.$store.commit("SET_LOADING", true);
    await this.pageLoad();
    this.$store.commit("SET_LOADING", false);
  
  }

  

};
</script>

<style>
body {
  background-color: whitesmoke;
}
img {
  border-radius: 50%;
  border-style: solid;
  border-color: lightgray;
}
.bioBack{
  background-color: darkslategray;
  color:whitesmoke;
}

</style>
