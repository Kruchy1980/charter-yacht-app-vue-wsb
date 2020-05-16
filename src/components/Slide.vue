<template>
  <!-- <div class="slide__box"> -->
  <!-- We can add the transition of our images to appeare using vue tag  where name is a style of transition and mode shows us the mode of fading-->
  <transition-group class="slide__box" name="slide-fade" mode="out-in" tag="div">
    <!-- And add here displaying of slide -->
    <!-- The slide id is: {{ slide.id }} with source of: {{ slide.src }} -->
    <div :key="slide.id" class="slide__box__image" :style="setTheSlide">
      <div class="slide__box__text">
        <!-- Add the title as well -->
        <div class="slide__box__title">{{ slide.title }}</div>
        <!-- Add The desdription -->
        <div class="slide__box__description">{{ slide.description }}</div>
      </div>
    </div>
  </transition-group>
  <!-- </div> -->
</template>

<script>
export default {
  // Here we are adding props - oassed from TheSlider.vue component where we have binded the slide as :slide="slides[0]" with all of the properties of a slide
  props: {
    slide: {
      type: Object,
      required: true
    }
  },
  // Here we can add the
  computed: {
    setTheSlide() {
      return {
        backgroundImage: `url(${this.slide.src})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.slide__box {
  width: 100%;
  height: 50vh;
  // overflow: hidden;
  &__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    // flex-wrap: wrap;
    // height: 300px;
    // width: 300px;
    // border: 1px solid #fff;
    // background-color: #eeeeee80;
  }
  &__image {
    // just for check
    // background-image: url("../assets/images/slider-image/sailing/4.yacht-s.jpeg");
    // height: 100%;
    display: flex;
    justify-content: center;
    flex-flow: nowrap;
    height: 50vh;
    width: 100%;
    // margin: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  &__title {
    margin: 0 auto;
    display: inline-block;
    background-color: #eeeeee80;
    margin-top: 60px;
    padding: 10px;
    height: 2em;
    width: 300px;
    // border: 2px solid #0000ff;
    box-shadow: 0 0 8px 0px #0000ff;
    border-radius: 10px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #1e56ce;
    &:hover {
      background-color: #eeeeee;
      cursor: pointer;
    }
  }
  &__description {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #eeeeee80;
    margin-top: 20px;
    padding: 10px;
    // height: 2em;
    // width: 300px;
    // border: 2px solid #0000ff;
    border-radius: 10px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #1e56ce;
  }
}

// Animation
.slide-fade-enter-active {
  animation-name: fadeEnter;
  animation-iteration-count: 1;
  position: absolute;
  transition: all 0.5s ease-in;
}
.slide-fade-leave-active {
  animation-name: fadeLeave;
  animation-iteration-count: 1;
  position: absolute;
  // transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  transition: all 0.8s;
}

.slide-fade-enter {
  transform: translateX(100%);
}
.slide-fade-leave-to {
  transform: translateX(-99%);
  opacity: 0;
}

@keyframes fadeEnter {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeLeave {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>