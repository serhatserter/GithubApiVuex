<template>
<transition name="fade" mode="out-in">
  <div id="app">
      <br>
      <img :src="repodetail.owner.avatar_url" height="100" width="100"/> 
      <h2>@ {{repodetail.owner.login}}</h2>
      <b-button :to="`/Profile/${repodetail.owner.login}`">See Profile</b-button><br>

      
      <br>

  </div>
</transition>
</template>

<script>

import {mapState, mapGetters, mapActions} from 'vuex';

export default {

    name: "RepoOwner",

    data(){
        return{
            
        }
    },

  computed: {
    
    ...mapState([
      'mainsearch',
      'repodetail'
      
    ]),

    ...mapGetters([
      
    ]),

  },

  methods: {
    ...mapActions([

      'updateRepoName',
      'fetchRepoDetail'
    ]),

    Refresh(){
      
      this.updateMainSearch(this.$route.params.username);
      
      this.fetchUserDetail();
      this.searchRepos();
      this.fetchStarred();
      this.fetchFollowing();
      this.fetchFollowers();


    }

  },

  
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
