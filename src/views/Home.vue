<template>
  <div id="yacht-charter-app">
    <!-- Tu miejsce na navbar -->
    <MainMenu />
    <!-- Tutaj już walnięty slider  -->
    <TheSlider />
    <!-- Kafelki -->
    <div class="main__box">
      <div class="main__box__tile main__box__tile__yachts" data-title="Jachty do wyczarterowania">
        <p>1234567</p>
      </div>
      <div
        class="main__box__tile main__box__tile__skippers"
        data-title="Skiperzy do wynajęcia"
      >1234567</div>
      <div
        class="main__box__tile main__box__tile__chartetrers"
        data-title="Zarejestrowani czarterujący"
      >1234567</div>
    </div>
    <!-- Kartki z opisem drobnym -->
    <div class="main-card__box">
      <div v-for="(card, index) in cards" :key="index" class="card__box">
        <div class="card__box__description">
          <div class="card__box__description__image">
            <img :src="`${card.src}`" :alt="`${card.title}`">
          </div>
          <div class="card__box__description__inner">
            <h3 class="card__box__description__inner__title">{{ card.title }}</h3>
            <p class="card__box__description__inner__text">{{ card.text }}</p>
          </div>
        </div>
        <div class="card__box__button">
          <button class="card__box__button__show">Więcej</button>
        </div>
      </div>
    </div>
    <MainFooter />
  </div>
</template>

<script>
import TheSlider from "@/components/TheSlider";
import MainMenu from "@/components/MainMenu";
import MainFooter from "@/components/MainFooter";
export default {
  name: "App",
  components: { TheSlider, MainMenu, MainFooter },
  data() {
    return {
      cards: [
        {
          id: 0,
          src: "card-images/one-hulled/sailing/1.sailing-yacht-s.jpeg",
          title: "Jachty żaglowe - jednokadłubowe",
          text:
            "Jeśli intresuje Ciebie dobre samopoczucie i komfort sprzyjające żeglowaniu, a jednocześnie nie lubisz siedzieć w miejscu, to ten rodzaj czarteru zapewni Tobie wspaniale spędzony czas."
        },
        {
          id: 1,
          src: "card-images/one-hulled/motor/1.motorboat-m.jpeg",
          title: "Jachty motorowe - jednokadłubowe",
          text:
            "Jeśli intresuje Ciebie dobre samopoczucie i komfort sprzyjające żeglowaniu, a jednocześnie nie lubisz siedzieć w miejscu, to ten rodzaj czarteru zapewni Tobie wspaniale spędzony czas."
        },
        {
          id: 2,
          src: "card-images/catamarans/sailing/1.catamaran-s.jpeg",
          title: "Jachty żaglowe - wielokadłubowe",
          text:
            "Jeśli intresuje Ciebie dobre samopoczucie i komfort sprzyjające żeglowaniu, a jednocześnie nie lubisz siedzieć w miejscu, to ten rodzaj czarteru zapewni Tobie wspaniale spędzony czas."
        },
        {
          id: 3,
          src: "card-images/catamarans/motor/1.catamaran-m.jpeg",
          title: "Jachty motorowe - wielokadłubowe",
          text:
            "Jeśli intresuje Ciebie dobre samopoczucie i komfort sprzyjające żeglowaniu, a jednocześnie nie lubisz siedzieć w miejscu, to ten rodzaj czarteru zapewni Tobie wspaniale spędzony czas."
        }
      ]
    };
  }
};
</script>

<style  lang="scss">
// Media Q
$mobile: "only screen and (max-width : 425px)";
/* All elements */
// *,
// *::after,
// *::before {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }
/* Tiles styles */
.main__box {
  min-width: 300px;
  max-width: 800px;
  margin: 30px auto;
  // border: 1px solid #000;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  flex-grow: 1;
  &__tile {
    display: flex;
    min-width: 75px;
    height: 70px;
    justify-content: center;
    align-items: center;
    margin: 20px;
    border: 5px groove;
    padding: 20px;
    font-weight: bold;
    &__yachts {
      border-color: #00ff80;
      color: #068a06;
      &[data-title]:hover:after {
        background-color: #ddd;
        color: #068a06;
      }
    }
    &__skippers {
      border-color: #0000ff80;
      color: #0000ff;
      &[data-title]:hover:after {
        background-color: #ddd;
        color: #0000ff;
      }
    }
    &__chartetrers {
      border-color: #cfab0780;
      color: #cfab07;
      &[data-title]:hover:after {
        background-color: #ddd;
        color: #cfab07;
      }
    }
    &[data-title] {
      position: relative;
    }
    &[data-title]:hover:after {
      content: attr(data-title);
      position: absolute;
      top: -35px;
      padding: 4px;
      // color: #222;
      white-space: nowrap;
      // background-color: #0000ff;
      // color: #ddd;
      border: 1px groove #777;
      border-radius: 5px;
      opacity: 0;
      display: none;
    }
    &[data-title]:hover:after {
      opacity: 1;
      transition: all 0.5s ease;
      display: block;
    }
  }
}
// Separate cards of our yachts informations
.main-card__box {
  max-width: 1100px;
  min-width: 300px;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  .card__box {
    // margin: 0 auto;
    width: 510px;
    min-width: 280px;
    box-shadow: 0 0 10px 2px #0000ff;
    border-radius: 20px;
    margin: 20px;
    &__description {
      display: flex;
      @media #{$mobile} {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      &__image {
        padding: 10px;
        img {
          width: 100px;
          min-width: 50px;
          height: 100px;
          min-height: 50px;
        }
      }
      &__inner {
        width: 70%;
        &__title {
          margin: 8px 0;
          font-size: 1.3em;
        }
        // &__text {
        // }
      }
    }
    &__button {
      display: flex;
      justify-content: flex-end;
      // border-radius: 10px;
      padding: 15px;
      cursor: pointer;
      &__show {
        cursor: pointer;
        padding: 5px;
        background-color: #b9820a;
        font-weight: bold;
        font-size: 1.2em;
        color: #fff;
        border: none;
        border-radius: 5px;
      }
    }
  }
}
</style>
