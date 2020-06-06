<template>
  <div class="list-of-added-yachts">
    <MainMenu />
    <div class="container__return">
      <div class="container__return__submenu">
        <div class="container__return__submenu__text">
          <p class="container__return__submenu__text__display">Wszystkie jachty z naszej bazy danych</p>
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
    <div class="box__inner">
      <div v-for="yacht in yachts" :key="yacht.id" class="box__inner__content">
        <div class="box__inner__content__text">
          <p class="box__inner__content__text__display">Jacht o numerze identyfikacyjnym:</p>
          <p class="box__inner__content__text__display__inner">
            <span class="box__inner__content__text__display--number">" {{ yacht.id }} "</span>.
          </p>
          <!-- <div class="box__inner__content__yacht__item"> -->
          <div class="box__inner__content__yacht__inner">
            <img :src="yacht.image_url" :alt="yacht.yacht_type" :title="yacht.yacht_type">
          </div>
          <!-- </div> -->
          <!-- Tutaj główny display dodanego jachtu -->
          <div class="box__inner__content__yacht">
            <div class="box__inner__content__yacht__item">
              <span class="box__inner__content__yacht__item--name">Imię kapitana Jachtu:</span>
              {{ yacht.skippers_name }}
            </div>
            <div class="box__inner__content__yacht__item">
              <span class="box__inner__content__yacht__item--name">Typ Jachtu:</span>
              {{ yacht.yacht_type }}
            </div>
            <div class="box__inner__content__yacht__item">
              <span class="box__inner__content__yacht__item--name">Ilość Kabin:</span>
              {{ yacht.cabins }}
            </div>
            <div class="box__inner__content__yacht__item">
              <span class="box__inner__content__yacht__item--name">Maksymalna liczba gości:</span>
              {{ yacht.guests }}
            </div>
            <div class="box__inner__content__yacht__item">
              <span
                class="box__inner__content__yacht__item--name"
              >Koszta czarteru w [PLN] na tydzień:</span>
              {{ yacht.price }} PLN
            </div>
            <div class="box__inner__content__yacht__item">
              <span class="box__inner__content__yacht__item--name">Informacje dodatkowe:</span>
              {{ yacht.extended_info }}
            </div>
            <div class="box__inner__content__yacht__buttons">
              <button class="box__inner__content__yacht__buttons--edit">Edytuj</button>
              <button class="box__inner__content__yacht__buttons--delete">Kasuj</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MainFooter />
  </div>
</template>

<script>
import MainMenu from "./MainMenu";
import MainFooter from "./MainFooter";
import firebase from "@/firebase";
export default {
  name: "ListOfAddedYachts",
  components: {
    MainMenu,
    MainFooter
  },
  data() {
    return {
      homepage: "/",
      // Deklarowanie pustej tablicy z jachtami
      yachts: [],
      // Deklarowanie id jachtu z firebase'a
      // id: "",
      // Deklarowanie zmiennych danego jachtu
      yacht_id: "",
      skippers_name: "",
      yacht_type: "",
      cabins: null,
      guests: null,
      price: null,
      extended_info: "",
      image_url: "",
      filterData: ""
    };
  },
  created() {
    let db = firebase.firestore();
    db.collection("New_Yacht")
      // .orderBy("skippers_name")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.data());
          console.log(doc.data().image_url);
          const data = {
            id: doc.id,
            yacht_id: doc.data().yacht_id,
            skippers_name: doc.data().skippers_name,
            yacht_type: doc.data().yacht_type,
            cabins: doc.data().cabins,
            guests: doc.data().guests,
            price: doc.data().price,
            extended_info: doc.data().extended_info,
            image_url: doc.data().image_url
          };
          // console.log(data);
          // // console.log(data.id);
          // // console.log(data.skippers_name);
          // // console.log(data.yacht_id);
          // // console.log(data.image_url);
          this.yachts.push(data);
        });
      });
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
  margin-top: 60px;
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
        cursor: pointer;
        text-decoration: none;
        font-family: monospace;
        color: #111;
      }
    }
  }
}

.box {
  &__inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;

    // @media #{$tablet-plus} {
    //   flex-direction: row;
    //   // align-items: center;
    //   justify-content: center;
    // }
    &__content {
      // width: 360px;
      margin: 20px;
      height: 670px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      height: 654px;
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      background-color: #eee;
      border-radius: 30px;
      box-shadow: 0 0 10px 2px #555;
      transition: all 0.8s;
      border-bottom: 1px double #333;
      @media #{$mobile-plus} {
        width: 360px;
      }

      &__text {
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 640px;
        &__display {
          text-align: center;
          margin-top: 30px;
          font-family: monospace;
          font-weight: bold;
          font-size: 14px;
          @media #{$mobile-plus} {
            font-size: 16px;
          }
          @media #{$tablet-plus} {
            font-size: 18px;
          }
          &__inner {
            margin: 10px 0 20px 0;
            text-align: center;
          }
          &--number {
            text-decoration: underline wavy;
            color: #744d04;
          }
        }
      }
      &__yacht {
        transition: all 1s;
        height: 420px;
        &__item {
          margin: 10px 0;
          font-family: monospace;
          font-size: 14px;
          @media #{$mobile-plus} {
            font-size: 16px;
          }
          @media #{$tablet-plus} {
            font-size: 18px;
          }
          &--name {
            font-weight: bold;
          }
          // &__inner {
          //   margin: 0;
          //   img {
          //     display: block;
          //     margin: auto;
          //     width: 100px;
          //     height: 100px;
          //     border-radius: 50%;
          //     transition: all 0.8s;
          //     @media #{$media-content} {
          //       width: 150px;
          //       height: 150px;
          //     }
          //   }
          // }
        }
        &__inner {
          margin: 0;
          img {
            display: block;
            margin: auto;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            transition: all 0.8s;
            @media #{$media-content} {
              width: 150px;
              height: 150px;
            }
          }
        }
        &__buttons {
          position: relative;
          bottom: 0;
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          &--edit {
            // display: block;
            text-align: center;
            cursor: pointer;
            padding: 5px 8px;
            background-color: #00ff00;
            color: #eee;
            border: none;
            border-radius: 20px;
            outline-style: none;
            font-weight: bold;
            font-size: 16px;
            box-shadow: 0 0 5px 2px #027c02;
          }
          &--delete {
            // position: relative;
            // bottom: 10px;
            // right: 10px;
            text-align: center;
            cursor: pointer;
            padding: 5px 8px;
            background-color: #8b0303;
            color: #eee;
            border: none;
            border-radius: 20px;
            outline-style: none;
            font-weight: bold;
            font-size: 16px;
            box-shadow: 0 0 5px 2px #3d0101;
          }
        }
      }
    }
  }
}
</style>