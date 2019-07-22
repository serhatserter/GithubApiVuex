<template>
<transition name="fade" mode="out-in">
  <div id="app">
    <div class="users">
    <label v-for="(user, i) in users" :key="i">
      <div class="user">     
        <img :src="user.avatar_url" height="100" width="100"/> 
        
        <div class="userdetail">
          <h3 >@ {{ user.login }}</h3>
          <b-button to="/Profile" @click="selectingUserButton(user)" >See Details</b-button>
          <b-button :href="user.html_url" target="_blank" >Go Github Profile</b-button>
          
        </div>

      </div>

        
      
    </label>
  </div>

  
  </div>
</transition>
  
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
        

    ]),

    ...mapGetters([

    ]),

    
  },

  methods: {
    ...mapActions([
      'updateSelectingUser',
      'searchRepos',

    ]),

    selectingUserButton(val){
        this.updateSelectingUser(val);
        this.updateSelectingUser;

        this.searchRepos();
        this.searchRepos;
        console.log(this.searchRepos());
        
    }

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
