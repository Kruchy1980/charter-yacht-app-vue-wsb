<template>
  <header class="main_header text__color--primary background__color--light">
    <div class="main_header_nav">
      <a :href="mainUrl">
        <img :src="logoUrl" alt="logo" class="nav_logo" />
      </a>
      <button type="button" class="nav_toggler" @click="showMobileMenu()">
        <i v-show="isMobileMenuClicked" class="fas fa-bars fa-lg" />
        <i v-show="!isMobileMenuClicked" class="fas fa-times fa-lg" />
      </button>
      <nav class="header_nav">
        <ul class="nav_menu">
          <li>
            <router-link to="/" class="nav_link text__color--primary">Strona główna</router-link>
          </li>
          <li>
            <a class="nav_link text__color--primary" @click="expandMenuCharter($event)">
              Czartery jachtów
              <i v-show="!isExpanded" class="fas fa-caret-down" />
              <i v-show="isExpanded" class="fas fa-caret-up" />
            </a>
            <ul class="nav_dropdown background__color--light">
              <li>
                <a class="nav_link text__color--primary" @click="isExpanded1=!isExpanded1">
                  Jachty żaglowe
                  <i v-show="!isExpanded1" class="fas fa-caret-down" />
                  <i v-show="isExpanded1" class="fas fa-caret-up" />
                </a>
                <ul v-show="isExpanded1">
                  <li class="dropdown_item">
                    <a class="text__color--primary nav_link">
                      <i class="fas fa-caret-right" />
                      <router-link
                        to="/one-hulled-sailing-yachts"
                        class="text__color--primary"
                      >Jednokadłubowe</router-link>
                    </a>
                  </li>
                  <li class="dropdown_item">
                    <a class="text__color--primary nav_link">
                      <i class="fas fa-caret-right" />
                      <router-link
                        to="/multi-hulled-sailing-yachts"
                        class="text__color--primary"
                      >Wielokadłubowe</router-link>
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a class="nav_link text__color--primary" @click="isExpanded2=!isExpanded2">
                  Jachty motorowe
                  <i v-show="!isExpanded2" class="fas fa-caret-down" />
                  <i v-show="isExpanded2" class="fas fa-caret-up" />
                </a>
                <ul v-show="isExpanded2">
                  <li class="dropdown_item">
                    <a class="text__color--primary nav_link">
                      <i class="fas fa-caret-right" />
                      <router-link
                        to="/one-hulled-motor-yachts"
                        class="text__color--primary"
                      >Jednokadłubowe</router-link>
                    </a>
                  </li>
                  <li class="dropdown_item">
                    <a class="text__color--primary nav_link">
                      <i class="fas fa-caret-right" />
                      <router-link
                        to="/multi-hulled-motor-yachts"
                        class="text__color--primary"
                      >Wielokadłubowe</router-link>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/contact" class="nav_link text__color--primary">Kontakt</router-link>
          </li>
          <li>
            <router-link to="/about" class="nav_link text__color--primary">O Nas</router-link>
          </li>
          <li v-show="!isLoggedUser">
            <router-link to="/user" class="nav_link text__color--primary">
              <i class="fas fa-user-circle fa-lg" />
            </router-link>
          </li>
          <li v-show="isLoggedUser">
            <a class="nav_link text__color--primary" @click="expandMenuUser($event)">
              <i class="fas fa-user-circle fa-lg" />
              <i v-show="!isExpandedUserMnu" class="fas fa-caret-down" />
              <i v-show="isExpandedUserMnu" class="fas fa-caret-up" />
            </a>
            <ul id="mnuUser" class="nav_dropdown background__color--light">
              <li>
                <router-link to="/user" class="nav_link text__color--primary">Twoje konto</router-link>
              </li>
              <li>
                <a class="nav_link text__color--primary" @click="showLogOut()">Wyloguj się</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
    <ModalLogOut v-show="isShowLogOut" @close="closeModal()" @logOut="firebaseLogOut()" />
  </header>
</template>


<script>
import { mapState } from "vuex";
import ModalLogOut from "@/components/ModalLogOut";
import firebase from "@/firebase.js";

