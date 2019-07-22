<template>
<transition name="fade" mode="out-in">
  <div id="app">
      <h1>REPOS</h1>

      <p>{{repos}}</p>
      <label v-for="(repo, i) in repos" :key="i">
      <div class="user">     
        
        <div class="repodetail">

        </div>

      </div>

        
      
    </label>
  </div>
</transition>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex';

export default {
    name: "Repos",
    data(){
        return{
            
        }
    },

  computed: {
    
    ...mapState([
      'selectinguser',
      'repos'
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
