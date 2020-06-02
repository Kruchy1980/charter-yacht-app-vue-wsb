<template>
  <div class="added-yacht">
    <div class="main-modal__box">
      <div v-for="yacht in yachts" :key="yacht.id" class="main-modal__box__content">
        <router-link to="/">
          <span class="main-modal__box__content__close-button">x</span>
        </router-link>
        <div class="main-modal__box__content__text">
          <p class="main-modal__box__content__text__display">
            Twój jacht został zarejestrowany w naszej bazie danych pod numerem identyfikacyjnym:
            "
            <span
              class="main-modal__box__content__text__display--number"
            >{{ yacht.id }}</span> ".
          </p>
          <!-- Tutaj główny display dodanego jachtu -->
          <div class="main-modal__box__content__yacht">
            <div class="main-modal__box__content__yacht__item">
              <span class="main-modal__box__content__yacht__item--name">Imię kapitana Jachtu:</span>
              {{ yacht.skippers_name }}
            </div>
            <div class="main-modal__box__content__yacht__item">
              <span class="main-modal__box__content__yacht__item--name">Typ Jachtu:</span>
              {{ yacht.yacht_type }}
            </div>
            <div class="main-modal__box__content__yacht__item">
              <span class="main-modal__box__content__yacht__item--name">Ilość Kabin:</span>
              {{ yacht.cabins }}
            </div>
            <div class="main-modal__box__content__yacht__item">
              <span class="main-modal__box__content__yacht__item--name">Maksymalna liczba gości:</span>
              {{ yacht.guests }}
            </div>
            <div class="main-modal__box__content__yacht__item">
              <span
                class="main-modal__box__content__yacht__item--name"
              >Koszta czarteru w [PLN] na tydzień:</span>
              {{ yacht.price }} PLN
            </div>
            <div class="main-modal__box__content__yacht__item">
              <span class="main-modal__box__content__yacht__item--name">Informacje dodatkowe:</span>
              {{ yacht.extended_info }}
            </div>
            <div class="main-modal__box__content__yacht__item">
              <img :src="yacht.image_url" :alt="yacht.yacht_type" :title="yacht.yacht_type" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
// https://firebasestorage.googleapis.com/v0/b/yachtscharters-ddb15.appspot.com/o/yachts%2FIMG_20170509_192731.jpg?alt=media&token=12127e33-2362-45ec-b4fd-491b93a3e422
<script>
import firebase from "@/firebase";
export default {
  name: "added-yacht",
  data() {
    return {
      // Deklarowanie pustej tablicy z jachtami
      yachts: [],
      // Deklarowanie id jachtu
      //   yacht: null,
      // Deklarowanie zmiennych danego jachtu
      skippers_name: "",
      yacht_type: "",
      cabins: null,
      guests: null,
      price: null,
      extended_info: "",
      image_url: ""
    };
  },
  created() {
    let db = firebase.firestore();
    db.collection("New_Yacht")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // console.log(doc.data());
          // console.log(doc.data().image_url);
          const data = {
            id: doc.id,
            skippers_name: doc.data().skippers_name,
            yacht_type: doc.data().yacht_type,
            cabins: doc.data().cabins,
            guests: doc.data().guests,
            price: doc.data().price,
            extended_info: doc.data().extended_info,
            image_url: doc.data().image_url
          };
          console.log(this.yachts[id].data);
          // this.yachts[id].push(data);
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

.main-modal__box {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #00000080;
  &__content {
    // margin: 400px 0;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #eee;
    border-radius: 20px;
    width: 300px;
    box-shadow: 0 0 10px 3px #ccc;
    transition: all 1s;
    @media #{$mobile-plus} {
      width: 80%;
    }
    @media #{$tablet-plus} {
      width: 75%;
    }
    @media #{$media-content} {
      width: 720px;
    }
    &__close-button {
      position: absolute;
      right: 10px;
      top: 10px;
      background-color: #ff0000;
      padding: 5px 10px;
      border-radius: 50%;
      cursor: pointer;
      text-decoration: none;
      color: #fff;
      box-shadow: 2px 2px 5px 2px #aaa;
      //   Potem może uda się dorobić na kliknięcie zmiana pozycji
      //   &:enabled {
      //     transform: translate(2px, 2px);
      //   }
    }
    &__text {
      width: 90%;
      padding: 10px;
      transition: all 1s;
      &__display {
        margin: 30px 0 20px 0;
        font-family: monospace;
        font-weight: bold;
        font-size: 14px;
        @media #{$mobile-plus} {
          font-size: 16px;
        }
        @media #{$tablet-plus} {
          font-size: 18px;
        }
        &--number {
          text-decoration: underline wavy;
          color: #744d04;
        }
      }
    }
    &__yacht {
      transition: all 1s;
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
        img {
          display: block;
          margin: 20px auto;
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
    }
  }
}
</style>