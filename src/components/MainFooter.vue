<template>
  <footer class="main_fotter">
    <div class="footer_container">
      <p class="footer_p">&copy; 2020 International Yachts Charters - Pomysł i realizacja</p>
      <p class="footer_p">
        Jakub Kruszyński
        <a
          href="https://github.com/Kruchy1980"
          target="_blank"
          class="primary_color"
        >
          <i class="fab fa-github"></i>
        </a> & Paweł Jarosiewicz
        <a
          href="https://github.com/PawelJarosiewicz"
          target="_blank"
          class="primary_color"
        >
          <i class="fab fa-github"></i>
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
.footer_p {
  color: rgb(248, 249, 250);
  margin: 0 auto;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  margin-bottom: 0.5rem;
}
.footer_container {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
  padding-top: 0.5rem;
  text-align: center;
}
.main_fotter {
  bottom: 0;
  position: fixed;
  background-color: #6c757d;
  margin: 0 auto;
  padding: 0px;
  width: 100%;
}

/* from tablet to large scrrens */
@media (min-width: 768px) {
  .footer_container {
    font-size: 0.9rem;
    margin: 0 auto;
    width: fit-content;
    padding-bottom: 0.5rem;
  }
  .footer_p {
    margin: 0;
    padding-left: 0;
    padding-right: 0.25rem;
  }
}
</style>