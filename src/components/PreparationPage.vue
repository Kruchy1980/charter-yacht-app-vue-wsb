<template>
  <div id="preparation">
    <div class="preparation__content">
      <a
        :href="homepage"
        class="preparation__content__link"
      >Strona w przygotowaniu - zależne od rozwoju bazy danych!</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "preparation",
  data() {
    return {
      homepage: "/"
    };
  }
};
</script>

<style lang="scss" scoped>
#preparation {
  background-color: #999;
  height: 100vh;
}
.preparation__content {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 290px;
  height: auto;
  background-color: #ccc;
  box-shadow: 0 0 15px 5px #fff;
  border-radius: 30px;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  &__link {
    text-decoration: none;
    color: #e41313;
    &:hover {
      color: #aa0707;
    }
  }
}
</style>