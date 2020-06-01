<template>
  <div class id="display-single-order">
    <div class="main-modal">
      <div v-for="order in orders" :key="order.id" class="main-modal__content">
        <router-link to="/ask-for-charter-form">
          <span class="main-modal__content__close-button">x</span>
        </router-link>
        <div class="main-modal__content__text">
          <p class="main-modal__content__text__display">
            Twoje zamówienie o numerze:
            "
            <span
              class="main-modal__content__text__display--number"
            >{{ order.id }}</span> " zostało pomyślnie zapisane w naszej bazie danych.
          </p>
          <div class="main-modal__content__order">
            <div class="main-modal__content__order__item">Imię: {{ order.name }}</div>
            <div class="main-modal__content__order__item">Nazwisko: {{ order.surname }}</div>
            <div
              class="main-modal__content__order__item"
            >Informacje dodatkowe: {{ order.description }}</div>
            <div class="main-modal__content__order__item">Typ Jachtu: {{ order.type }}</div>
            <div class="main-modal__content__order__item">
              Od:
              <span class="main-modal__content__order__item__date_from">{{ order.date_from }}</span>
            </div>
            <div class="main-modal__content__order__item">
              Do:
              <span class="main-modal__content__order__item__date_to">{{ order.date_to }}</span>
            </div>
            <div class="main-modal__content__order__item">Adres Email: {{ order.email }}</div>
            <div
              class="main-modal__content__order__item"
            >Rejon pływania: {{ order.country }} {{ order.country_extend }}</div>
            <div class="main-modal__content__order__item">Ilość Kabin: {{ order.cabins }}</div>
            <div class="main-modal__content__order__item">Ilość Gości: {{ order.guests }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "@/firebase";

export default {
  name: "DisplaySingleOrder",
  data() {
    return {
      orders: [],
      // orderNumber: "",
      name: "",
      surname: "",
      description: "",
      type: "",
      email: "",
      date_from: "",
      date_to: "",
      country: "",
      cabins: null,
      guests: null,
      country_extend: ""
    };
  },
  created() {
    let db = firebase.firestore();
    db.collection("Charter_Order")
      .orderBy("date_from")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.data());
          const data = {
            id: doc.id,
            name: doc.data().name,
            surname: doc.data().surname,
            description: doc.data().description,
            type: doc.data().type,
            email: doc.data().email,
            date_from: doc.data().date_from,
            date_to: doc.data().date_to,
            country: doc.data().country,
            cabins: doc.data().cabins,
            guests: doc.data().guests,
            country_extend: doc.data().country_extend
          };
          this.orders.push(data);
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

.main-modal {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #00000080;

  //   display: none;
  &__content {
    margin: 20px 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95%;
    padding: 10px;
    background-color: #eee;
    border-radius: 30px;
    box-shadow: 0 0 10px 2px #555;
    transition: all 0.8s;
    border-bottom: 1px double #333;
    @media #{$tablet-plus} {
      width: 70%;
    }
    @media #{$media-content} {
      width: 675px;
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
    }
    &__text {
      padding: 10px;
      &__display {
        font-size: 16px;
        font-family: monospace;
        font-weight: bold;
        width: 90%;
        &--number {
          text-decoration: underline wavy;
          color: #744d04;
        }
      }
    }
    &__order {
      padding: 10px;
      &__item {
        padding: 5px 0;
        font-size: 16px;
        font-family: monospace;
        line-height: 1.3em;
        &__date_from {
          color: rgb(4, 167, 4);
        }
        &__date_to {
          color: rgb(141, 3, 3);
        }
      }
    }
  }
}
</style>