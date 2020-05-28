
<template>
<div>
  <div>
    <div class="modal--backdrop">
      <div class="modal">
          <img src="/bookmark-icon/1.blue.svg" alt="logo" class="logo">
          <span v-show="loginSignin" class="usermodal__label text__color--primary">Logowanie</span>
          <span v-show="!loginSignin" class="usermodal__label text__color--primary">Rejestracja</span>
          <form v-show="loginSignin" action="/user" class="userform" @submit.prevent="logIn($event)">
              <div class="userform__group">
                  <label class="userform__label" for="loginEmail">E-mail</label>
                  <InputEmail id="loginEmail" ref="loginEmail" :error-text="'Proszę podać poprawny adres e-mail.'" />
              </div>
              <div class="userform__group">
                  <label class="userform__label" for="loginPassword">Hasło</label>
                  <InputPassword id="loginPassword" ref="loginPassword" :min-length="6" :error-text="'Hasło musi mieć minimum 6 znaków.'" />
              </div>
              <button type="submit" class="userform__button background__color--light">Zaloguj się</button>
              <small class="usermodal__small">Nie masz konta? <button class="usermodal__switchbutton text__color--primary" @click="loginSignin=!loginSignin">Zarejestruj się</button></small>
          </form>
          <form v-show="!loginSignin" action="/user" class="userform" @submit.prevent="createUser($event)">
              <div class="userform__group">
                  <label class="userform__label" for="signinName">Imię</label>
                  <InputText id="signinName" ref="signinName" :min-length="3" :error-text="'Podaj swoje imię, minimum 3 znaki.'" />
              </div>
              <div class="userform__group">
                  <label class="userform__label" for="signinEmail">E-mail</label>
                  <InputEmail id="signinEmail" ref="signinEmail" :error-text="'Proszę podać poprawny adres e-mail.'" />
              </div>
              <div class="userform__group">
                  <label class="userform__label" for="signinPassword">Hasło</label>
                  <InputPassword id="signinPassword" ref="signinPassword" :min-length="6" :error-text="'Hasło musi mieć minimum 6 znaków.'" />
              </div>
              <div class="userform__group">
                  <label class="userform__label" for="signinPassword2">Powtórz hasło</label>
                  <InputPassword id="signinPassword2" ref="signinPassword2" :min-length="6" :error-text="'Powtórz hasło'" @verifypass="verifyPass" />
              </div>
              <button type="submit" class="userform__button background__color--light">Zarejestruj się</button>
              <small class="usermodal__small">Masz już konto? <button class="usermodal__switchbutton text__color--primary" @click="loginSignin=!loginSignin">Zaloguj się</button></small>
          </form>
      </div>
    </div>
    <!-- okna modalne -->
    <ModalLoading v-show="isLoadingVisible" />
    <ModalInfo v-show="isModalInfoVisible" :is-error="modalIsError" @close="closeModal">
      <template v-slot:header>{{modalTitle}}</template>
      <template v-slot:body><div>{{modalMsg}}</div></template>
    </ModalInfo>
  </div>
</div>
  
</template> 

<script>
import InputText from "@/components/InputText";
import InputEmail from "@/components/InputEmail";
import InputPassword from "@/components/InputPassword";
import ModalLoading from "@/components/LoadingLineDots";
import ModalInfo from "@/components/ModalInfo";
import firebase from "@/firebase.js";
import { mapState }  from "vuex";

