<template>
<transition name="fade" mode="out-in">
  <div id="app">
      <br>      
      <h3>Fork Count: {{forks.length}}</h3>

      
        <label v-for="(fork, i) in forks" :key="i">
          <div class="forkowners">

          <h4>Fork ID: {{fork.id}}</h4>
          <h3>Fork Owner: {{fork.owner.login}}</h3>
          <img :src="fork.owner.avatar_url" height="100" width="100"/><br><br> 
          <b-button :href="fork.html_url">Go Fork in Github</b-button><br>  
          <b-button :to="`/Profile/${fork.owner.login}`">See Profile</b-button><br>  
          </div>    
        </label>
      
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
      'forks'
      
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

      created(){
      
      this.updateRepoName(this.$route.params.repoName);

      this.fetchForks(this.$route.params.username);

      
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

.forkowners{
  margin: 10px;
  padding: 10px;
  border-style: solid;
  background-color: white; 
}
</style>
