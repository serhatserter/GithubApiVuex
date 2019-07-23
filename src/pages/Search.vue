<template>
  <div>
    <h1 style="padding:30px;">GitHub Api & Vuex Example</h1>

    <div class="searchElements">
      <input v-model="searchInput" @keyup.enter="searchUsers()" />
      <b-button variant="info" class="searchbutton" @click="searchUsers()">Search</b-button>
    </div>
    <br>
    <search-result></search-result>

  </div>
</template>

<script>
import SearchResult from "../components/SearchResult.vue";
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

  }
};
</script>

<style>
.searchElements {
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: darkslategrey;
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
