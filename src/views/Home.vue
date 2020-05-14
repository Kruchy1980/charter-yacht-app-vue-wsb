<template>
  <div id="yacht-charter-app">
    <!-- Tu miejsce na navbar -->
    <MainMenu/>
    <!-- Tutaj już walnięty slider  -->
    <TheSlider />
    <!-- Kafelki -->
    <div class="main__box">
      <div class="main__box__tile main__box__tile__yachts" data-title="Yachts for charters">
        <p>1234567</p>
      </div>
      <div
        class="main__box__tile main__box__tile__skippers"
        data-title="Skippers in our database"
      >1234567</div>
      <div
        class="main__box__tile main__box__tile__chartetrers"
        data-title="Registered charterers"
      >1234567</div>
    </div>
    <MainFooter/>
  </div>
</template>

<script>
import TheSlider from "@/components/TheSlider";
import MainMenu from "@/components/MainMenu"
import MainFooter from "@/components/MainFooter"
export default {
  name: "App",
  components: { TheSlider,MainMenu,MainFooter }
};
</script>

<style  lang="scss">
/* All elements */
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* Tiles styles */
.main__box {
  min-width: 300px;
  max-width: 800px;
  margin: 30px auto;
  // border: 1px solid #000;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  flex-grow: 1;
  &__tile {
    display: flex;
    min-width: 75px;
    height: 70px;
    justify-content: center;
    align-items: center;
    margin: 20px;
    border: 5px groove;
    padding: 20px;
    font-weight: bold;
    &__yachts {
      border-color: #00ff80;
      color: #068a06;
      &[data-title]:hover:after {
        background-color: #ddd;
        color: #068a06;
      }
    }
    &__skippers {
      border-color: #0000ff80;
      color: #0000ff;
      &[data-title]:hover:after {
        background-color: #ddd;
        color: #0000ff;
      }
    }
    &__chartetrers {
      border-color: #cfab0780;
      color: #cfab07;
      &[data-title]:hover:after {
        background-color: #ddd;
        color: #cfab07;
      }
    }
    &[data-title] {
      position: relative;
    }
    &[data-title]:hover:after {
      content: attr(data-title);
      position: absolute;
      top: -35px;
      padding: 4px;
      // color: #222;
      white-space: nowrap;
      // background-color: #0000ff;
      // color: #ddd;
      border: 1px groove #777;
      border-radius: 5px;
      opacity: 0;
      display: none;
    }
    &[data-title]:hover:after {
      opacity: 1;
      transition: all 0.5s ease;
      display: block;
    }
  }
}
</style>
