<template>
    <div id="app">
      <div class="repoTitle">
      <br />
      <h1>{{repodetail.name}}</h1>
      <p>{{repodetail.description}}</p>
      <br />
      </div>
      <b-tabs content-class="mt-3">

        <b-tab title="Forks" active>
          <repo-forks></repo-forks>
        </b-tab>

        <b-tab title="Watchers" active>
          <repo-watchers></repo-watchers>
        </b-tab>

        <b-tab title="Issues" active>
          <repo-issues></repo-issues>
        </b-tab>
        
        <b-tab title="Owner" active>
          <repo-owner></repo-owner>
        </b-tab>

      </b-tabs>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import RepoOwner from "../components/RepoOwner.vue";
import RepoWatchers from "../components/RepoWatchers.vue";
import RepoForks from "../components/RepoForks.vue";
import RepoIssues from "../components/RepoIssues.vue";
export default {
  name: "Profile",
  components: { RepoOwner, RepoWatchers, RepoForks, RepoIssues },

  data() {
    return {};
  },

  computed: {
    ...mapState(["mainsearch", "repodetail"]),
  },

  methods: {
    ...mapActions(["updateRepoName", "fetchRepoDetail"])
  },

  created() {
    this.updateRepoName(this.$route.params.repoName);
    this.fetchRepoDetail(this.$route.params.username);
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

.repoTitle{
    background-color: darkslategray;
  color:whitesmoke;
}

</style>
