<template>
  <div id="contact">
    <MainMenu />
    <main class="container">
      <section class="section background__color--light">
        <article class="article text__color--dark">
          <h2 class="article__title">Kontakt</h2>
          <p class="article__p">Napisz do nas! Z góry dziękujemy za wszystkie sugestie i opinie.</p>
          <form action="submit" class="contactform">
              <div class="contactform__group">
                  <label class="contactform__label" for="name">Imię <span class="text__color--gray">(wymagane)</span></label>
                  <InputText id="name" :minLength=1  :valid=inputValid ref="my-child"/>
              </div>
              <div class="contactform__group">
                  <label class="contactform__label" for="email">E-mail <span class="text__color--gray">(wymagane)</span></label>
                  <input type="email" id="email">
              </div>
          </form>
          <button type="button" @click="getValid"></button>
        </article>
      </section>
    </main>
    <MainFooter />
  </div>
</template>

<script>
import MainMenu from "@/components/MainMenu";
import MainFooter from "@/components/MainFooter";
import InputText from "@/components/InputText";
export default {
  name: "contact",
  components: { MainMenu, MainFooter,InputText },
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
.article {
  padding: 5%;
}
.article__title {
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
}
.article__p {
  margin-bottom: 0.2rem;
  line-height: 1.5;
  text-align: justify;
}
#contact{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.container{
  flex: 1;
}
.section {
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
  .section{
    margin-top: 15%;
  }
}
@media only screen and (min-width: 768px) {
  #contact::after {
    background: url("/images/background/contact-big.jpg") no-repeat center center
      fixed;
  }
  .section {
    margin-top: 10%;
    margin-left: 10%;
    margin-right: 10%;
  }
  .article {
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
  .section{
    margin-top: 5%;
    margin-left: 15%;
    margin-right: 15%;
  }
}
</style>

