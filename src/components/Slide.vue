<template>
  <div class="slide__box">
    <!-- And add here displaying of slide -->
    <!-- The slide id is: {{ slide.id }} with source of: {{ slide.src }} -->
    <div class="slide__box__image"></div>
  </div>
</template>

<script>
export default {
  // Here we are adding props - oassed from TheSlider.vue component where we have binded the slide as :slide="slides[0]" with all of the properties of a slide
  props: ["slide"]
};
</script>

<style lang="scss" scoped>
.slide__box {
  margin: 30px 0;
  height: 50vh;
  border: 1px solid #000;

  &__image {
    // just for check
    background-image: url("../assets/images/slider-image/sailing/4.yacht-s.jpeg");
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
// .slide__box__image {
//   // just for check
//   // background-image: url("../assets/images/slider-image/sailing/4.yacht-s.jpeg");
//   height: 100%;
//   width: 100%;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
// }
</style>