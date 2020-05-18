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
  color: rgb(60, 84, 180)!important;
}
<<<<<<< HEAD
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
=======
.text-yellow{
    color: rgb(255, 193, 7)!important;
}
.text-red{
    color: rgb(255, 0, 0)!important;
}
.text-blue{
    color: rgb(0, 0, 255)!important;
}
.text-dark{
  color: rgb(33, 37, 41)!important;
}
.bg-dark{
  background-color: rgb(33, 37, 41)!important;
}
.text-light{
  color: rgb(251, 252, 253)!important;
}
.bg-light{
  background-color: rgb(251, 252, 253)!important;
>>>>>>> 533b103aafe151052395bc8874aebaa0ff67abbe
}
</style>
