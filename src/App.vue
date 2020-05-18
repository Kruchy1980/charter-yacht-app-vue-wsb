<template>
  <div id="app">
    <router-view />
  </div>
</template>


<style  lang="scss">
body {
  margin: 0;
  padding: 0;
  /* Czcionkę możemy sobie zmienić jak co także mus to nie jest może znajdziemy jakąś fajną pod tą stronę */
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.text__color--primary {
  color: rgb(60, 84, 180)!important;
}
.text__color--yellow{
    color: rgb(255, 193, 7)!important;
}
.text__color--red{
    color: rgb(255, 0, 0)!important;
}
.text__color--blue{
    color: rgb(0, 0, 255)!important;
}
.text__color--dark{
  color: rgb(33, 37, 41)!important;
}
.background__color--dark{
  background-color: rgb(33, 37, 41)!important;
}
.text__color--light{
  color: rgb(251, 252, 253)!important;
}
.background__color--light{
  background-color: rgb(251, 252, 253)!important;
}
</style>
