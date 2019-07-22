<template>
  <div id="app">
    <div class="users">
    <label v-for="(user, i) in users" :key="i">
      <div class="user">     
        <img :src="user.avatar_url" height="100" width="100"/> 
        
        <div class="userdetail">
          <h3 >@ {{ user.login }}</h3>
          <b-button >Get Details</b-button>
          <b-button :href="user.html_url" target="_blank" >Go Profile</b-button>
        </div>

      </div>
        <!--
        <b-button :href="user.html_url" target="_blank">Profile</b-button>
        <b-button :href="user.followers_url" target="_blank">Followers</b-button>
        <b-button :href="user.following_url" target="_blank">Following</b-button>
        -->
      
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
        'users'
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
b-button{

  padding: 10px;
}
</style>
