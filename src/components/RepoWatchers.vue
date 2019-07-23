<template>
<transition name="fade" mode="out-in">
  <div id="app">
      <br>
      <h1>Watchers Count: {{repodetail.watchers_count}}</h1>      
      <br>

  </div>
</transition>
</template>

<script>

import {mapState, mapGetters, mapActions} from 'vuex';

export default {

    name: "RepoWatchers",

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
      'fetchForks'
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
