<template>
  <div id="yacht-charter-app">
    <TheSlider />
  </div>
</template>

<script>
import TheSlider from "@/components/TheSlider";
export default {
  name: "App",
  components: { TheSlider }
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
/* Slider styles - później przeniesione zostaną do TheSlider.vue component */
</style>
