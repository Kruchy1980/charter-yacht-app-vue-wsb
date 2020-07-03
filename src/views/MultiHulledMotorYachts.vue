<template>
  <div id="one-hulled-sailing-yachts">
    <MainMenu />
    <div class="banner__box">
      <div class="banner__box__image">
        <img src="/images/slider-image/catamaran-motor/2.catamaran-m.jpeg" alt />
        <div class="banner__box__image__text">
          <p class="banner__box__image__text__title">Luksusowe jachty motorowe wielokadłubowe</p>
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
            >Czarter jachtu motorowego wielokadłubowego</p>
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
              <a
                :href="charterForm"
                class="main-content__box__inner__left__content__link--display"
              >Zapytaj o czarter jachtu</a>
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
          <div class="main-content__box__inner__left__content__description">
            <div class="main-content__box__inner__left__content__description__inner">
              <nav class="main-content__box__inner__left__content__description__inner__nav">
                <div
                  class="main-content__box__inner__left__content__description__inner__nav__container"
                >
                  <!-- <div
                    class="main-content__box__inner__left__content__description__inner__nav__container__menu"
                  >-->
                  <!-- <div
                    class="main-content__box__inner__left__content__description__inner__nav__container__menu"
                  >-->
                  <p
                    class="main-content__box__inner__left__content__description__inner__nav__container__link"
                    href="#"
                  >Polska</p>
                  <p
                    @click="isDisplayed"
                    class="main-content__box__inner__left__content__description__inner__nav__container__link"
                    href="#"
                  >Europa</p>
                  <p
                    @click="isDisplayed1"
                    class="main-content__box__inner__left__content__description__inner__nav__container__link"
                    href="#"
                  >Świat</p>
                  <!-- </div> -->
                  <!-- </div> -->
                </div>
              </nav>
              <!-- </div> -->
            </div>
            <!-- Details about yachts -->
            <section class="container">
              <div class="container__box">
                <!-- First item -->
                <div class="container__box__item">
                  <div class="container__box__item__image">
                    <img src="/card-images/catamarans/motor/3.catamaran-m.jpeg" alt="Sailing Yacht" />
                  </div>
                  <div class="container__box__item__display">
                    <ul class="container__box__item__display__list">
                      <li class="container__box__item__display__list__item--type">
                        <h3>Typ Jachtu</h3>
                      </li>
                      <li class="container__box__item__display__list__item--place">
                        <p>Ilość kabin/gości: 4/8</p>
                      </li>
                      <li class="container__box__item__display__list__item--crew">
                        <p>Ilość załogi: 2</p>
                      </li>
                      <li class="container__box__item__display__list__item--price">
                        <p>Koszta</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- Second item -->
                <div class="container__box__item">
                  <div class="container__box__item__image">
                    <img src="/card-images/catamarans/motor/1.catamaran-m.jpeg" alt="Sailing Yacht" />
                  </div>
                  <div class="container__box__item__display">
                    <ul class="container__box__item__display__list">
                      <li class="container__box__item__display__list__item--type">
                        <h3>Typ Jachtu</h3>
                      </li>
                      <li class="container__box__item__display__list__item--place">
                        <p>Ilość kabin/gości: 4/8</p>
                      </li>
                      <li class="container__box__item__display__list__item--crew">
                        <p>Ilość załogi: 2</p>
                      </li>
                      <li class="container__box__item__display__list__item--price">
                        <p>Koszta</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section class="container" v-if="isDisplayed">
              <div class="container__box">
                <!-- First item -->
                <div class="container__box__item">
                  <div class="container__box__item__image">
                    <img src="/card-images/catamarans/motor/3.catamaran-m.jpeg" alt="Sailing Yacht" />
                  </div>
                  <div class="container__box__item__display">
                    <ul class="container__box__item__display__list">
                      <li class="container__box__item__display__list__item--type">
                        <h3>Typ Jachtu</h3>
                      </li>
                      <li class="container__box__item__display__list__item--place">
                        <p>Ilość kabin/gości: 4/8</p>
                      </li>
                      <li class="container__box__item__display__list__item--crew">
                        <p>Ilość załogi: 2</p>
                      </li>
                      <li class="container__box__item__display__list__item--price">
                        <p>Koszta</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- Second item -->
              </div>
            </section>
            <!-- <section class="container" v-if="isDisplayed1">
              <div class="container__box">

                <div class="container__box__item">
                  <div class="container__box__item__image">
                    <img src="/card-images/catamarans/motor/3.catamaran-m.jpeg" alt="Sailing Yacht" />
                  </div>
                  <div class="container__box__item__display">
                    <ul class="container__box__item__display__list">
                      <li class="container__box__item__display__list__item--type">
                        <h3>Typ Jachtu</h3>
                      </li>
                      <li class="container__box__item__display__list__item--place">
                        <p>Ilość kabin/gości: 4/8</p>
                      </li>
                      <li class="container__box__item__display__list__item--crew">
                        <p>Ilość załogi: 2</p>
                      </li>
                      <li class="container__box__item__display__list__item--price">
                        <p>Koszta</p>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </section>-->
          </div>
        </div>
        <!-- Right side -->
        <div class="main-content__box__inner__right">
          <CharterAsk />
        </div>
      </div>
    </div>
    <MainFooter />
  </div>
