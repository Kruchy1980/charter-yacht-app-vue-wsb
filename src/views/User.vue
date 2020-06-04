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
          <h3>Podstawowe dane</h3>
          <div class="user__form__group">
            <label for="userName" class="user__form__label">Imię:</label>
            <div class="user__section__group">
              <input v-model="userName" type="text" class="user__form__input text__color--dark" readonly>
              <button v-tooltip.right="'zmień imię'" @click="isUserChangeName=!isUserChangeName" class="user__form__button"><i class="fas fa-edit"></i></button>
            </div>
          </div>
          <div class="user__form__group">
            <label for="userName" class="user__form__label">E-mail:</label>
            <div class="user__section__group">
              <input v-model="userMail" type="text" class="user__form__input text__color--dark" readonly>
              <button v-tooltip.right="'zmień e-mail'" @click="isUserChangeMail=!isUserChangeMail" class="user__form__button"><i class="fas fa-edit"></i></button>
            </div>
          </div>
          <div class="user__button__group">
            <button @click="isUserChangePass=!isUserChangePass" class="user__button--red">Zmień hasło</button>
            <button @click="isUserDeleteAccount=!isUserDeleteAccount" class="user__button--red">Usuń konto</button>
          </div>
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
    <div v-show="!isLoggedUser" class="container"></div>
    <!-- okna modalne -->
    <ModalInfo v-show="isModalInfoVisible" :is-error="modalIsError" @close="closeModalInfo">
      <template v-slot:header>{{modalTitle}}</template>
      <template v-slot:body><div>{{modalMsg}}</div></template>
    </ModalInfo>
    <UserModal v-show="isUserModalVisible" />
    <ModalLoading v-show="isLoadingVisible" />
    <UserChangeName v-show="isUserChangeName" @close="isUserChangeName=!isUserChangeName" @changeName="changeUserName" />
    <UserChangeMail v-show="isUserChangeMail" @close="isUserChangeMail=!isUserChangeMail" @changeMail="changeUserMail" />
    <UserChangePass v-show="isUserChangePass" @close="isUserChangePass=!isUserChangePass" @changePass="changeUserPass" />
    <UserDeleteAccount v-show="isUserDeleteAccount" @close="isUserDeleteAccount=!isUserDeleteAccount" @deleteAccount="userDeleteAccount" />
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
import UserChangeName from "@/components/userProfile/UserChangeName";
import UserChangeMail from "@/components/userProfile/UserChangeMail";
import UserChangePass from "@/components/userProfile/UserChangePass";
import UserDeleteAccount from "@/components/userProfile/UserDeleteAccount";
import { mapState }  from "vuex";
export default {
  name: "userAccount",
  components: { MainMenu, MainFooter, UserModal, ModalLoading, ModalInfo, UserChangeName,UserChangeMail,UserChangePass,UserDeleteAccount },
  data() {
    return{
      isLoadingVisible: false,isModalInfoVisible: false, isUserModalVisible: true,
      modalTitle: '', modalMsg: '', 
      modalIsError: true,  //flaga określająca czy pokazywane okno modalne jest błędem
      isLoggedUser: false,
      isUserChangeName: false,
      isUserChangeMail: false,
      isUserChangePass: false,
      isUserDeleteAccount: false,
      userName: '',
      userMail: '',
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
        this.userName = this.currentUser.data.displayName;
        this.userMail = this.currentUser.data.email;
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
    },
    closeModalInfo() {
      this.isModalInfoVisible = false;
    },
    showError(error,title){
      this.modalIsError = true;
      this.isLoadingVisible=false;
      this.modalTitle=title+' '+error.code;
      this.modalMsg=error.message;
      console.error(this.modalTitle, this.modalMsg);
      this.isModalInfoVisible = true;
    },
    changeUserName(newName){
      const that = this;
      try{
        if(that.isLoggedUser){
          that.isLoadingVisible = true; //animacja
          let user = firebase.auth().currentUser; //bieżący user zalogowany
          user.updateProfile({
            displayName: newName
          })
          .then(()=>{
            that.$store.dispatch("fetchUser", user);  //odświeżamy usera
            that.userName = that.currentUser.data.displayName;
            that.isLoadingVisible = false;  //zamykamy animację
            that.isUserChangeName=false;  //zamykamy okno
          })
          .catch(function(error){
            that.showError(error,'Błąd: ');
          });
        }
      }
      catch(err){
        that.showError(err,'error change user name: ');
      }
    }, 
    changeUserMail(newMail,oldMail,pass){
      const that = this;
      try{
        if(that.isLoggedUser){
          that.isLoadingVisible = true; //animacja
          let user = firebase.auth().currentUser; //bieżący user zalogowany
          //ponownie uwierzytelniamy usera
          let credentials = firebase.auth.EmailAuthProvider.credential(oldMail,pass);
          user.reauthenticateWithCredential(credentials)
          .then(()=>{
            user.updateEmail(newMail)
            .then(()=>{
              that.$store.dispatch("fetchUser", user);  //odświeżamy usera
              that.userMail = that.currentUser.data.email;
              that.isLoadingVisible = false;  //zamykamy animację
              that.isUserChangeMail=false;  //zamykamy okno
            })
            .catch(function(error){
              that.showError(error,'Błąd zmiany adresu e-mail: ');
            });
          })
          .catch(function(error){
            that.showError(error,'Błąd uwierzytelniania: ');
          });
        }
      }
      catch(err){
        that.showError(err,'error change user mail: ');
      }
    },
    changeUserPass(newPass,mail,oldPass){
      const that = this;
      try{
        if(that.isLoggedUser){
          if(that.isLoggedUser){
            that.isLoadingVisible = true; //animacja
            let user = firebase.auth().currentUser; //bieżący user zalogowany
            //ponownie uwierzytelniamy usera
            let credentials = firebase.auth.EmailAuthProvider.credential(mail,oldPass);
            user.reauthenticateWithCredential(credentials)
            .then(()=>{
              user.updatePassword(newPass)
              .then(()=>{
                that.$store.dispatch("fetchUser", user);  //odświeżamy usera
                that.isLoadingVisible = false;  //zamykamy animację
                that.isUserChangePass=false;  //zamykamy okno
                //komunikat z potwierdzeniem zmiany
                that.modalIsError = false;  
                that.modalTitle='Zmiana hasła';
                that.modalMsg='Twoje hasło zostało zmienione.';
                that.isModalInfoVisible = true;
              })
              .catch(function(error){
                that.showError(error,'Błąd zmiany hasła: ');
              });
            })
            .catch(function(error){
              that.showError(error,'Błąd uwierzytelniania: ');
            });
          }
        }
      }
      catch(err){
        that.showError(err,'error change user password: ');
      }
    },
    userDeleteAccount(mail,pass){
      const that = this;
      try{
        if(that.isLoggedUser){
          if(that.isLoggedUser){
            that.isLoadingVisible = true; //animacja
            let user = firebase.auth().currentUser; //bieżący user zalogowany
            //ponownie uwierzytelniamy usera
            let credentials = firebase.auth.EmailAuthProvider.credential(mail,pass);
            user.reauthenticateWithCredential(credentials)
            .then(()=>{
              user.delete()
              .then(()=>{
                that.$store.dispatch("fetchUser", user);  //odświeżamy usera
                that.isLoadingVisible = false;  //zamykamy animację
                that.isUserDeleteAccount=false;  //zamykamy okno
                //komunikat z potwierdzeniem zmiany
                that.modalIsError = false;  
                that.modalTitle='Usuwanie konta';
                that.modalMsg='Twoje konto zostało usunięte.';
                that.isModalInfoVisible = true;
                setTimeout(() => that.$router.go(0), 5000); //odświeżamy bieżącą stronę po 5sek -> spowoduje załadowanie strony logowania
              })
              .catch(function(error){
                that.showError(error,'Błąd usuwania konta: ');
              });
            })
            .catch(function(error){
              that.showError(error,'Błąd uwierzytelniania: ');
            });
          }
        }
      }
      catch(err){
        that.showError(err,'error delete user: ');
      }
    }
  },
};
</script>

