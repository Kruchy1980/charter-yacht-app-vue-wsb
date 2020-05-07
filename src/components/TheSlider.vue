<template>
  <!-- First bind the images to the slide component -->
  <div class="slider__box">
    <Slide :slide="slides[0]" />
  </div>
</template>

<script>
import Slide from "@/components/Slide";
export default {
  // Adding the slides to the TheSlider Components zn separate obects
  components: { Slide },

  data() {
    return {
      slides: [
        {
          id: 0,
          src: "../assets/images/slider-image/sailing/1.yacht-s.jpeg"
        },
        {
          id: 1,
          src: "../assets/images/slider-image/motor/1.motorboat.jpg"
        },
        {
          id: 2,
          src:
            "../assets/images/slider-image/catamaran-sailing/1.catamaran-s.jpeg"
        },
        {
          id: 3,
          src:
            "../assets/images/slider-image/catamaran-motor/2.catamaran-m.jpeg"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.slider__box {
  h1 {
    text-align: center;
  }
}
</style>