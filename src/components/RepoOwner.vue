<template>
<transition name="fade" mode="out-in">
  <div id="app">
      <br>
      <h1>@ {{repodetail.owner.login}}</h1>
      <img :src="repodetail.owner.avatar_url" height="100" width="100"/> 
      
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
