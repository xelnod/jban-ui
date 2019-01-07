/* eslint-disable */
<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <main-header/>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import mainHeader from '@/components/header';

export default {
  name: 'App',
  computed: {
    ...mapState({
      currentUser: state => state.currentUser,
    }),
  },
  components: { mainHeader },
  mounted() {
    this.$store.dispatch('refreshState');
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .main-logo {
    width: 200px;
    height: 200px;
  }
</style>
