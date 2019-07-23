<template>
<transition name="fade" mode="out-in">
  <div id="app">
      <h1>NEW PAGE</h1>
      <h1>{{repodetail.name}}</h1>
      
      <b-tabs content-class="mt-3">
        <b-tab title="Repos" active>Owner</b-tab>
        <b-tab title="Stars" active>Forks</b-tab>
        <b-tab title="Following" active>Watchers</b-tab>
        <b-tab title="Followers" active>Issues</b-tab>

      </b-tabs>
  </div>
</transition>
</template>

<script>

import {mapState, mapGetters, mapActions} from 'vuex';

export default {

    name: "Profile",
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
    created(){
      
      this.updateRepoName(this.$route.params.repoName);

      this.fetchRepoDetail(this.$route.params.username);

      
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
