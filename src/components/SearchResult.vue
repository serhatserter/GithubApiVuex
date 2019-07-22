<template>

  <div id="app">
    <div class="users">
    <label v-for="(user, i) in users" :key="i">
      <div class="user">     
        <img :src="user.avatar_url" height="100" width="100"/> 
        
        <div class="userdetail">
          <h3 >@ {{ user.login }}</h3>
          <b-button class="buton" :to="`/Profile/${user.login}`">See Details</b-button>
          <b-button class="buton" :href="user.html_url" target="_blank" >Go Github Profile</b-button>
          
          <transition name="router-anim" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutDown">
            <router-view/>
          </transition>
        </div>

      </div>

        
      
    </label>
  </div>

  
  </div>

  
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex';

export default {
    data(){
        return{

        }
    },

  computed: {
    ...mapState([
        'mainsearch',
        'users',
        'selectinguser',
        'repos'

    ]),

    ...mapGetters([

    ]),

  },

  methods: {
    ...mapActions([
      'updateSelectingUser',
      'searchRepos',
      'fetchStarred',

    ]),

  }
}
</script>

<style>

@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

.user{
  display: inherit;
  border-style: solid;
  width: 500px;
  padding: 20px;
}
.users{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

}
.userdetail{
  padding-left: 20px;
  display: inline-block;

}
.buton{

  margin-right: 10px;
}
</style>
