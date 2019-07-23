<template>
  <transition name="fade" mode="out-in">
    <div id="app">
      <h1>REPOS</h1>

      <div class="repos">
        <br />
        <label v-for="(repo, i) in repos" :key="i">
          <div class="repo">
            <h4>{{repo.name}}</h4>
            <p>{{repo.description}}</p>
            <b-button :to="`/Profile/${mainsearch}/${repo.name}`">See Details</b-button>
            <router-view />
          </div>
        </label>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import RepoDetail from '../pages/RepoDetail.vue';

export default {
  components: { RepoDetail },
  name: "Repos",
  data() {
    return {};
  },

  computed: {
    ...mapState(["mainsearch", "repos", "repodetail", "reponame"])
  },

  methods: {
    ...mapActions(["updateRepoName", "fetchRepoDetail"])
  }
};
</script>

<style>
.repos {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.repo {
  display: inherit;
  background-color: white;
  width: 700px;
  padding: 20px;
}
</style>
