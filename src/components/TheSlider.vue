<template>
  <!-- First bind the images to the slide component -->
  <div class="slider__box">
    <!-- Here we will add the arrows -->
    <div class="slider__box__arrow--left" @click="arrowLeft">&lt;</div>
    <Slide :slide="slides[choosenSlide]" />
    <div class="slider__box__arrow--right" @click="arrowRight">&gt;</div>
    <div class="slider__box__indicator-dots">
      <div v-for="slide in slides" :key="slide.id" class="dots" @click="indicatorDots(slide.id)" />
    </div>
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
          src: "images/slider-image/sailing/1.yacht-s.jpeg",
          title: "Jachty  żaglowe",
          description: "Jeśli potrzebujesz spokoju podczas żeglowania",
          source: "/one-hulled-sailing-yachts"
        },
        {
          id: 1,
          src: "images/slider-image/motor/1.motorboat.jpg",
          title: "Jachty motorowe",
          description: "Jeśli bardziej zależy Tobie na szybkości",
          source: "/one-hulled-motor-yachts"
        },
        {
          id: 2,
          src: "images/slider-image/catamaran-sailing/1.catamaran-s.jpeg",
          title: "Katamarany żaglowe",
          description: "Jeśli lubisz spokój i komfort",
          source: "/multi-hulled-sailing-yachts"
        },
        {
          id: 3,
          src: "images/slider-image/catamaran-motor/2.catamaran-m.jpeg",
          title: "Katamarany motorowe",
          description:
            "Jeśli chcesz się czuć jak w domu, a jednocześnie zwiedzać świat",
          source: "/multi-hulled-motor-yachts"
        }
      ],
      // active: "background-color = grey;",
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
    // Here we will add the method which will change the photos for indicator click
    indicatorDots(id) {
      // // Test
      // // Create an array with dots
      // let dots = [...document.querySelectorAll(".dots")];
      // console.log(dots[id]);
      // console.log(id);
      //  Assign the choosenSlide to the id of photo

      this.choosenSlide = id;
      // this.dots[this.choosenSlide].classList.toggle("active");
      // console.log(dots[this.choosenSlide]);

      // Clear the interval while chosing by indicators
      clearInterval(this.intervalObject);
      this.moveTheSlideRight();
      this.intervalObject = setInterval(() => {
        this.moveTheSlideRight();
      }, 5000);
    },
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
      // console.log(slideIndex);
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
  // border-bottom: 1px solid #000;
  // margin-top: 20px;
  width: 100%;
  background-color: #0000ff;
  height: 50vh;

  &__arrow--left,
  &__arrow--right {
    position: absolute;
    font-size: 60px;
    font-weight: bold;
    color: #77777780;
    top: 25vh;
    opacity: 0.3;
    transition: 1s;
    cursor: pointer;
  }
  &__arrow--left {
    left: 5px;
    &:hover {
      opacity: 1;
    }
  }
  &__arrow--right {
    right: 5px;
    &:hover {
      opacity: 1;
    }
  }
  &__indicator-dots {
    display: flex;
    justify-content: center;
    // align-content: flex-end;
    div {
      cursor: pointer;
      position: relative;
      bottom: 30px;
      margin: 0 10px;
      height: 15px;
      width: 15px;
      background-color: #0000ff;
      border-radius: 50%;
      &:hover {
        background-color: #666;
      }
    }
  }
}
// The class added to make the indicators show the slide is active
// .active {
//   background-color: #998511;
// }
</style>