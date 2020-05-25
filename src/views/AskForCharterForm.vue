<template>
  <div id="ask-for-charter-form">
    <MainMenu />
    <div class="container">
      <div class="container__submenu">
        <div class="container__submenu__text">
          <p class="container__submenu__text__display">Zapytaj o szczegóły czarteru</p>
        </div>
        <div class="container__submenu__link">
          <a
            :href="homepage"
            class="container__submenu__link__display"
            title="powrót do strony głównej"
          >&#8629; Powrót</a>
        </div>
      </div>
      <form action class="container__main-form">
        <div class="container__main-form__items">
          <div class="container__main-form__items__item">
            <label class="container__main-form__items__item__label">
              Kraj:
              <select
                class="container__main-form__items__item__label__content"
                v-model="selected"
              >
                <option value disabled>Wybierz kraj w którym chcesz wyczarterować Jacht</option>
                <option value>Polska</option>
                <option disabled value>W przyszłości będą dodane inne rejony</option>
              </select>
            </label>
          </div>
          <div class="container__main-form__items__item">
            <label for class="container__main-form__items__item__label">
              Dowolny (jesli nie ma na liście):
              <input
                type="text"
                class="container__main-form__items__item__label__content"
              />
            </label>
          </div>
          <div class="container__main-form__items__item">
            <label for class="container__main-form__items__item__label">
              Termin [od]:
              <span class="container__main-form__items__item__label--must">*</span>
              <input type="date" class="container__main-form__items__item__label__content" required />
            </label>
          </div>
          <div class="container__main-form__items__item">
            <label for class="container__main-form__items__item__label">
              Termin [do]:
              <input
                type="date"
                class="container__main-form__items__item__label__content"
              />
            </label>
          </div>
          <div class="container__main-form__items__item">
            <label class="container__main-form__items__item__label">
              Typ jachtu:
              <select
                class="container__main-form__items__item__label__content"
                v-model="selected"
                required
              >
                <option value>---</option>
                <option value>Jednokadłubowy żaglowy</option>
                <option value>Jednokadłubowy motorowy</option>
                <option value>Wielokadłubowy żaglowy</option>
                <option value>Wielokadłubowy motorowy</option>
              </select>
            </label>
          </div>
          <div class="container__main-form__items__item">
            <label for class="container__main-form__items__item__label">
              Liczba kabin:
              <input
                type="number"
                class="container__main-form__items__item__label__content"
              />
            </label>
          </div>
          <div class="container__main-form__items__item">
            <label for class="container__main-form__items__item__label">
              Liczba gości:
              <input
                type="number"
                class="container__main-form__items__item__label__content"
              />
            </label>
          </div>
          <div class="container__main-form__items__item">
            <label for class="container__main-form__items__item__label">
              Uwagi dodatkowe:
              <textarea
                class="container__main-form__items__item__label__content"
                rows="10"
              ></textarea>
            </label>
          </div>
          <div class="container__main-form__items__item">
            <label for class="container__main-form__items__item__label">
              Imię:
              <span class="container__main-form__items__item__label--must">*</span>
              <input type="text" class="container__main-form__items__item__label__content" />
            </label>
          </div>
          <div class="container__main-form__items__item">
            <label for class="container__main-form__items__item__label">
              Nazwisko:
              <span class="container__main-form__items__item__label--must">*</span>
              <input type="text" class="container__main-form__items__item__label__content" />
            </label>
          </div>
          <div class="container__main-form__items__item">
            <label for class="container__main-form__items__item__label">
              Adres Email:
              <span class="container__main-form__items__item__label--must">*</span>
              <input
                type="email"
                class="container__main-form__items__item__label__content"
                required
              />
            </label>
          </div>
          <div class="container__main-form__items__item">
            <label for class="container__main-form__items__item__label">
              Numer telefonu:
              <span class="container__main-form__items__item__label--must">*</span>
              <input type="tel" class="container__main-form__items__item__label__content" required />
            </label>
          </div>
        </div>
        <button type="submit" class="container__main-form__submit">Wyślij</button>
      </form>
    </div>
    <MainFooter />
  </div>
</template>

<script>
import MainMenu from "@/components/MainMenu";
import MainFooter from "@/components/MainFooter";
export default {
  name: "AskForCharterForm",
  components: {
    MainMenu,
    MainFooter
  },
  data() {
    return {
      homepage: "/",
      selected: ""
    };
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

.container {
  margin-top: 50px;
  padding: 20px 0;
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
  &__main-form {
    margin: 20px 0;
    &__submit {
      padding: 10px;
      margin: 0 20px;
      font-size: 18px;
      border: none;
      border-radius: 20px;
      background-color: #a89003;
      color: #ddd;
    }
    &__items {
      padding: 20px;
      &__item {
        &__label {
          display: block;
          width: 95%;
          padding: 10px 0;
          &--must {
            color: #ff0000;
          }
          &__content {
            background-color: #eee;
            margin-top: 5px;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 90%;
            font-size: 16px;
            padding: 5px;
            border-radius: 10px;
            outline-style: none;
          }
        }
      }
    }
  }
}
</style>