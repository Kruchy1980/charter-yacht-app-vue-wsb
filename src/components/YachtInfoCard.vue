<template>
  <div id="info-preparation-card">
    <section class="container">
      <div class="container__box">
        <div class="container__box__item">
          <p class="container__box__item__text">Ten rejon jest obecnie niedostępny :(</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scopec>
.container {
  background-color: #888;
  &__box {
    background-color: #ddd;
    box-shadow: 0 0 10px 3px #999;
    border-radius: 30px;
    width: 290px;
    height: 300px;
    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      &__text {
        font-size: 24px;
        font-family: monospace;
        font-weight: bold;
        text-align: center;
      }
    }
  }
}
</style>