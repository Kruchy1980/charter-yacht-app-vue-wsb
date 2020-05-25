<template>
  <div class="main-content__box__inner__right">
    <div class="main-content__box__inner__right__content">
      <a href class="main-content__box__inner__right__content__link">Zapytaj o czarter</a>
    </div>
    <!-- Charters -->
    <div class="main-content__box__inner__right__content__charter">
      <h4 class="main-content__box__inner__right__content__charter__title">Czartery</h4>
    </div>
    <ul class="main-content__box__inner__right__content__charter__list">
      <li class="main-content__box__inner__right__content__charter__list__item">
        <a
          :href="oneHulledSailing"
          class="main-content__box__inner__right__content__charter__list__item__link"
        >Jachty żaglowe - jednokadłubowe</a>
      </li>
      <li class="main-content__box__inner__right__content__charter__list__item">
        <a
          :href="oneHulledMotor"
          class="main-content__box__inner__right__content__charter__list__item__link"
        >Jachty motorowe - jednokadłubowe</a>
      </li>
      <li class="main-content__box__inner__right__content__charter__list__item">
        <a
          :href="multiHulledSailing"
          class="main-content__box__inner__right__content__charter__list__item__link"
        >Jachty żaglowe - wielookadłubowe</a>
      </li>
      <li class="main-content__box__inner__right__content__charter__list__item">
        <a
          :href="multiHulledMotor"
          class="main-content__box__inner__right__content__charter__list__item__link"
        >Jachty motorowe - wielokadłubowe</a>
      </li>
    </ul>
    <!-- Destinations -->
    <div class="main-content__box__inner__right__content__destination">
      <h4 class="main-content__box__inner__right__content__destination__title">Destynacje</h4>
    </div>
    <ul class="main-content__box__inner__right__content__destination__list">
      <li class="main-content__box__inner__right__content__destination__list__item">
        <a
          href
          class="main-content__box__inner__right__content__destination__list__item__link"
        >Polska</a>
      </li>
      <li class="main-content__box__inner__right__content__destination__list__item">
        <a
          href
          class="main-content__box__inner__right__content__destination__list__item__link"
        >Europa</a>
      </li>
      <li class="main-content__box__inner__right__content__destination__list__item">
        <a
          href
          class="main-content__box__inner__right__content__destination__list__item__link"
        >Świat</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oneHulledSailing: "/one-hulled-sailing-yachts",
      multiHulledSailing: "/multi-hulled-sailing-yachts",
      oneHulledMotor: "/one-hulled-motor-yachts",
      multiHulledMotor: "/multi-hulled-motor-yachts"
    };
  }
};
</script>

<style lang="scss" scoped>
// Display for more than 960px
$media-content: "only screen and (min-width : 960px)";

.main-content__box__inner__right {
  margin-top: 30px;
  width: 100%;
  margin: 0 auto;
  @media #{$media-content} {
    border-left: 1px solid #eee;
    padding-left: 4%;
    width: 100%;
  }
  &__content {
    padding: 15px 0;
    &__link {
      margin: 45px 0;
      width: 200px;
      display: flex;
      justify-content: center;
      text-decoration: none;
      background-color: #a89003;
      color: #ddd;
      padding: 15px;
      border-radius: 20px;
      cursor: pointer;
    }
    &__charter,
    &__destination {
      margin: 20px 0;
      border-bottom: 2px solid #333;
      padding-bottom: 30px;
      &__title {
        font-weight: bold;
        font-size: 24px;
      }
      &__list {
        list-style: none;
        // padding-top: 10px;
        &__item {
          margin: 10px 0;
          padding-bottom: 10px;
          border-bottom: 1px solid #777;
          &__link {
            text-decoration: none;
            color: #333;
          }
        }
        &__item:last-child {
          border-bottom: none;
        }
      }
    }
  }
}
</style>