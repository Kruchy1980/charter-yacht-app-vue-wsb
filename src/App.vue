<template>
  <div id="yacht-charter-app">
    <MainMenu/>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue';
export default {
  name: "App",
  components: {
    MainMenu
  }
};
</script>

<style>
#yacht-charter-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