<style scoped>
.user__form__button,
.user__button--red{
  height: 2em;
  width: 2.5em;
  border-radius: 0.25rem;
  border: 1px solid rgb(90, 90, 90);
  background-color: #e9ecef;
  cursor: pointer;
  color: rgb(33, 37, 41);
  -moz-transition: all .5s ease-in-out;
  -ms-transition: all .5s ease-in-out;
  -o-transition: all .5s ease-in-out;
  -webkit-transition: all .5s ease-in-out;
  transition: all .5s ease-in-out;
}
.user__form__button{
  margin-left: 0.5rem;
}
.user__form__button:hover{
  background-color:rgb(60, 84, 180);
  color: rgb(251, 252, 253)!important;
}
.user__button--red{
  margin-right: 0.5rem;
  padding: .33rem .75rem;
  width: auto;
}
.user__button--red:hover{
  background-color:rgb(255,0,0);
  color: rgb(251, 252, 253)!important;
}
.user__form__input{
  width: 80%;
  height: 2em;
  padding: 0.375rem 0.75rem;
  font-size: 0.9rem;
  font-weight: normal;
  line-height: 1.5;
  background-color: #e9ecef;
  border: 1px solid rgb(90, 90, 90);
  border-radius: 0.25rem;
}
.user__form__label {
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
}
.user__form__group{
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
}
.user__button__group{
  margin-top: 0.75rem;
  margin-left: 0.5rem;
}
.user__section{
  padding: .75rem 1.5rem;
  border-bottom: 1px solid rgb(60, 84, 180);
  -moz-transition: all .5s ease-in-out;
  -ms-transition: all .5s ease-in-out;
  -o-transition: all .5s ease-in-out;
  -webkit-transition: all .5s ease-in-out;
  transition: all .5s ease-in-out;
}
.user__section--grow{
  margin-bottom: 1rem;
}
.user__section__group{
  display: flex;
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
  background-color: rgb(251, 252, 253);
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
  width: auto;
  flex-grow: 100;
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
  .user__form__button{
    height: 2.2em;
  }
  .user__form__input{
    font-size: 1rem;
  }
  .user__form__label {
    margin-bottom: 0rem;
    margin-right: 0.5rem;
    font-size: 1rem;
    text-align: end;
    width: 5rem;
  }
  .user__form__group{
    flex-direction: row;
    align-items: baseline;
    flex-grow: 1;
  }
  .user__section__group{
    flex-direction: row;
    align-items: baseline;
    flex-grow: 1;
  }
  .user__section{
    padding: .5rem 0.5rem;
    margin-left: 5%;
    margin-right: 5%;
    display: flex;
  }
  .user__section__container{
    max-width: 65%;
    margin-left: 1rem;
  }
  .user__section__button{
    width: 27%;
  }
}
@media only screen and (min-width: 1200px) {
  .user__form__input{
    max-width: 50%;
  }
  .user__section__container{
    max-width: 75%;
  }
  .user__section__button{
    width: 20%;
  }
}
</style>

