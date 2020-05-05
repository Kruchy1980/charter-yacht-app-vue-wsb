<template>
  <div id="yacht-charter-app">
    <!-- <div :any="any" class="smth">Jakiś tekst tylko na próbę</div> -->
    <TheNavbar />
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
export default {
  name: "App",
  components: { TheNavbar }
};
</script>

<style>
#yacht-charter-app {
  /* Czcionkę możemy sobie zmienić jak co także mus to nie jest może znajdziemy jakąś fajną pod tą stronę */
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
/* All elements */
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* Navbar styles - później przeniesione zostaną do TheNavbar.vue component */
</style>
