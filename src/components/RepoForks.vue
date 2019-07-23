<template>
  <transition name="fade" mode="out-in">
    <div id="app">
      <br />
      <h3>Fork Count: {{forks.length}}</h3>

      <div class="forks">
        <label v-for="(fork, i) in forks" :key="i">
          
          <div class="forkowners">
            <br>
            <img :src="fork.owner.avatar_url" height="100" width="100" />
            <br />
            <router-link :to="`/Profile/${fork.owner.login}`"><h3> @{{fork.owner.login}}</h3></router-link>
            <b-button :href="fork.html_url" target="_blank">Go Fork in Github</b-button>
            <br />
            <br />
          </div>
        </label>
      </div>
      <br />
    </div>
  </transition>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "RepoForks",

  data() {
    return {};
  },

  computed: {
    ...mapState(["mainsearch", "forks"]),

  },

  methods: {
    ...mapActions(["updateRepoName", "fetchForks"])
  },

  async created() {
    this.fetchForks(this.$route.params.username);
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

.forkowners {
  margin: 10px;
  padding: 10px;
  background-color: white;
  width: 500px;
}

.forks {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
