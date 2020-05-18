<template>
  <div id="app">
    <router-view />
  </div>
</template>


<style  lang="scss">
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  /* Czcionkę możemy sobie zmienić jak co także mus to nie jest może znajdziemy jakąś fajną pod tą stronę */
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.primary_color {
  color: rgb(60, 84, 180);
}
.text-yellow {
  color: #ffc107;
}
.text-red {
  color: #ff0000;
}
.text-blue {
  color: #0000ff;
}
.text-dark {
  color: #212529;
}
.bg-dark {
  background-color: #212529;
}
</style>
