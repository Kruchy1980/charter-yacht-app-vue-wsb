
<template>
<div>
  <div>
    <div class="modal--backdrop">
      <div class="modal">
          <img src="/bookmark-icon/1.blue.svg" alt="logo" class="logo">
          <span v-show="lUser" class="usermodal__label text__color--primary">Logowanie</span>
          <span v-show="cUser" class="usermodal__label text__color--primary">Rejestracja</span>
          <span v-show="resetPass" class="usermodal__label text__color--primary">Resetowanie hasła</span>
          <form v-show="lUser" action="user" class="userform" @submit.prevent="logIn($event)">
              <div class="userform__group">
                  <label class="userform__label" for="loginEmail">E-mail</label>
                  <InputEmail id="loginEmail" ref="loginEmail" :error-text="'Proszę podać poprawny adres e-mail.'" />
              </div>
              <div class="userform__group">
                  <label class="userform__label" for="loginPassword">Hasło</label>
                  <InputPassword id="loginPassword" ref="loginPassword" :min-length="6" :error-text="'Hasło musi mieć minimum 6 znaków.'" />
              </div>
              <button type="submit" class="userform__button background__color--light">Zaloguj się</button>
              <div class="userform__group">
                <small class="usermodal__small">Nie masz konta? <button type="button" class="usermodal__switchbutton text__color--primary" @click="switchForm('create')">Zarejestruj się</button></small>
                <small class="usermodal__small">Nie pamiętasz hasła? <button type="button" class="usermodal__switchbutton text__color--primary" @click="switchForm('reset')">Zresetuj hasło</button></small>
              </div>
          </form>
          <form v-show="cUser" action="user" class="userform" @submit.prevent="createUser($event)">
              <div class="userform__group">
                  <label class="userform__label" for="createName">Imię</label>
                  <InputText id="createName" ref="createName" :min-length="3" :error-text="'Podaj swoje imię, minimum 3 znaki.'" />
              </div>
              <div class="userform__group">
                  <label class="userform__label" for="createEmail">E-mail</label>
                  <InputEmail id="createEmail" ref="createEmail" :error-text="'Proszę podać poprawny adres e-mail.'" />
              </div>
              <div class="userform__group">
                  <label class="userform__label" for="createPassword">Hasło</label>
                  <InputPassword id="createPassword" ref="createPassword" :min-length="6" :error-text="'Hasło musi mieć minimum 6 znaków.'" />
              </div>
              <div class="userform__group">
                  <label class="userform__label" for="createPassword2">Powtórz hasło</label>
                  <InputPassword id="createPassword2" ref="createPassword2" :min-length="6" :error-text="'Powtórz hasło'" @verifypass="verifyPass" />
              </div>
              <button type="submit" class="userform__button background__color--light">Zarejestruj się</button>
              <small class="usermodal__small">Masz już konto? <button type="button" class="usermodal__switchbutton text__color--primary" @click="switchForm('login')">Zaloguj się</button></small>
          </form>
          <form v-show="resetPass" action="user" class="userform" @submit.prevent="resetPassword($event)">
          <div class="userform__group">
            <p class="userform__label">Podaj adres e-mail powiązany z Twoim kontem. Prześlemy na niego e-mail pozwalający zresetować hasło i ustawić nowe.</p>
            </div>
              <div class="userform__group">
                  <label class="userform__label" for="resetEmail">E-mail</label>
                  <InputEmail id="resetEmail" ref="resetEmail" :error-text="'Proszę podać poprawny adres e-mail.'" />
              </div>
              <button type="submit" class="userform__button background__color--light">Resetuj hasło</button>
              <small class="usermodal__small"><button type="button" class="usermodal__switchbutton text__color--primary" @click="switchForm('login')">wróc do logowania</button></small>
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
      lUser: true,  //flaga służąca do przełączania na logowanie
      cUser: false,  //flaga nowego konta
      resetPass: false, //flaga do przełączenia się na reset hasłą
      targetForm: null, //odnośnik formularza do zatwierdzenia po zamknięciu komunikatu
    }
  },
  methods: {
    verifyPass(){
      let pass1 = this.$refs['createPassword'];
      let pass2 = this.$refs['createPassword2'];
      if(pass2.isValid){
        pass2.comparePass('Hasła muszą być zgodne.',pass1.value);
      }
    },
    closeModal() {
      this.isModalInfoVisible = false;
      if(this.targetForm){
        let target = this.targetForm;
        this.targetForm = null;
        target.submit();
      }
    },
    switchForm(destination){
      if(destination=='reset'){
        this.resetPass = true;
        this.lUser=false;
        this.cUser=false;
      }
      else if(destination=='create')
      {
        this.resetPass = false;
        this.lUser=false;
        this.cUser=true;
      }
      else{
        this.resetPass = false;
        this.lUser=true;
        this.cUser=false;
      }
    },
    logIn(e){
      const that = this;  //zapamiętanie kontekstu
      try{
        let valid = true; //zmienna pomocnicza
        let controls = ['loginEmail','loginPassword']
        controls.forEach(element => {
          let el = that.$refs[element]
          if(!el.isValid){
            valid=false;
            that.$refs[element].setState();  //uruchamiamy alert na kontrolce
          }
        });
        if(valid){
          that.isLoadingVisible=true;
          let mail = that.$refs['loginEmail'];
          let pass = that.$refs['loginPassword'];
          firebase.auth().signInWithEmailAndPassword(mail.value,pass.value)
          .then(function(data){
            e.target.submit();  //odświeżamy okno
          })
          .catch(function(error){
            that.modalIsError = true;
            that.isLoadingVisible=false;
            if(error.code=='auth/user-disabled'){
              that.modalTitle='Błąd - konto wyłączone';
              that.modalMsg='Twoje konto zostało zablokowane. Skontaktuj się z nami przy pomocy formularza kontaktowego w celu odblokowania konta.';
            }
            else if(error.code=='auth/user-not-found'){
              that.modalTitle='Błąd - konto nie istnieje';
              that.modalMsg='Nie istnieje konto powiązane z podanym adresem e-mail.';
            }
            else if(error.code=='auth/wrong-password'){
              that.modalTitle='Błąd - niepoprawne hasło';
              that.modalMsg='Podane hasło jest błędne. Wprowadź poprawne hasło.';
            }
            else{
              that.modalTitle='Błąd '+error.code;
              that.modalMsg=error.message;
            }
            console.error(that.modalTitle, that.modalMsg);
            that.isModalInfoVisible = true;
          });
        }
      }
      catch(err){
        that.modalIsError = true;
        that.isLoadingVisible=false;
        console.error("Error log in user: ", err);
        that.modalTitle ='Błąd logowania użytkownika!'
        that.modalMsg = err;
        that.isModalInfoVisible = true;
      }
    },
    createUser(e){
      const that = this;  //zapamiętanie kontekstu
      try{
        let valid = true; //zmienna pomocnicza
        let controls = ['createName','createEmail','createPassword']
        controls.forEach(element => {
          let el = that.$refs[element]
          if(!el.isValid){
            valid=false;
            that.$refs[element].setState();  //uruchamiamy alert na kontrolce
          }
        });
        //kontrola hasła 2 osobno
        if(!that.$refs['createPassword2'].isValid){
          valid=false;
          that.$refs['createPassword2'].comparePass('Hasła muszą być zgodne.',that.$refs['createPassword'].value);;
        }

        if(valid){
          let mail = that.$refs['createEmail'];
          let pass = that.$refs['createPassword'];
          let name = that.$refs['createName'];
          that.isLoadingVisible=true;
          firebase.auth().createUserWithEmailAndPassword(mail.value,pass.value)
          .then(function(data){
            data.user.updateProfile({
              displayName: name.value
            })
            .then(function(){
              that.isLoadingVisible=false;
              e.target.submit();
            });
          })
          .catch(function(error){
            that.modalIsError = true;
            that.isLoadingVisible=false;
            if(error.code=='auth/email-already-in-use'){
              that.modalTitle='Błąd - takie konto już istnieje';
              that.modalMsg='Istnieje już konto powiązane z podanym adresem e-mail. Użyj innego adresu e-mail lub zaloguj się na podany adres e-mail.';
            }
            else{
              that.modalTitle='Błąd '+error.code;
              that.modalMsg=error.message;
            }
            console.error(that.modalTitle, that.modalMsg);
            that.isModalInfoVisible = true;
          });
        }
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
    resetPassword(e){
      const that = this;
      try{
        let mail = that.$refs['resetEmail'];
        if(!mail.isValid){
          mail.setState();
        }
        else{
          that.isLoadingVisible=true;
          firebase.auth().sendPasswordResetEmail(mail.value)
          .then(function(){
            that.modalIsError = false;
            that.modalTitle = 'E-mail wysłany';
            that.modalMsg = 'Na podany adres e-mail została wysłana wiadomość. Postępuj zgodnie z poleceniami zawartymi w wiadomości.';
            that.isModalInfoVisible = true;
            that.targetForm = e.target; 
          })
          .catch(function(error){
            that.modalIsError = true;
            that.isLoadingVisible=false;
            if(error.code=='auth/user-not-found'){
              that.modalTitle='Błąd - takie konto nie istnieje';
              that.modalMsg='Nie istnieje konto powiązane z podanym adresem e-mail. Użyj innego adresu e-mail.';
            }
            else{
              that.modalTitle='Błąd '+error.code;
              that.modalMsg=error.message;
            }
            console.error(that.modalTitle, that.modalMsg);
            that.isModalInfoVisible = true;
          });
        }
      }
      catch(err){
        that.modalIsError = true;
        that.isLoadingVisible=false;
        console.error("Error reset user password: ", err);
        that.modalTitle ='Błąd resetu hasła użytkownika!'
        that.modalMsg = err;
        that.isModalInfoVisible = true;
      }
    }
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
  margin-left: 2rem;
  margin-right: 2rem;
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
  max-width: 500px;
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