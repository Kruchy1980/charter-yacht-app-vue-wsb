<template>
  <!-- <div class="slide__box"> -->
  <!-- We can add the transition of our images to appeare using vue tag  where name is a style of transition and mode shows us the mode of fading-->
  <transition-group class="slide__box" name="slide-fade" mode="out-in" tag="div">
    <!-- And add here displaying of slide -->
    <!-- The slide id is: {{ slide.id }} with source of: {{ slide.src }} -->
    <div :key="slide.id" class="slide__box__image" :style="setTheSlide">
      <div class="slide__box__text">
        <!-- Add the title as well -->
        <a :href="`${slide.source}`" class="slide__box__title">{{ slide.title }}</a>
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
// Media Query prepared for larger than 425
$mobile-plus: "only screen and (min-width : 425px)";
// Media Query for 768px plus
$tablet-plus: "only screen and (min-width : 768px)";
// Media Query - main-content larger
$media-content: "only screen and (min-width : 960px)";

.slide__box {
  width: 100%;
  height: 50vh;
  &__text {
    font-family: monospace;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
  }
  &__image {
    display: flex;
    justify-content: center;
    flex-flow: nowrap;
    height: 50vh;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  &__title {
    margin: 0 auto;
    display: flex;
    background-color: #00000080;
    margin-top: 60px;
    padding: 10px;
    height: auto;
    width: auto;
    justify-content: center;
    align-content: center;
    box-shadow: 0 0 8px 0px #000;
    border-radius: 10px;
    text-align: center;
    text-decoration: none;
    font-size: 24px;
    color: #eee;
    @media #{$mobile-plus} {
      font-size: 4.5vw;
    }
    @media #{$tablet-plus} {
      font-size: 32px;
      padding: 8px;
    }
    &:hover {
      background-color: #000000cc;
      cursor: pointer;
    }
  }
  &__description {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #00000080;
    margin-top: 20px;
    padding: 10px;
    width: auto;
    border-radius: 10px;
    text-align: center;
    font-size: 14px;
    color: #eee;
    @media #{$mobile-plus} {
      font-size: 3.5vw;
    }
    @media #{$tablet-plus} {
      font-size: 24px;
      padding: 8px;
    }
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