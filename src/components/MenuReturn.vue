<template>
  <div class="container__return">
    <div class="container__return__submenu">
      <div class="container__return__submenu__text">
        <p class="container__return__submenu__text__display">{{ message }}</p>
      </div>
      <div class="container__return__submenu__link">
        <a
          :href="homepage"
          class="container__return__submenu__link__display"
          title="powrót do strony głównej"
        >&#8629; Powrót</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homepage: "/",
      message: ""
    };
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

.container__return {
  margin-top: 20px;
  &__submenu {
    margin: 20px 0;
    height: 80px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #ccc;
    &__text {
      font-size: 16px;
      font-weight: bold;
      font-family: monospace;
      transition: all 0.8s;
      @media #{$mobile-plus} {
        font-size: 18px;
      }
      @media #{$tablet-plus} {
        font-size: 22px;
      }
    }
    &__link {
      font-size: 0.9em;
      transition: all 0.8s;
      @media #{$mobile-plus} {
        font-size: 16px;
      }
      &__display {
        text-decoration: none;
        font-family: monospace;
        color: #111;
      }
    }
  }
}
</style>