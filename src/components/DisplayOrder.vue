<template>
  <div class id="display-order">
    <div class="main-modal">
      <div class="main-modal__content">
        <a class="main-modal__content__close-button" to="backToHome">x</a>
        <div class="main-modal__content__text">
          <p class="main-modal__content__text__display">
            Twoje zamówienie o numerze:
            <span
              class="main-modal__content__text__display--number"
            >{{ orderNumber }}</span> zostało pomyślnie zapisane w naszej bazie danych.
          </p>
        </div>
        <div class="main-modal__content__order">
          <div class="main-modal__content__order__item">Imię: {{ name }}</div>
          <div class="main-modal__content__order__item">Nazwisko: {{ surname }}</div>
          <div class="main-modal__content__order__item">Informacje dodatkowe: {{ description }}</div>
          <div class="main-modal__content__order__item">Typ Jachtu: {{ type }}</div>
          <div class="main-modal__content__order__item">
            Od:
            <span class="main-modal__content__order__item__date_from">{{ date_from }}</span>
          </div>
          <div class="main-modal__content__order__item">
            Do:
            <span class="main-modal__content__order__item__date_to">{{ date_to }}</span>
          </div>
          <div class="main-modal__content__order__item">Adres Email: {{ email }}</div>
          <div class="main-modal__content__order__item">Rejon pływania: {{ country }}</div>
          <div class="main-modal__content__order__item">Ilość Kabin: {{ cabins }}</div>
          <div class="main-modal__content__order__item">Ilość Gości: {{ guests }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DisplayOrder",
  data() {
    return {
      // Powrót do strony domowej
      backToHome: "/",
      orderNumber: "Na teraz po prostu numer",
      name: "Olaf",
      surname: "Gniewny",
      description: "Cokolwiek dopisałem bez skippera",
      type: "Tango-730",
      date_from: "22/05/2020",
      date_to: "23/06/2020",
      country: "Polska",
      cabins: 4,
      guests: 8
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

.main-modal {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #00000080;
  //   display: none;
  &__content {
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
      box-shadow: 2px 2px 5px 2px #aaa;
      //   transform: translate(2px, 2px);
    }
    &__text {
      padding: 10px;
      &__display {
        font-size: 16px;
        font-family: monospace;
        font-weight: bold;
        width: 90%;
        &--number {
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