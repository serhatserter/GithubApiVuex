<template>
  <transition name="fade" mode="out-in">
    <div id="app">
      <h1>FOLLOWERS</h1>

      <label v-for="(follow, i) in followers" :key="i">
        <div class="followers">
          <img :src="follow.avatar_url" height="100" width="100" />
          <router-link :to="`/Profile/${follow.login}`"><br><br>
            <h4>@{{follow.login}}</h4>
          </router-link>
        </div>
      </label>
    </div>
  </transition>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Followers",
  data() {
    return {};
  },

  computed: {
    ...mapState(["selectinguser", "followers"]),
  },

  methods: {

  }
};
</script>

<style>
.followers{
  width:700px;
  background-color: white;
  padding: 20px;

}
</style>
