<template>
  <!-- First bind the images to the slide component -->
  <div class="slider__box">
    <!-- Here we will add the arrows -->
    <div class="slider__box__arrow--left" @click="arrowLeft">&lt;</div>
    <Slide :slide="slides[choosenSlide]" />
    <div class="slider__box__arrow--right" @click="arrowRight">&gt;</div>
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
          src: "../assets/images/slider-image/sailing/1.yacht-s.jpeg",
          title: "Home"
        },
        {
          id: 1,
          src: "../assets/images/slider-image/motor/1.motorboat.jpg",
          title: "About"
        },
        {
          id: 2,
          src:
            "../assets/images/slider-image/catamaran-sailing/1.catamaran-s.jpeg",
          title: "Charter"
        },
        {
          id: 3,
          src:
            "../assets/images/slider-image/catamaran-motor/2.catamaran-m.jpeg",
          title: "Something"
        }
      ],
      // Add a variable to dynamically choose the image
      choosenSlide: 0, //just now defined for first image
      // To make the arrows work we should to declare the variale with defined value = null
      intervalObject: null
    };
  },
  // Now we can add the change after 3s each image
  created() {
    this.intervalObject = setInterval(() => {
      this.moveTheSlideRight();
    }, 5000);
  },
  // Add the logic to our slider
  methods: {
    // We can add the arrow methods in here:
    arrowLeft() {
      // First we need to clear interval when using the arrows
      clearInterval(this.intervalObject);
      // Now we can decrease the choosenSlide using our move slide method
      this.moveTheSlideLeft();
      // And now we should even start the automqt again
      this.intervalObject = setInterval(() => {
        this.moveTheSlideRight();
      }, 5000);
    },
    arrowRight() {
      clearInterval(this.intervalObject);
      this.moveTheSlideRight();
      this.intervalObject = setInterval(() => {
        this.moveTheSlideRight();
      }, 5000);
    },
    moveTheSlideLeft() {
      // we can use the variable in here to implement condition
      let slideIndex = this.choosenSlide;
      slideIndex--;
      // Implement condition whqt should be done if the slide will go to the end
      if (slideIndex < 0) {
        slideIndex = this.slides.length - 1;
      }
      this.choosenSlide = slideIndex;
    },
    moveTheSlideRight() {
      // we can use the variable in here to implement condition
      let slideIndex = this.choosenSlide;
      slideIndex++;
      // Implement condition whqt should be done if the slide will go to the end
      if (slideIndex >= this.slides.length) {
        slideIndex = 0;
      }
      this.choosenSlide = slideIndex;
    }
  }
};
</script>

<style lang="scss" scoped>
.slider__box {
  &__arrow--left,
  &__arrow--right {
    position: absolute;
    font-size: 60px;
    font-weight: bold;
    color: #77777780;
    top: 24vh;
    opacity: 0.3;
    transition: 1s;
  }
  &__arrow--left {
    left: 5px;
  }
  &__arrow--right {
    right: 5px;
  }
  &__arrow--left:hover,
  &__arrow--right:hover {
    cursor: pointer;
    opacity: 1;
  }
}
</style>