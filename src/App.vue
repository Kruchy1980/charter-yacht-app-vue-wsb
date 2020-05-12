<template>
  <div id="yacht-charter-app">
    <MainMenu/>
    <MainFooter/>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue';
import MainFooter from './components/MainFooter.vue';
export default {
  name: "App",
  components: {
    MainMenu,
    MainFooter,
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
