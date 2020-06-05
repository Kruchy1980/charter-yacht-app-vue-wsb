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
      <!-- Tutaj wygląd wyświetlający errory -->
      <div v-if="errors" class="information__errors">
        <p class="information__errors__text">Następujące pola nie zostały poprawnie wypełnione:</p>
        <ul class="information__errors__list">
          <template v-for="(errors, outerIndex) in validationErrors">
            <li v-for="(error, index) in errors" :key="outerIndex + '-' + index">{{ error }}</li>
          </template>
        </ul>
      </div>
      <form action class="container__main-form" @submit.prevent="handleSubmit">
        <div class="container__main-form__items">
          <div class="container__main-form__items__item">
            <label class="container__main-form__items__item__label">
              Kraj:
              <select
                id="country"
                v-model="selectedCountry"
                class="container__main-form__items__item__label__content"
                @change="getText"
              >
                <option value>Wybierz kraj w którym chcesz wyczarterować Jacht</option>
                <option
                  v-for="(countryChoice,i) in countryChoices"
                  :key="i"
                  :value="countryChoice.value === 'Inne kraje będą dostępne zależnie od zgłaszających się czarterujących' ? '' : countryChoice.value"
                >{{ countryChoice.value }}</option>
              </select>
            </label>
          </div>
          <div class="container__main-form__items__item">
            <label class="container__main-form__items__item__label">
              Dowolny (jesli nie ma na liście):
              <input
                id="country_extend"
                v-model="country_extend"
                type="text"
                class="container__main-form__items__item__label__content"
              />
            </label>
          </div>
          <div class="container__main-form__items__item">
            <label for class="container__main-form__items__item__label">
              Termin [od]:
              <span class="container__main-form__items__item__label--must">*</span>
              <input
                id="date_from"
                v-model="date_from"
                type="date"
                class="container__main-form__items__item__label__content"
              />
              <!-- required -->
            </label>
          </div>
          <div class="container__main-form__items__item">
            <label for class="container__main-form__items__item__label">
              Termin [do]:
              <span class="container__main-form__items__item__label--must">*</span>
              <input
                id="date_to"
                v-model="date_to"
                type="date"
                class="container__main-form__items__item__label__content"
              />
            </label>
          </div>
          <div class="container__main-form__items__item">
            <label class="container__main-form__items__item__label">
              Rodzaj jachtu:
              <select
                v-model="selectedType"
                class="container__main-form__items__item__label__content"
                @:change="getText"
              >
                <option value>Wybierz rodzaj jachtu na przygodę</option>
                <option
                  v-for="(typeChoice,i) in typeChoices"
                  :key="i"
                  :value="typeChoice.value"
                >{{ typeChoice.value }}</option>
              </select>
            </label>
          </div>
          <div class="container__main-form__items__item">
            <label class="container__main-form__items__item__label">
              Liczba kabin:
              <input
                id="cabins"
                v-model="cabins"
                type="number"
                class="container__main-form__items__item__label__content"
                placeholder="Podaj liczbę kabin"
              />
            </label>
          </div>
          <div class="container__main-form__items__item">
            <label class="container__main-form__items__item__label">
              Liczba gości:
              <input
                id="guests"
                v-model="guests"
                type="number"
                class="container__main-form__items__item__label__content"
                placeholder="Podaj liczbę uczestników/gości"
              />
            </label>
          </div>
          <div class="container__main-form__items__item">
            <label class="container__main-form__items__item__label">
              Uwagi dodatkowe:
              <textarea
                id="description"
                v-model="description"
                class="container__main-form__items__item__label__content"
                rows="10"
              />
            </label>
          </div>
          <!-- pattern="[A-Za-z\b[ą,ć,ę,ł,ó,ż,ź]]{3,}" -->
          <div class="container__main-form__items__item">
            <label for class="container__main-form__items__item__label">
              Imię:
              <span class="container__main-form__items__item__label--must">*</span>
              <input
                id="name"
                v-model="name"
                type="text"
                class="container__main-form__items__item__label__content"
                placeholder="Podaj poprawne Imię minimum 3 litery"
              />
              <!-- required -->
            </label>
          </div>
          <!-- pattern="[A-Za-z\b[ą,ć,ę,ł,ó,ż,ź,\-]]{3,}" -->
          <div class="container__main-form__items__item">
            <label for class="container__main-form__items__item__label">
              Nazwisko:
              <span class="container__main-form__items__item__label--must">*</span>
              <input
                id="surname"
                v-model="surname"
                type="text"
                class="container__main-form__items__item__label__content"
                placeholder="Podaj poprawne Nazwisko minimum 3 litery"
              />
              required
            </label>
          </div>
          <div class="container__main-form__items__item">
            <label for class="container__main-form__items__item__label">
              Adres Email:
              <span class="container__main-form__items__item__label--must">*</span>
              <input
                id="email"
                v-model="email"
                type="email"
                class="container__main-form__items__item__label__content"
                placeholder="Podaj poprawny adres Email aby Twoja Prośba została zarejestrowana"
              />
              required
            </label>
          </div>
          <!-- pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" -->
          <div class="container__main-form__items__item">
            <label for class="container__main-form__items__item__label">
              Numer telefonu:
              <span class="container__main-form__items__item__label--must">*</span>
              <input
                id="phone"
                v-model="phone"
                type="tel"
                class="container__main-form__items__item__label__content"
                placeholder="Wpisz numer telefonu."
              />
              <!-- required -->
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
import firebase from "@/firebase.js";
import validation from "@/validation";
import Vue from "vue";
export default {
  name: "AskForCharterForm",
  components: {
    MainMenu,
    MainFooter
  },
  data() {
    return {
      homepage: "/",
      selectedType: "",
      selectedCountry: "",
      typeChoices: [
        { value: "Jacht jednokadłubowy żaglowy" },
        { value: "Jacht jednokadłubowy motorowy" },
        { value: "Jacht wielookadłubowy żaglowy" },
        { value: "Jacht wielookadłubowy motorowy" }
      ],
      // Informacje zawarte w select country
      countryChoices: [
        { value: "Polska" },
        {
          value:
            "Inne kraje będą dostępne zależnie od zgłaszających się czarterujących"
        }
      ],
      // łączenie reszty informacji
      cabins: null,
      country: "",
      country_extend: null,
      date_from: "",
      date_to: "",
      description: null,
      email: "",
      guests: null,
      name: "",
      surname: "",
      phone: null,
      // właściwość zawierająca errory
      validationErrors: {}
    };
  },
  // właściwość sprawdzająca czy są  errory
  computed: {
    errors() {
      return Object.values(this.validationErrors).length;
    }
  },
  // watchersy nasłuchujące czy są zmiany w polach
  watch: {
    date_from(value) {
      this.validateWatch("date_from", value);
    },
    date_to(value) {
      this.validateWatch("date_to", value);
    },
    name(value) {
      this.validateWatch("name", value);
    },
    surname(value) {
      this.validateWatch("surname", value);
    },
    email(value) {
      this.validateWatch("email", value);
    },
    phone(value) {
      this.validateWatch("phone", value);
    }
  },

  methods: {
    // Pobieranie textu z selecta
    getText() {
      // pobieranie wszystkich wartości z selecta type
      let values = this.typeChoices.map(obj => obj.value);
      console.log(values);
      // pobiranie wszystkich wartości z selecta country
      let countries = this.countryChoices.map(obj => obj.value);
      console.log(countries);
    },
    // validateWatch tworzenie metody
    validateWatch(propertyName, value) {
      this.validate(propertyName, value);
    },
    // deklaracja validate
    validate(propertyName, value) {
      // zadeklarowanie pustej tablicy na błędy
      let errors = [];

      Object(validation)[propertyName].forEach(err => {
        if (!err.validator(value)) {
          errors.push(err.message);
        }
      });
      // Sprawdzenie czy są errory jakieś
      if (errors.length > 0) {
        Vue.set(this.validationErrors, propertyName, errors);
      } else {
        // Jeśli ich nie ma to czyść listę errorów
        Vue.delete(this.validationErrors, propertyName);
      }
    },
    // Zwalidować wszystkie metody teraz
    validateAll() {
      this.validate("date_from", this.date_from);
      this.validate("date_to", this.date_to);
      this.validate("name", this.name);
      this.validate("surname", this.surname);
      this.validate("email", this.email);
      this.validate("phone", this.phone);

      // Zwrot zwalidowanych wartości
      return this.errors > 0 ? false : true;
    },
    handleSubmit() {
      // Sprawdzenie czy działa
      if (this.validateAll()) {
        console.log(
          `FORM SUBMITTED: ${this.date_from}, ${this.date_to}, ${this.name}, ${this.surname}, ${this.email}, ${this.phone},`
        );
      }
      // let db = firebase.firestore();
      // db.collection("Charter_Order")
      //   .add({
      //     cabins: this.cabins,
      //     country: this.selectedCountry,
      //     country_extend: this.country_extend,
      //     date_from: this.date_from,
      //     date_to: this.date_to,
      //     description: this.description,
      //     email: this.email,
      //     guests: this.guests,
      //     name: this.name,
      //     surname: this.surname,
      //     phone: this.phone,
      //     type: this.selectedType
      //   })
      //   .then(docRef => {
      //     this.$router.push("/list-of-added-charter-orders");
      //   })
      //   .catch(error => console.log(err));
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
      outline-style: none;
      cursor: pointer;
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