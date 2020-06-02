<template>
  <footer class="fotter">
    <div class="footer__container">
      <p
        class="footer__container__p text__color--light"
      >&copy; 2020 International Yachts Charters - Pomysł i realizacja</p>
      <p class="footer__container__p text__color--light">
        Jakub Kruszyński
        <a
          href="https://github.com/Kruchy1980"
          target="_blank"
          class="text__color--primary"
        >
          <i class="fab fa-github" />
        </a> & Paweł Jarosiewicz
        <a
          href="https://github.com/PawelJarosiewicz"
          target="_blank"
          class="text__color--primary"
        >
          <i class="fab fa-github" />
        </a>
      </p>
    </div>
  </footer>
</template>


<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.footer__container__p {
  margin: 0 auto;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  margin-bottom: 0.5rem;
}
.footer__container {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
  padding-top: 0.5rem;
  text-align: center;
}
.fotter {
  bottom: 0;
  /* position: absolute; */
  background-color: #6c757d;
  margin: 0 auto;
  padding: 0px;
  width: 100%;
}

/* from tablet to large scrrens */
@media (min-width: 768px) {
  .footer__container {
    font-size: 0.9rem;
    margin: 0 auto;
    width: fit-content;
    padding-bottom: 0.5rem;
  }
  .footer__container__p {
    margin: 0;
    padding-left: 0;
    padding-right: 0.25rem;
  }
}
</style>