export default { 
    name: "userLoginCreate",
    components: { InputEmail, InputPassword, InputText, ModalLoading, ModalInfo},
    data() {
    return{
      isLoadingVisible: false,isModalInfoVisible: false, 
      modalTitle: '', modalMsg: '', 
      modalIsError: true,  //flaga określająca czy pokazywane okno modalne jest błędem
      loginSignin: true,  //flaga służąca do przełączania logowanie/zakładanie konta
    }
  },
  // computed: {
  //   ...mapState ({  //mapujemy zmienne z magazynu
  //     currentUser: 'user' //user firebase
  //   })
  // },
  methods: {
    verifyPass(pass){
      let pass1 = this.$refs['signinPassword'];
      let pass2 = this.$refs['signinPassword2'];
      if(pass2.isValid){
        if(pass1.value!=pass){
          pass2.setInValid('Hasła muszą być zgodne.');
        }
        else{
          pass2.setValid();
        }
      }
    },
    closeModal() {
      this.isModalInfoVisible = false;
    },
    logIn(e){

    },
    createUser(e){
      const that = this;  //zapamiętanie kontekstu
      try{
        let mail = that.$refs['signinEmail'];
        let pass = that.$refs['signinPassword'];
        firebase.auth().createUserWithEmailAndPassword(mail.value,pass.value)
        .then(function(data ){
          alert(data.user.uid);
          e.target.submit();  //zatwierdzamy formularz
        })
        .catch(function(error){
          if(error.code=='auth/email-already-in-use'){
            that.modalIsError = true;
            that.isLoadingVisible=false;
            that.modalTitle='Błąd - takie konto już istnieje';
            that.modalMsg='Istnieje już konto powiązane z podanym adresem e-mail. Użyj innego adresu e-mail lub zaloguj się na podany adres e-mail.';
            console.error(that.modalTitle, that.modalMsg);
            that.isModalInfoVisible = true;
          }
          else{
            that.modalIsError = true;
            that.isLoadingVisible=false;
            that.modalTitle='Błąd '+error.code;
            that.modalMsg=error.message;
            console.error(that.modalTitle, that.modalMsg);
            that.isModalInfoVisible = true;
          }
        });
      }
      catch(err){
        that.modalIsError = true;
        that.isLoadingVisible=false;
        console.error("Error create user: ", err);
        that.modalTitle ='Błąd rejestracji użytkownika!'
        that.modalMsg = err;
        that.isModalInfoVisible = true;
      }
    },
  }
}
</script>

<style scoped>
.userform__button{
  margin-top: 0.5rem;
  width: 100%;
  cursor: pointer;
  height: 2.3em;
  padding: .35rem .75rem;
  text-align: center;
  vertical-align: middle;
  font-weight: bolder;
  line-height: 1.5;
  border: 1px solid rgb(90, 90, 90);
  color: rgb(90, 90, 90);
  border-radius: .25rem;
  -moz-transition: border-color .5s ease-in-out,box-shadow .15s ease-in-out;
  -ms-transition: border-color .5s ease-in-out,box-shadow .15s ease-in-out;
  -o-transition: border-color .5s ease-in-out,box-shadow .15s ease-in-out;
  -webkit-transition: border-color .5s ease-in-out,box-shadow .15s ease-in-out;
  transition: border-color .5s ease-in-out,box-shadow .15s ease-in-out; 
}
.userform__button:hover{
  color: rgb(251, 252, 253)!important;
  background-color: rgb(90, 90, 90)!important;
  box-shadow: 2px 2px 6px #999;
}
.userform__label{
    margin-bottom: 0.25rem;
    font-size: .9rem;
}
.userform__group{
    display: flex;
    flex-direction: column;
    margin-bottom: .25rem;
}
.userform{
    margin-top: 0.5rem;
    margin-right: auto;
    margin-left: auto;
    -moz-transition: all .5s ease-in-out;
    -ms-transition: all .5s ease-in-out;
    -o-transition: all .5s ease-in-out;
    -webkit-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
}
.usermodal__switchbutton{
  background-color: transparent;
  border: none;
  padding: 3px;
  border-radius: 5px;
  border: 1px solid transparent;
  margin-top: 0.25rem;
}
.usermodal__switchbutton:hover{
  border-color:  rgb(60, 84, 180);
  cursor: pointer;
}
.usermodal__small{
  margin-left: 0.5rem;
  margin-right: auto;
}
.usermodal__label{
  margin: 0 auto;
  margin-top: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border-radius: 10px;
  border: 1.25px solid rgb(60, 84, 180);
  font-weight: bolder;
}
.logo {
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  height: 4rem;
}
.modal--backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
  }
.modal {
    margin-top: 4.5rem;
    padding-top: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-bottom: 1rem;
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    min-width: 250px;
    height: fit-content;
  }

@media only screen and (min-width: 768px){
  .modal{
    margin-top: 5rem;
    padding-top: 1rem;
    padding-left: 3rem;
    padding-right: 3rem;
  }
}
@media only screen and (min-width: 1200px) {
  .modal{
    margin-top: 5%;
  }
}
</style>