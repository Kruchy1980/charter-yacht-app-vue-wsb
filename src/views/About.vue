<template>
    <div id="about">
        <MainMenu />
        <div class=" primary_color">
        <h2>O nas</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam necessitatibus, dicta corporis consectetur ipsa commodi, nostrum velit animi in non quia nisi, ducimus voluptates soluta libero debitis tempore officiis odit?</p>
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
}
</style>