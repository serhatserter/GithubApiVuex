<template>
  <transition name="fade" mode="out-in">
    <div id="app">
      <h1>STARS</h1>

      <label v-for="(star, i) in starred" :key="i">
        <div class="stars">
          <h4>{{star.name}}</h4>
          <b-button :href="star.svn_url" target="_blank">Go Project</b-button>
        </div>
      </label>
    </div>
  </transition>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Stars",
  data() {
    return {};
  },

  computed: {
    ...mapState(["selectinguser", "starred"]),

  },

  methods: {

  }
};
</script>

<style>
.stars{
  width:700px;
  background-color: white;
  padding: 20px;

}
</style>
