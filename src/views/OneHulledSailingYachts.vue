<template>
  <div id="one-hulled-sailing-yachts">
    <MainMenu />
    <div class="banner__box">
      <div class="banner__box__image">
        <div class="banner__box__image__text">
          <p class="banner__box__image__text__title">Luksusowe jachty żaglowe</p>
        </div>
      </div>
    </div>
    <div class="main-content__box">
      <div class="main-content__box__inner">
        <!-- Left side -->
        <div class="main-content__box__inner__left">
          <div class="main-content__box__inner__left__title">
            <p
              class="main-content__box__inner__left__title__text"
            >Czarter jachtu żaglowego jednokadłubowego</p>
          </div>
          <div class="main-content__box__inner__left__content">
            <p
              class="main-content__box__inner__left__content__paragraph"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quasi, suscipit molestiae, a incidunt aliquam nihil, asperiores veritatis accusantium culpa nostrum odit cum quam impedit! Laboriosam tenetur laborum praesentium numquam tempora quidem consequuntur blanditiis illo dolor ratione esse labore veniam sit asperiores maxime dolores, quas porro incidunt id totam impedit.</p>
            <p
              class="main-content__box__inner__left__content__paragraph"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quasi, suscipit molestiae, a incidunt aliquam nihil, asperiores veritatis accusantium culpa nostrum odit cum quam impedit! Laboriosam tenetur laborum praesentium numquam tempora quidem consequuntur blanditiis illo dolor ratione esse labore veniam sit asperiores maxime dolores, quas porro incidunt id totam impedit.</p>
            <p
              class="main-content__box__inner__left__content__paragraph"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quasi, suscipit molestiae, a incidunt aliquam nihil, asperiores veritatis accusantium culpa nostrum odit cum quam impedit! Laboriosam tenetur laborum praesentium numquam tempora quidem consequuntur blanditiis illo dolor ratione esse labore veniam sit asperiores maxime dolores, quas porro incidunt id totam impedit.</p>
            <div class="main-content__box__inner__left__content__link">
              <a href class="main-content__box__inner__left__content__link--display"></a>
            </div>
            <p
              class="main-content__box__inner__left__content__paragraph"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quasi, suscipit molestiae, a incidunt aliquam nihil, asperiores veritatis accusantium culpa nostrum odit cum quam impedit! Laboriosam tenetur laborum praesentium numquam tempora quidem consequuntur blanditiis illo dolor ratione esse labore veniam sit asperiores maxime dolores, quas porro incidunt id totam impedit.</p>
            <p
              class="main-content__box__inner__left__content__paragraph"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quasi, suscipit molestiae, a incidunt aliquam nihil, asperiores veritatis accusantium culpa nostrum odit cum quam impedit! Laboriosam tenetur laborum praesentium numquam tempora quidem consequuntur blanditiis illo dolor ratione esse labore veniam sit asperiores maxime dolores, quas porro incidunt id totam impedit.</p>
            <p
              class="main-content__box__inner__left__content__paragraph"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quasi, suscipit molestiae, a incidunt aliquam nihil, asperiores veritatis accusantium culpa nostrum odit cum quam impedit! Laboriosam tenetur laborum praesentium numquam tempora quidem consequuntur blanditiis illo dolor ratione esse labore veniam sit asperiores maxime dolores, quas porro incidunt id totam impedit.</p>
          </div>
        </div>
        <!-- Right side -->
        <div class="main-content__box__inner__right"></div>
      </div>
    </div>
    <MainFooter />
  </div>
</template>

<script>
import MainMenu from "@/components/MainMenu";
import MainFooter from "@/components/MainFooter";

export default {
  name: "one-hulled-sailing-yachts",
  components: {
    MainMenu,
    MainFooter
  }
};
</script>

<style lang="scss">
// Media Query prepared for larger than 425
$mobile-plus: "only screen and (min-width : 425px)";
// Media Query for 768px plus
$tablet-plus: "only screen and (min-width : 768px)";

.banner__box {
  margin: 50px 0;
  width: 100%;
  height: 50vh;
  background-color: #00000080;
  &__image {
    width: 100%;
    height: 40vh;
    display: flex;
    background-image: url("../../public/images/slider-image/sailing/5.yacht-s.jpeg");
    height: 50vh;
    background-size: cover;
    background-position: center center;
    &__text {
      margin: 0 auto;
      display: flex;
      align-self: center;
      &__title {
        background-color: #00000080;
        text-align: center;
        border-radius: 20px;
        width: 300px;
        color: #ccc;
        font-size: 18px;
        padding: 5px;
        font-family: monospace;
        transition: all 0.8s;
        @media #{$mobile-plus} {
          width: 67vw;
          font-size: 4vw;
        }
        @media #{$tablet-plus} {
          width: 500px;
          font-size: 32px;
          padding: 8px;
        }
      }
    }
  }
}
</style>