</template>

<script>
import MainMenu from "@/components/MainMenu";
import MainFooter from "@/components/MainFooter";
import CharterAsk from "@/components/CharterAsk";

export default {
  name: "OneHulledSailingYachts",
  components: {
    MainMenu,
    MainFooter,
    CharterAsk
  },
  data() {
    return {
      isDisplayed: false,
      isDisplayed1: false,
      charterForm: "/ask-for-charter-form"
    };
  },
  methods: {
    firstView() {
      this.isDisplayed = !this.isDisplayed;
    },
    secondView() {
      this.isDisplayed1 = this.isDisplayed1;
    }
  }
};
</script>

<style lang="scss">
// Media Query prepared for larger than 425
$mobile-plus: "only screen and (min-width : 425px)";
// Media Query for 768px plus
$tablet-plus: "only screen and (min-width : 768px)";
// Media Query - main-content larger
$media-content: "only screen and (min-width : 960px)";

.banner__box {
  margin: 50px 0;
  width: 100%;
  height: 50vh;
  background-color: #00000080;
  &__image {
    img {
      width: 100%;
      height: 40vh;
      display: flex;
      // background-image: url("/slider-image/sailing/5.yacht-s.jpeg");
      height: 50vh;
      background-size: cover;
      background-position: center center;
    }
    &__text {
      position: absolute;
      left: 50%;
      top: 25vh;
      transform: translateX(-50%);
      &__title {
        background-color: #00000080;
        text-align: center;
        border-radius: 20px;
        width: auto;
        color: #ccc;
        font-size: 18px;
        padding: 5px;
        font-family: monospace;
        transition: all 0.8s;
        @media #{$mobile-plus} {
          // width: 67vw;
          font-size: 4vw;
        }
        @media #{$tablet-plus} {
          // width: 500px;
          font-size: 32px;
          padding: 8px;
        }
      }
    }
  }
}
// Main content box
.main-content__box {
  max-width: 950px;
  margin: 0 auto;
  padding: 5px;
  &__inner {
    display: flex;
    flex-direction: column;
    align-content: center;
    @media #{$media-content} {
      flex-direction: row;
    }
    // left side
    &__left {
      margin: 30px auto;
      width: 90%;
      @media #{$media-content} {
        width: 60%;
      }
      &__title {
        margin: 30px 0;
        border-bottom: 2px solid #333;
        padding-bottom: 30px;
        &__text {
          font-weight: bold;
          font-size: 24px;
        }
      }
      &__content {
        padding: 15px 0;
        &__paragraph {
          margin: 10px 0;
        }
        &__link {
          margin: 30px 0;
          display: flex;
          justify-content: center;
          &--display {
            text-decoration: none;
            background-color: #a89003;
            color: #ddd;
            padding: 15px;
            border-radius: 20px;
            cursor: pointer;
          }
        }
        &__description {
          margin: 20px 0;
          border: 1px solid #ddd;
          &__inner {
            background-color: #fff;
            &__nav {
              // border: 1px solid #ddd;
              // padding: 20px 0;
              &__container {
                // background: yellow;
                &__link {
                  text-decoration: none;
                  padding: 20px;
                  border: 1px solid #ccc;
                  border-bottom: #fff;
                  border-right: #fff;
                  border-collapse: collapse;
                  color: #333;
                }
              }
            }
          }
        }
      }
    }
    &__right {
      width: 90%;
      margin: 0 auto;
      @media #{$media-content} {
        width: 30%;
      }
    }
    // Contqainer for description - detqails about yachts
    .container {
      &__box {
        max-width: 100%;
        margin: 0 auto;
        padding: 10px;
        &__item {
          border: 1px solid #ddd;
          margin: 20px auto;
          padding: 10px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          height: auto;
          max-width: 500px;
          border-radius: 20px;
          box-shadow: 0 0 10px 2px #ccc;
          transition: all 1s;
          @media #{$tablet-plus} {
            padding: 10px;
            flex-direction: row;
            justify-content: flex-start;
          }
          &__image {
            display: flex;
            width: 100%;
            justify-content: center;
            @media #{$tablet-plus} {
              width: 40%;
              justify-content: flex-start;
            }
            img {
              border-radius: 20px;
              width: 150px;
              height: 150px;
            }
          }
          &__display {
            width: 100%;
            display: flex;
            justify-content: center;
            @media #{$tablet-plus} {
              width: 60%;
              display: flex;
              justify-content: flex-start;
            }
            &__list {
              display: flex;
              list-style: none;
              flex-direction: column;
              justify-content: space-evenly;
              &__item--type {
                margin-top: 10px;
                font-size: 24px;
              }
              &__item--place,
              &__item--crew {
                margin-top: 15px;
                padding-bottom: 10px;
                font-size: 1em;
                border-bottom: 1px solid #ccc;
              }
              &__item--price {
                margin-top: 15px;
                padding-bottom: 10px;
                font-size: 1em;
              }
            }
          }
        }
      }
    }
  }
}
</style>