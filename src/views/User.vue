<template>
  <div id="userAccount">
    <MainMenu />
    <main class="container">
      <div v-show="isLoggedUser">
        <section class="section background__color--light">
          <article class="article">
            <h2 class="article__title">Twoje konto</h2>
            
          </article>
        </section>
      </div>
    </main>
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
  name: "userAccount",
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
};
</script>

<style scoped>
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
#userAccount{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.container{
  flex: 1;
}
@media only screen and (min-width: 640px){
  .section{
    margin-top: 15%;
  }
}
@media only screen and (min-width: 768px) {
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

