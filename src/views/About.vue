<template>
    <div id="about">
        <MainMenu />
        <div class="about_wrapper">
            <div>
                <h2>Kim jesteśmy</h2>
                <p>Jesteśmy początkującymi programistami front-endu i strona, którą właśnie odwiedzasz jest naszym pierwszym projektem aplikacji typu <a href="https://en.wikipedia.org/wiki/Single-page_application" target="_blank"><i><strong>SPA (single-page application).</strong></i></a></p>
                <p>Naszym zamiarem było stworzenie portalu pozwalającego na wynajem jachtów wraz ze podstawowymi funkcjonalnościami tego typu portali.</p>
                <p>Projekt powstał w ramach obrony na studiach podyplomowych. Przy realizacji zostały wykorzystane technologie:</p>
                <ul>
                  <li class=""><i class="fab fa-html5 text-red"></i> HTML i <i class="fab fa-css3-alt text-blue"></i> CSS,</li>
                  <li class=""><i class="fab fa-js text-yellow bg-dark"></i> JavaScript,</li>
                  <li><img src="images/icons/vuejs.png" alt="Vue.js" height="17px"> Vue.js</li>
                  <li class="">oraz <img src="images/icons/firebase.png" alt="Firebase" height="20px">.</li>
                </ul>
                <p>Dlaczego najem jachtów? Ponieważ Jakub zawodowo pływał na jachtach, a Paweł lubi podziwiać jachty z lądu... <i class="far fa-smile fa-lg text-yellow" style="padding: 5px;"></i></p>
            </div>
        </div>
        
        <MainFooter />
    </div>
</template>

<script>
import MainMenu from "@/components/MainMenu"
import MainFooter from "@/components/MainFooter"
export default {
    name: "about",
    components: { MainMenu,MainFooter }
}
</script>

<style>
ul{
    margin-left: 1rem;
    margin-bottom: .5rem;
}
ul > li{
    margin-top: .5rem;
}
p{
    margin-bottom: .2rem;
    line-height: 1.5;
}
a {
    text-decoration: none;
    color: #212529;
}
.about_wrapper{
    background-color: rgb(254, 254, 254);
    display: block;
    margin-top: 15%;
    margin-left: 10%;
    margin-right: 10%;
    box-shadow: 4px 6px 20px #999;
    border-radius: 5px;
}
.about_wrapper >div{
    padding: 5%;
    text-align: justify;
}
.about_wrapper > div > h2{
    margin-top: .3rem;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
}

#about::after {
  content: "";
  background:  url("/images/background/about-small.jpg") no-repeat center center fixed;
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

@media (min-width: 768px){
    #about::after {
        background:  url("/images/background/about-big.jpg") no-repeat center center fixed;;
    }
    .about_wrapper{
        margin-top: 10%;
    }
}
</style>