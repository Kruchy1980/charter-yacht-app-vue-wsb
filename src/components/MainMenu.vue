<template>
  <header class="main_header primary_color bg-light">
    <div class="main_header_nav">
      <a :href="mainUrl">
        <img :src="logoUrl" alt="logo" class="nav_logo" />
      </a>
      <button type="button" class="nav_toggler" v-on:click="showMobileMenu()">
        <i class="fas fa-bars fa-lg" v-show="isMobileMenuClicked"></i>
        <i class="fas fa-times fa-lg" v-show="!isMobileMenuClicked"></i>
      </button>
      <nav class="header_nav">
        <ul class="nav_menu">
          <li>
            <router-link to="/" class="nav_link primary_color">Strona główna</router-link>
          </li>
          <li>
            <a class="nav_link primary_color" v-on:click="expandMenuCharter($event)">
              Czartery jachtów
              <i class="fas fa-caret-down" v-show="!isExpanded"></i>
              <i class="fas fa-caret-up" v-show="isExpanded"></i>
            </a>
            <ul class="nav_dropdown bg-light">
              <li>
                <a class="nav_link primary_color" v-on:click="isExpanded1=!isExpanded1">
                  Jachty żaglowe
                  <i class="fas fa-caret-down" v-show="!isExpanded1"></i>
                  <i class="fas fa-caret-up" v-show="isExpanded1"></i>
                </a>
                <ul v-show="isExpanded1">
                  <li class="dropdown_item">
                    <a class="primary_color nav_link">
                      <i class="fas fa-caret-right"></i> Jednokadłubowe
                    </a>
                  </li>
                  <li class="dropdown_item">
                    <a class="primary_color nav_link">
                      <i class="fas fa-caret-right"></i> Wielokadłubowe
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a class="nav_link primary_color" v-on:click="isExpanded2=!isExpanded2">
                  Jachty motorowe
                  <i class="fas fa-caret-down" v-show="!isExpanded2"></i>
                  <i class="fas fa-caret-up" v-show="isExpanded2"></i>
                </a>
                <ul v-show="isExpanded2">
                  <li class="dropdown_item">
                    <a class="primary_color nav_link">
                      <i class="fas fa-caret-right"></i> Jednokadłubowe
                    </a>
                  </li>
                  <li class="dropdown_item">
                    <a class="primary_color nav_link">
                      <i class="fas fa-caret-right"></i> Wielokadłubowe
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/contact" class="nav_link primary_color">Kontakt</router-link>
          </li>
          <li>
            <router-link to="/about" class="nav_link primary_color">O Nas</router-link>
          </li>
          <li>
            <a href class="nav_link primary_color">
              <i class="fas fa-user-circle fa-lg"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>


<script>
export default {
  data() {
    return {
      mainUrl: "/",
      logoUrl: "/bookmark-icon/1.blue.svg",
      isMobileMenuClicked: true,
      isExpanded: false,
      isExpanded1: false,
      isExpanded2: false
    };
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
      let ul = e.target.nextSibling;
      this.isExpanded = !this.isExpanded;
      ul.classList.toggle("nav_dropdown--grow");
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
  border-bottom: 1px solid rgb(102, 102, 102, 0.2);
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