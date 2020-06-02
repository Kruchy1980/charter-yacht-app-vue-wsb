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
      <form class="container__main-form" @submit.prevent="handleSubmit">
        <div class="container__main-form__items">
          <div class="container__main-form__items__item">
            <label class="container__main-form__items__item__label">
              Kraj:
              <select
                id="country"
                v-model="selectedCountry"
                @change="getText"
                class="container__main-form__items__item__label__content"
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
                required
              />
            </label>
          </div>
          <div class="container__main-form__items__item">
            <label for class="container__main-form__items__item__label">
              Termin [do]:
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
                v-on:change="getText"
                v-model="selectedType"
                class="container__main-form__items__item__label__content"
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
                required
              />
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
                required
              />
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
                required
              />
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
                placeholder="Wpisz numer telefonu w formacie 000-000-000"
                required
              />
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

export default {
  name: "AskForCharterForm",
  components: {
    MainMenu,
    MainFooter
  },
  data() {
    return {
      homepage: "/",
      // infopage: "/display-single-order",
      // selected: true,
      // Odtąd łączenie do firebase'a
      // order_id: null,
      // Informacje zawarte w select type
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
      // choiceId: "",
      // getText: "",
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
      phone: null
      // type: ""
    };
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
      // Pobieranie indexu pola
      // let index = values.indexOf(this.selectedType);
      // Przypisanie wartości  z
      // this.choiceText = this.choices[index].text;
      // console.log(index);
    },
    handleSubmit() {
      let db = firebase.firestore();
      db.collection("Charter_Order")
        .add({
          cabins: this.cabins,
          country: this.selectedCountry,
          country_extend: this.country_extend,
          date_from: this.date_from,
          date_to: this.date_to,
          description: this.description,
          email: this.email,
          guests: this.guests,
          name: this.name,
          surname: this.surname,
          phone: this.phone,
          type: this.selectedType
        })
        .then(docRef => {
          this.$router.push("/list-of-added-charter-asks");
        })
        .catch(error => console.log(err));
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