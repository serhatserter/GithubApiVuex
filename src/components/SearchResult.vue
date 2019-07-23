<template>
  <div id="app">
    <div class="users">
      <label v-for="(user, i) in users" :key="i">
        <div class="user">
          <img :src="user.avatar_url" height="100" width="100" />

          <div class="userdetail">
            <h3>@ {{ user.login }}</h3>
            <b-button variant="info" class="buton" :to="`/Profile/${user.login}`">See Details</b-button>
            <b-button variant="info" class="buton" :href="user.html_url" target="_blank">Go Github Profile</b-button>

          </div>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },

  computed: {
    ...mapState(["mainsearch", "users", "selectinguser", "repos"]),
  },

  methods: {
    ...mapActions(["updateSelectingUser", "searchRepos", "fetchStarred"])
  }
};
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

.user {
  display: inline-block;
  background-color: white; 
  width: 500px;
  padding: 20px;
  
}
.users {
  display: flex;
  flex-direction: column;
  
}
.userdetail {
  display: inline-block;
  padding-left: 20px;


}
.buton {
  margin-right: 10px;
}
</style>
