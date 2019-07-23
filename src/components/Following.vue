<template>
  <transition name="fade" mode="out-in">
    <div id="app">
      <h1>FOLLOWING</h1>

      <label v-for="(follow, i) in following" :key="i">
        <div class="following">
          <img :src="follow.avatar_url" height="100" width="100" />
          <router-link :to="`/Profile/${follow.login}`"><br>
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
  name: "Following",
  data() {
    return {};
  },

  computed: {
    ...mapState(["selectinguser", "following"]),

  },

  methods: {
  }
};
</script>

<style>
.following{
  width:700px;
  background-color: white;
  padding: 20px;

}
</style>
