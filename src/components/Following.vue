<template>
<transition name="fade" mode="out-in">
  <div id="app">
      <h1>FOLLOWING</h1>

      
      <label v-for="(follow, i) in following" :key="i">
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
    name: "Following",
    data(){
        return{
            
        }
    },

  computed: {
    
    ...mapState([
      'selectinguser',
      'following'
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
