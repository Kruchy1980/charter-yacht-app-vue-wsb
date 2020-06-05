<template>
  <div id="list-of-added-charter-orders" class>
    <!-- <div class=" -->
    <MainMenu />
    <!-- <div class="container"> -->
    <div class="container__return">
      <div class="container__return__submenu">
        <div class="container__return__submenu__text">
          <p class="container__return__submenu__text__display">Obecnie zarejestrowane czartery</p>
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
    <div class="main">
      <div v-for="order in orders" :key="order.id" class="content">
        <div class="content__text">
          <p class="content__text__display">
            <span class="content__text__display--marker">ID:</span>

            <span class="content__text__display--number">"{{ order.id }}"</span>.
          </p>
          <div class="content__order">
            <div class="content__order__item">
              <span class="content__order__item--marker">Imię:</span>
              {{ order.name }}
            </div>
            <div class="content__order__item">
              <span class="content__order__item--marker">Nazwisko:</span>
              {{ order.surname }}
            </div>
            <div class="content__order__item">
              <span class="content__order__item--marker">Informacje dodatkowe:</span>
              {{ order.description }}
            </div>
            <div class="content__order__item">
              <span class="content__order__item--marker">Typ Jachtu:</span>
              {{ order.type }}
            </div>
            <div class="content__order__item">
              <span class="content__order__item--marker">Od:</span>
              <span class="content__order__item__date_from">{{ order.date_from }}</span>
            </div>
            <div class="content__order__item">
              <span class="content__order__item--marker">Do:</span>
              <span class="content__order__item__date_to">{{ order.date_to }}</span>
            </div>
            <div class="content__order__item">
              <span class="content__order__item--marker">Adres Email:</span>
              {{ order.email }}
            </div>
            <div class="content__order__item">
              <span class="content__order__item--marker">Rejon pływania:</span>
              {{ order.country }} {{ order.country_extend }}
            </div>
            <div class="content__order__item">
              <span class="content__order__item--marker">Ilość Kabin:</span>
              {{ order.cabins }}
            </div>
            <div class="content__order__item">
              <span class="content__order__item--marker">Ilość Gości:</span>
              {{ order.guests }}
            </div>
            <div class="box__inner__content__order">
              <button class="box__inner__content__order--edit">Edytuj</button>
              <button class="box__inner__content__order--delete">Kasuj</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
    <MainFooter />
  </div>
  <!-- </div> -->
</template>

<script>
import MainMenu from "@/components/MainMenu";
import MainFooter from "@/components/MainFooter";
import firebase from "@/firebase";

export default {
  name: "ListOfAddedCharterOrders",
  components: {
    MainMenu,
    MainFooter
  },
  data() {
    return {
      homempage: "/",
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
.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.content {
  // display: flex;
  // flex-wrap: wrap;
  margin: 50px 10px;
  // width: 95%;
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
  // @media #{$media-content} {
  //   width: 600px;
  // }
  &__text {
    // width: 90%;
    padding: 10px;
    &__display {
      margin-left: 10px;
      font-size: 16px;
      font-family: monospace;
      font-weight: bold;
      width: 90%;
      &--number {
        text-decoration: underline wavy;
        color: #744d04;
      }
      &--marker {
        font-weight: bold;
      }
    }
  }
  &__order {
    padding: 10px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__item {
      // padding: 5px 0;
      font-size: 16px;
      font-family: monospace;
      // line-height: 1.3em;
      &__date_from {
        margin-left: 10px;
        color: rgb(4, 167, 4);
      }
      &__date_to {
        margin-left: 10px;
        color: rgb(141, 3, 3);
      }
      &--marker {
        font-weight: bold;
      }
    }
  }
}

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
        text-decoration: none;
        font-family: monospace;
        color: #111;
      }
    }
  }
}
.box__inner__content__order {
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
</style>