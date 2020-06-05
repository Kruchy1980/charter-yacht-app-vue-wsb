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
.text__color--gray{
      color: rgb(108, 117, 125)!important;
}
.text__color--dark{
  color: rgb(33, 37, 41)!important;
}
.text__color--gray{
      color: rgb(108, 117, 125)!important;
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

.tooltip {
  display: block !important;
  z-index: 10000;
 
  .tooltip-inner {
    background: rgb(60, 84, 180);
    color: rgb(251, 252, 253);
    border-radius: 16px;
    padding: 5px 10px 4px;
  }
 
  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: rgb(60, 84, 180);
    z-index: 1;
  }
 
  &[x-placement^="top"] {
    margin-bottom: 5px;
 
    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }
 
  &[x-placement^="bottom"] {
    margin-top: 5px;
 
    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }
 
  &[x-placement^="right"] {
    margin-left: 5px;
 
    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }
 
  &[x-placement^="left"] {
    margin-right: 5px;
 
    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }
 
  &.popover {
    $color: #f9f9f9;
 
    .popover-inner {
      background: $color;
      color: rgb(60, 84, 180);
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(60, 84, 180, .1);
    }
 
    .popover-arrow {
      border-color: $color;
    }
  }
 
  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }
 
  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
}
</style>
