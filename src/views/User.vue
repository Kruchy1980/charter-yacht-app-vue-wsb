<template>
  <div id="userAccount">
    <MainMenu />
    <main v-show="isLoggedUser" class="container">
      <div class="user__section text__color--dark background__color--light">
        <button class="user__section__button" @click.stop="showUserContainer($event)">
          Twoje konto
          <i class="fas fa-caret-down hide show" /><i class="fas fa-caret-up hide" />
          
        </button>
        <div class="user__section__container">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates sequi quasi beatae aliquid doloribus rem nulla aspernatur quidem, incidunt labore amet repellat magnam veniam architecto temporibus maxime? Provident quod, libero non, earum tenetur minus sit harum consectetur ex laudantium autem, asperiores quas id repellat maiores quaerat recusandae nisi! Dolor quo cupiditate, nisi doloremque, similique veniam ab sapiente adipisci eligendi nihil quis aspernatur voluptatibus, nesciunt facilis molestias officiis eveniet debitis voluptate enim odit quasi reiciendis. Nam expedita veritatis, quam ullam, praesentium quia sunt sint maiores voluptatem aut, animi ipsam tempora ad error libero nisi hic blanditiis iste vel deserunt obcaecati sed?</p>
        </div>
      </div>

      <div class="user__section text__color--dark background__color--light">
        <button class="user__section__button" @click="showUserContainer($event)">
          Twoje jachty 
          <i class="fas fa-caret-down hide show" /><i class="fas fa-caret-up hide" />
        </button>
        <div class="user__section__container">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates sequi quasi beatae aliquid doloribus rem nulla aspernatur quidem, incidunt labore amet repellat magnam veniam architecto temporibus maxime? Provident quod, libero non, earum tenetur minus sit harum consectetur ex laudantium autem, asperiores quas id repellat maiores quaerat recusandae nisi! Dolor quo cupiditate, nisi doloremque, similique veniam ab sapiente adipisci eligendi nihil quis aspernatur voluptatibus, nesciunt facilis molestias officiis eveniet debitis voluptate enim odit quasi reiciendis. Nam expedita veritatis, quam ullam, praesentium quia sunt sint maiores voluptatem aut, animi ipsam tempora ad error libero nisi hic blanditiis iste vel deserunt obcaecati sed?</p>
        </div>
      </div>

      <div class="user__section text__color--dark background__color--light">
        <button class="user__section__button" @click="showUserContainer($event)">
          Twoje rezerwacje 
          <i class="fas fa-caret-down hide show" /><i class="fas fa-caret-up hide" />
        </button>
        <div class="user__section__container">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates sequi quasi beatae aliquid doloribus rem nulla aspernatur quidem, incidunt labore amet repellat magnam veniam architecto temporibus maxime? Provident quod, libero non, earum tenetur minus sit harum consectetur ex laudantium autem, asperiores quas id repellat maiores quaerat recusandae nisi! Dolor quo cupiditate, nisi doloremque, similique veniam ab sapiente adipisci eligendi nihil quis aspernatur voluptatibus, nesciunt facilis molestias officiis eveniet debitis voluptate enim odit quasi reiciendis. Nam expedita veritatis, quam ullam, praesentium quia sunt sint maiores voluptatem aut, animi ipsam tempora ad error libero nisi hic blanditiis iste vel deserunt obcaecati sed?</p>
        </div>
      </div>

      <div class="user__section text__color--dark background__color--light">
        <button class="user__section__button" @click="showUserContainer($event)">
          Wiadomości 
          <i class="fas fa-caret-down hide show" /><i class="fas fa-caret-up hide" />
        </button>
        <div class="user__section__container">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates sequi quasi beatae aliquid doloribus rem nulla aspernatur quidem, incidunt labore amet repellat magnam veniam architecto temporibus maxime? Provident quod, libero non, earum tenetur minus sit harum consectetur ex laudantium autem, asperiores quas id repellat maiores quaerat recusandae nisi! Dolor quo cupiditate, nisi doloremque, similique veniam ab sapiente adipisci eligendi nihil quis aspernatur voluptatibus, nesciunt facilis molestias officiis eveniet debitis voluptate enim odit quasi reiciendis. Nam expedita veritatis, quam ullam, praesentium quia sunt sint maiores voluptatem aut, animi ipsam tempora ad error libero nisi hic blanditiis iste vel deserunt obcaecati sed?</p>
        </div>
      </div>
    </main>
    <!-- wypełniacz okna dla usera, który nie jest zalogowany -->
    <div v-show="!isLoggedUser" class="container" />
    <!-- okna modalne -->
    <UserModal v-show="isUserModalVisible" />
    <ModalLoading v-show="isLoadingVisible" />
    <MainFooter />
  </div>
