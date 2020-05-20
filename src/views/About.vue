<template>
  <div id="about">
    <MainMenu />
    <main class="container">
      <section class="section background__color--light">
        <article class="article">
          <h2 class="article__title">Kim jesteśmy</h2>
          <p class="article__p">
            Jesteśmy początkującymi programistami front-endu i strona, którą właśnie odwiedzasz jest naszym pierwszym projektem aplikacji typu
            <a class="article__a"
              href="https://en.wikipedia.org/wiki/Single-page_application"
              target="_blank"
            >
              <i>
                <strong>SPA (single-page application).</strong>
              </i>
            </a>
          </p>
          <p class="article__p">Naszym zamiarem było stworzenie portalu pozwalającego na wynajem jachtów wraz ze podstawowymi funkcjonalnościami tego typu portali.</p>
          <p class="article__p">Projekt powstał w ramach obrony na studiach podyplomowych. Przy realizacji zostały wykorzystane technologie:</p>
          <ul class="article__ul">
            <li class="article__li">
              <i class="fab fa-html5 text__color--red"></i> HTML i
              <i class="fab fa-css3-alt text__color--blue"></i> CSS,
            </li>
            <li class="article__li">
              <i class="fab fa-js text__color--yellow background__color--dark"></i> JavaScript,
            </li>
            <li class="article__li">
              <img src="images/icons/vuejs.png" alt="Vue.js" height="17px" /> Vue.js
            </li>
            <li class="article__li">
              oraz
              <img src="images/icons/firebase.png" alt="Firebase" height="20px" />.
            </li>
          </ul>
          <p class="article__p">
            Dlaczego najem jachtów? Ponieważ Jakub zawodowo pływał na jachtach, a Paweł lubi podziwiać jachty z lądu...
            <i
              class="far fa-smile fa-lg text__color--yellow"
              style="padding: 5px;"
            ></i>
          </p>
        </article>
      </section>
      <!--Opis mie się podoba spoko:), Menu świetnie super o to kaman spoko chodzi o ten podział :) 
      Paweł w komentarzu tylko ale dopiszę jeszcze tutaj ponieważ co do tehnologii można by dodać jeszcze metodykę  BEM - ja do swojej częsci takiej uzywam - ale już pewnie po obronie możan będzie użyć wspólnej bo na razie to jest taki trochę mieszany kod ale na obronę spoko tym bardziej, że nie będzie patrzył na kod raczej nawet nie dchdiał - jeśli chodzi o CSS'a, frame Bootstap, SCSS, i pewnie jeszcze coś dodamy po drodze ale to dopiszemy potem spokojna. Jeszcze dodatkowo można by dopisać biblioteki jak eslint, Saas i inne, które tutaj używamy i będziemy używali - do rozwoju i tylko zastanów się nad tym mamy na takie pierdoły jeszcze sporo czasu także można to zrobić przed oddaniem, jak już wszystko będzie z czego korzystamy i będziemy korzystali.-->
    </main>
    <MainFooter />
  </div>
</template>

<script>
import MainMenu from "@/components/MainMenu";
import MainFooter from "@/components/MainFooter";
export default {
  name: "about",
  components: { MainMenu, MainFooter }
};
</script>

<style scoped>
.article__ul {
  margin-left: 1rem;
  margin-bottom: 0.5rem;
}
.article__li {
  margin-top: 0.5rem;
  margin-left: 0.5rem;
}
.article__p {
  margin-bottom: 0.2rem;
  line-height: 1.5;
}
.article__a {
  text-decoration: none;
  color: #212529;
}
.section {
  margin-top: 19%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 3%;
  box-shadow: 4px 6px 20px #999;
  border-radius: 5px;
  color: #212529;
}
.article {
  padding: 5%;
  text-align: justify;
}
.article__title {
  margin-top: 0.3rem;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
}
#about{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.container{
  flex: 1;
}
#about::after {
  content: "";
  background: url("/images/background/about-small.jpg") no-repeat center center
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
  #about::after {
    background: url("/images/background/about-big.jpg") no-repeat center center
      fixed;
  }
  .section {
    margin-top: 10%;
    margin-left: 10%;
    margin-right: 10%;
  }
  .article {
  padding: 3%;
  text-align: justify;
}
}
@media only screen and (min-width: 1200px) {
  .section{
    margin-top: 8%;
    margin-left: 15%;
    margin-right: 15%;
  }
}
</style>

