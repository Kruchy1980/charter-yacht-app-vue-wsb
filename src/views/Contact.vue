<template>
  <div id="contact">
    <MainMenu />
    <main class="contact__container">
      <section class="contact__container__section background__color--light">
        <article class="contact__article text__color--dark">
          <h2 class="contact__article__title">Kontakt</h2>
          <p class="contact__article__p">Napisz do nas! Z góry dziękujemy za wszystkie sugestie i opinie.</p>
          <form action="submit" class="contactform">

          </form>
        </article>
      </section>
    </main>
    <MainFooter />
  </div>
</template>

<script>
import MainMenu from "@/components/MainMenu";
import MainFooter from "@/components/MainFooter";

export default {
  name: "contact",
  components: { MainMenu, MainFooter },
  data(){
    return{
      inputValid: false,
    }
  },
  methods: {
    getValid(){
      console.log(this.$refs['my-child'].isValid);
    }
  }
};
</script>

<style scoped>
.contactform__label{
    margin-bottom: 0.5rem;
}
.contactform__group{
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}
.contactform{
    margin-top:1rem;
    margin-right: auto;
    margin-left: auto;
}
.contact__article {
  padding: 5%;
}
.contact__article__title {
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
}
.contact__article__p {
  margin-bottom: 0.2rem;
  line-height: 1.5;
  text-align: justify;
}
#contact{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.contact__container{
  flex: 1;
}
.contact__container__section {
  margin-top: 19%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 3%;
  box-shadow: 4px 6px 20px #999;
  border-radius: 5px;
}
#contact::after {
  content: "";
  background: url("/images/background/contact-small.jpg") no-repeat center center
    fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
  height: 100vh;
}
@media only screen and (min-width: 640px){
  .container__section{
    margin-top: 15%;
  }
}
@media only screen and (min-width: 768px) {
  #contact::after {
    background: url("/images/background/contact-big.jpg") no-repeat center center
      fixed;
  }
  .contact__container__section {
    margin-top: 10%;
    margin-left: 10%;
    margin-right: 10%;
  }
  .contact__article {
    padding: 3%;
  }
  .contactform{
    flex: 0 0 75%;
    max-width: 75%;
  }
}
@media only screen and (min-width: 1200px) {
  .contactform{
    flex: 0 0 50%;
    max-width: 50%;
    margin-top: 2rem;
  }
  .contact__container__section{
    margin-top: 5%;
    margin-left: 15%;
    margin-right: 15%;
  }
}
</style>

