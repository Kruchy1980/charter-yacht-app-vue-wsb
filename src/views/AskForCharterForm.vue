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
      <form action class="container__main-form" @submit.prevent="handleSubmit">
        <div class="container__main-form__items">
          <div class="container__main-form__items__item">
            <label class="container__main-form__items__item__label">
              Kraj:
              <select
                id="country"
                v-model="country"
                class="container__main-form__items__item__label__content"
              >
                <option value disabled>Wybierz kraj w którym chcesz wyczarterować Jacht</option>
                <option>Polska</option>
                <option disabled value>W przyszłości będą dodane inne rejony</option>
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
                placeholder="Podaj nazwę Kraju po którym chciałb yś/chciałabyś podróżować"
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
              Typ jachtu:
              <select
                id="yacht_choice"
                v-model="type"
                class="container__main-form__items__item__label__content"
              >
                <option value>Wybierz odpowiedni rodzaj jachtu</option>
                <option value>Jednokadłubowy żaglowy</option>
                <option value>Jednokadłubowy motorowy</option>
                <option value>Wielokadłubowy żaglowy</option>
                <option value>Wielokadłubowy motorowy</option>
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
                placeholder="Podaj informację na temat wynajmu - ze Skipperem czy bez i dodatkowe oczekiwania"
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
            <label for class="container__main- form__items__item__label">
              Nazwisko:
              <span class="container__main-form__items__item__label--must">*</span>
              <input
                id="surname"
                v-model="surname"
                type="text"
                class="container__main-form__items__item__label__content"
                placeholder="Podaj poprawne nazwisko minimum 3 litery"
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
      // selected: true,
      // Odtąd łączenie do firebase'a
      // order_id: null,
      cabins: null,
      country: "",
      country_extend: "",
      date_from: null,
      date_to: null,
      description: null,
      email: "",
      guests: null,
      name: "",
      surname: "",
      phone: null,
      type: ""
    };
  },
  methods: {
    handleSubmit() {
      db.collection("Charter_Order")
        .add({
          // order_id: Math.floor(new Date() * (Math.random() * 20))
          cabins: this.cabins,
          country: this.country.selectedOptions[0].text,
          country_extend: this.country_extend,
          date_from: this.date_from,
          date_to: this.date_to,
          description: this.description,
          email: this.email,
          guests: this.guests,
          name: this.name,
          surname: this.surname,
          phone: this.phone,
          type: this.type.selectedOptions[0].text
        })
        .then(docRef => this.$router.push("/"))
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
            // overflow: none;
            text-overflow: wrap;
            // white-space: nowrap;
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