</template>

<script>
import MainMenu from "@/components/MainMenu";
import MainFooter from "@/components/MainFooter";
import InputText from "@/components/InputText";
import InputEmail from "@/components/InputEmail";
import ModalLoading from "@/components/LoadingLineDots";
import ModalInfo from "@/components/ModalInfo";
import firebase from "@/firebase.js";
import UserModal from "@/components/UserModal";
import { mapState }  from "vuex";
export default {
  name: "UserAccount",
  components: { MainMenu, MainFooter, UserModal, ModalLoading },
  data() {
    return{
      isLoadingVisible: false,isModalInfoVisible: false, isUserModalVisible: true,
      modalTitle: '', modalMsg: '', 
      modalIsError: true,  //flaga określająca czy pokazywane okno modalne jest błędem
      isLoggedUser: false,
    }
  },
  computed: {
    ...mapState ({  //mapujemy zmienne z magazynu
      currentUser: 'user' //user firebase
    })
  },
  mounted(){
    if(this.currentUser.loggedIn){
      if(!this.currentUser.data.isAnonymous){
        this.isLoggedUser = true; //jest zalogowany użytkownik, i nie jest to użytkownik anonimowy używany do wyświetlania danych z bazy
        this.isUserModalVisible = false;
      }
    }
  },
  methods: {
    showUserContainer(e){
      let b = e.target;
      if(b.nodeName!='BUTTON') { //kliknięto ikone strzałki
        b = b.parentNode;
      } 
      let p = b.parentNode; //nadrzędny kontener
      let c = b.nextSibling; //kontener z elementami sekcji
      p.classList.toggle('user__section--grow');
      c.classList.toggle('user__section__container--grow');
      //zmieniamy strzałki
      b.getElementsByTagName("I").forEach(element => {
        element.classList.toggle('show');
      });

    }
  },
};
</script>

<style scoped>
.user__section{
  padding: .75rem 1.5rem;
  border-bottom: 1px solid rgb(60, 84, 180);
}
.user__section--grow{
  margin-bottom: 1rem;
}
.user__section__button{
  cursor: pointer;
  display: block;
  width: 100%;
  height: 2.75em;
  padding: .35rem .75rem;
  font-weight: bolder;
  font-size: 1em;
  line-height: 1.5;
  border: 2px solid rgb(60, 84, 180);
  border-radius: .4rem;
  -moz-transition: all .5s ease-in-out;
  -ms-transition: all .5s ease-in-out;
  -o-transition: all .5s ease-in-out;
  -webkit-transition: all .5s ease-in-out;
  transition: all .5s ease-in-out;
}
.user__section__button > i {
  margin-left: 0.5rem;
}
.user__section__button:hover {
  background-color:rgb(60, 84, 180);
  color: rgb(251, 252, 253);
}
.user__section__container{
  -moz-transition: all .5s ease-in-out;
  -ms-transition: all .5s ease-in-out;
  -o-transition: all .5s ease-in-out;
  -webkit-transition: all .5s ease-in-out;
  transition: all .5s ease-in-out;
  max-height: 0;
  overflow: auto;
}
.user__section__container--grow{
  max-height: 50vh;
  margin-top: 0.75rem;
}
#userAccount{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.container{
  flex: 1;
}
.hide:not(.show) {
  display: none;
}
@media only screen and (min-width: 640px){
}
@media only screen and (min-width: 768px) {
  .user__section{
    padding: .5rem 0.5rem;
    margin-left: 5%;
    margin-right: 5%;
    display: flex;
    float: left;
  }
  .user__section__container{
    max-width: 70%;
    margin-left: 1rem;
  }
  .user__section__button{
    width: 30%;
  }
}
@media only screen and (min-width: 1200px) {
  .user__section__button{
    width: 15%;
  }
}
</style>

