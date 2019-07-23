<template>
  <div id="app">
    <transition name="fade" mode="out-in">
    <router-view></router-view>
    </transition>
    <loading v-if="loadingStatus"/>
  </div>
</template>

<<script>
import Search from './pages/Search.vue'
import Loading from "./components/Loading.vue"


import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {mapState} from "vuex"

Vue.use(BootstrapVue)
export default {
  name: 'app',
  components: { Search, Loading },
  
  
  computed: {
    ...mapState(["loadingStatus"]),

  },
}

</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}


</style>
