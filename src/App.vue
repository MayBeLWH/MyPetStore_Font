<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
  import Login from "./components/Login";
  import Home from "./components/Home";
export default {
  name: 'App',
  components: {
    Login,
    Home
  }
}
</script>

<style>
  @import "assets/css/normalize.css";
  @import "assets/css/main.css";
</style>
