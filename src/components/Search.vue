<template>
  <div id="app">
    <h1 class="searchElements">GitHub Api & Vuex Example</h1>

    <div class="searchElements">
      <input v-model="searchInput" @keyup.enter="searchButton" />
      <b-button class="searchbutton" @click="searchButton">Search</b-button>
    </div>

    <search-result></search-result>
  </div>
</template>

<script>
import SearchResult from "./SearchResult.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  components: { SearchResult },
  data() {
    return {};
  },

  computed: {
    ...mapState(["mainsearch", "users"]),

    ...mapGetters(["getMainSearch"]),

    searchInput: {
      get() {
        return this.mainsearch;
      },
      set(value) {
        this.updateMainSearch(value);
      }
    }
  },

  methods: {
    ...mapActions(["updateMainSearch", "searchUsers"]),

    searchButton() {
      this.searchUsers();
    }
  }
};
</script>

<style>
.searchElements {
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

input {
  width: 500px;
  height: 40px;
  text-align: center;
}

.searchbutton {
  margin: 10px;
  height: 40px;
}
</style>
