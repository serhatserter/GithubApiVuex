<template>
<transition name="fade" mode="out-in">
  <div id="app">
      <h1>FOLLOWERS</h1>

      
      <label v-for="(follow, i) in followers" :key="i">
      <div class="user">     
        
          <h4>@ {{follow.login}}</h4>
          <img :src="follow.avatar_url" height="100" width="100"/> 


      </div>      
      
    </label>

  </div>
</transition>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex';

export default {
    name: "Followers",
    data(){
        return{
            
        }
    },

  computed: {
    
    ...mapState([
      'selectinguser',
      'followers'
    ]),

    ...mapGetters([

    ]),


  },

  methods: {
    ...mapActions([

    ]),



  }
  
}
</script>

<style>

</style>
