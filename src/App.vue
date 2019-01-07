/* eslint-disable */
<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <img class='main-logo' src="https://images.ru.prom.st/323455245_w0_h0_3.jpg">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
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
