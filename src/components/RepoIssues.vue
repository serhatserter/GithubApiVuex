<template>
  <div id="app">
    <div class="issues">
      <label v-for="(issue, i) in issues" :key="i">
        <div class="issue">
          <h3>{{issue.title}}</h3>

          <img :src="issue.user.avatar_url" height="100" width="100" />
          <router-link :to="`/Profile/${issue.user.login}`">
            <h4>@ {{issue.user.login}}</h4>
          </router-link>
          <br />
          <b-button :href="`${issue.html_url}`" target="_blank">Go to Issue</b-button>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "RepoWatchers",

  data() {
    return {};
  },

  computed: {
    ...mapState(["mainsearch", "issues"]),
  },

  methods: {
    ...mapActions(["updateRepoName", "fetchIssues"])
  },

  created() {
    this.updateRepoName(this.$route.params.repoName);
    this.fetchIssues(this.$route.params.username);
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

.issues {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.issue {
  background-color: white;
  width: 500px;
  padding: 10px;
  border-style: solid;
}
</style>
