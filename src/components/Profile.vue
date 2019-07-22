<template>
<transition name="fade" mode="out-in">
  <div id="app">

      <img :src="selectinguser.avatar_url" height="200" width="200"/> 
      <h1>@ {{selectinguser.login}}</h1>

      <br><br>
      
      <b-tabs content-class="mt-3">
        <b-tab title="Repos" active><repos></repos></b-tab>
        <b-tab title="Stars" active><p>Stars</p></b-tab>
        <b-tab title="Following" active><p>Following</p></b-tab>
        <b-tab title="Followers" active><p>Followers</p></b-tab>

      </b-tabs>
      
  </div>
</transition>
</template>

<script>
import Repos from './Repos.vue'
import {mapState, mapGetters, mapActions} from 'vuex';

export default {
    components: { Repos },
    name: "Profile",
    data(){
        return{
            
        }
    },

  computed: {
    
    ...mapState([
      'selectinguser',
    ]),

    ...mapGetters([

    ]),


  },

  methods: {
    ...mapActions([

    ]),

  },
  
}
</script>

<style>

</style>
