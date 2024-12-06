<template>
  <div id="app">
    <router-view></router-view> <!-- This is where routed components will be rendered -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Global styles for the app can go here */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
