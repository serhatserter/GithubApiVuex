<template>
<transition name="fade" mode="out-in">
  <div id="app">
      <br>
      <img class="photo" :src="users[0].avatar_url" height="200" width="200"/> 
      <h1>@ {{users[0].login}}</h1>

      <br><br>
      
      <b-tabs content-class="mt-3">
        <b-tab title="Repos" active><repos></repos></b-tab>
        <b-tab title="Stars" active><stars></stars></b-tab>
        <b-tab title="Following" active><p>Following</p></b-tab>
        <b-tab title="Followers" active><p>Followers</p></b-tab>

      </b-tabs>
      
  </div>
</transition>
</template>

<script>
import Repos from './Repos.vue'
import Stars from './Stars.vue'
import {mapState, mapGetters, mapActions} from 'vuex';

export default {
    components: { Repos, Stars },
    name: "Profile",
    data(){
        return{
            
        }
    },

  computed: {
    
    ...mapState([
      'selectinguser',
      'mainsearch',
      'users'
      
    ]),

    ...mapGetters([
      
    ]),

  },

  methods: {
    ...mapActions([
      'searchUsers',
      'setMainSearch',
      'updateMainSearch',
      'searchRepos',
      'fetchStarred'
    ]),

  },
    created(){
      this.updateMainSearch(this.$route.params.username);
      
      this.searchUsers();
      this.searchRepos();
      this.fetchStarred();


    }  
}
</script>

<style>
body{
  background-color: whitesmoke;
}
img{
  border-radius: 50%;
  border-style: solid;
  border-color: lightgray;
}
</style>