export default {
  name: "mainMenu",
  components: { ModalLogOut },
  data() {
    return {
      mainUrl: "/",
      logoUrl: "/bookmark-icon/1.blue.svg",
      isMobileMenuClicked: true,
      isExpanded: false,
      isExpanded1: false,
      isExpanded2: false,
      isLoggedUser: false,
      isExpandedUserMnu: false,
      isShowLogOut: false
    };
  },
  computed: {
    ...mapState({
      //mapujemy zmienne z magazynu
      currentUser: "user" //user firebase
    })
  },
  mounted() {
    if (this.currentUser.loggedIn) {
      if (!this.currentUser.data.isAnonymous) {
        this.isLoggedUser = true; //jest zalogowany użytkownik, i nie jest to użytkownik anonimowy używany do wyświetlania danych z bazy
      }
    }
  },
  methods: {
    showMobileMenu() {
      let nav = document.querySelector(".header_nav");
      if (this.isMobileMenuClicked) {
        nav.style = "max-height: 50vh;";
      } else {
        nav.style = "max-height: 0;";
      }
      this.isMobileMenuClicked = !this.isMobileMenuClicked;
    },
    expandMenuCharter(e) {
      let ul = document.getElementById("mnuCharter");
      this.isExpanded = !this.isExpanded;
      ul.classList.toggle("nav_dropdown--grow");
    },
    expandMenuUser(e) {
      let ul = document.getElementById("mnuUser");
      this.isExpandedUserMnu = !this.isExpandedUserMnu;
      ul.classList.toggle("nav_dropdown--grow");
    },
    closeModal() {
      this.isShowLogOut = false;
    },
    showLogOut() {
      this.isShowLogOut = true;
    },
    firebaseLogOut() {
      const that = this;
      firebase
        .auth()
        .signOut()
        .then(function() {
          that.isShowLogOut = false;
          that.$router.go(0); //odświeżenie bieżącel lokalizacji
        })
        .catch(function(error) {
          console.error("Error during log out ", error);
        });
    }
  }
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
li a {
  text-decoration: none;
}
.header_nav {
  flex-basis: 100%;
  -moz-transition: max-height 0.5s;
  -ms-transition: max-height 0.5s;
  -o-transition: max-height 0.5s;
  -webkit-transition: max-height 0.5s;
  transition: max-height 0.5s;
  max-height: 0;
  overflow: hidden;
}
li {
  padding-left: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.2rem;
}
.nav_link {
  padding: 0.25rem;
  border: solid 1px transparent;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.nav_link:hover {
  cursor: pointer;
  border-radius: 7px;
  border-left: solid 1px rgba(60, 84, 180, 0.6);
  border-right: solid 1px rgba(60, 84, 180, 0.6);
  color: rgba(60, 84, 180, 0.6);
}
.nav_dropdown > li {
  margin-top: 0.5rem;
}
.dropdown_item {
  margin-top: 0.5rem;
  padding-bottom: 0.2rem;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.dropdown_item:hover {
  margin-left: 0.25rem;
}
.nav_toggler {
  height: 2rem;
  width: 2rem;
  margin: auto 0 auto auto;
  color: rgba(60, 84, 180, 0.5);
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.nav_menu {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 0.5rem;
}
.main_header {
  margin: 0px;
  padding: 0px;
  position: fixed;
  top: 0px;
  width: 100%;
  /* background-color: rgb(254, 254, 254); */
  display: flex;
  border-bottom: 1px solid rgb(102, 102, 102, 0.2);
  z-index: 100;
  box-shadow: 1px 1px 5px #999;
}
.main_header_nav {
  margin: 0 auto;
  width: 1200px;
  max-width: 90%;
  display: flex;
  flex-wrap: wrap;
}
.nav_logo {
  display: inline-block;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  height: 3rem;
}
.hide:not(.show) {
  display: none;
}
.nav_dropdown {
  width: fit-content;
  border-bottom-right-radius: 7px;
  border-bottom-left-radius: 7px;

  /* ukrycie + animacja */
  max-height: 0px;
  overflow: hidden;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.nav_dropdown--grow {
  max-height: 50vh;
  padding: 3px;
  border-bottom: 1px solid rgb(102, 102, 102, 0.5);
  box-shadow: 0 4px 2px -2px #999;
}

/* szkielet dla różnych wyświetlaczy */
/* @media (min-width: 640px) {
} */

@media (min-width: 768px) {
  .header_nav {
    margin: auto 5% auto auto;
    display: inherit !important;
    flex-basis: auto;
    max-height: 50vh;
  }
  li {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }
  .main_header_nav {
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .nav_toggler {
    display: none;
  }
  .nav_menu {
    display: flex;
    flex-direction: row;
    margin-bottom: 0;
  }
  .nav_dropdown {
    position: absolute;
    width: auto;
    padding: 3px;
  }
}

/* @media (min-width: 1024px) {
}

@media (min-width: 1200px) {
} */
</style>