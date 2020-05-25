
<template>
  <transition name="modal-fade">
    <div class="modal--backdrop">
      <div class="modal">
          <img src="/bookmark-icon/1.blue.svg" alt="logo" class="logo">
          <div class="login__buttons">
              <button :class="loginCreate ? 'login__button--active' : 'login__button--inactive'" @click="loginCreate=!loginCreate">Logowanie</button>
              <button :class="loginCreate ? 'login__button--inactive' : 'login__button--active'" @click="loginCreate=!loginCreate">Utwórz konto</button>
          </div>
          <form action="/user" class="userform" @submit.prevent="logIn($event)">
              <div class="userform__group">
                  <label class="userform__label" for="email">E-mail<span class="text__color--gray"></span></label>
                  <InputEmail id="email" ref="email" :error-text="'Proszę podać poprawny adres e-mail.'" />
              </div>
              <div class="userform__group">
                  <label class="userform__label" for="password">Hasło<span class="text__color--gray"></span></label>
                  <InputText id="password" ref="password" :min-length="6" :error-text="'Hasło musi mieć minimum 6 znaków.'" />
              </div>
              <button type="submit" class="userform__button background__color--light">Zaloguj się</button>
          </form>
      </div>
    </div>
  </transition>
</template> 

<script>
import InputText from "@/components/InputText";
import InputEmail from "@/components/InputEmail";
import ModalLoading from "@/components/LoadingLineDots";
import ModalInfo from "@/components/ModalInfo";
export default { 
    name: "userLoginCreate",
    components: { InputText, InputEmail},
    data() {
    return{
      isLoadingVisible: false,isModalInfoVisible: false, 
      modalTitle: '', modalMsg: '', 
      modalIsError: true,  //flaga określająca czy pokazywane okno modalne jest błędem
      loginCreate: true,
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
}
.login__button--active,
.login__button--inactive{
  margin: 1rem 0.5rem;
  cursor: pointer;
  height: 2.3em;
  padding: .35rem .75rem;
  text-align: center;
  vertical-align: middle;
  font-weight: bolder;
  line-height: 1.5;
  border-radius: .25rem;
  -moz-transition: border-color .5s ease-in-out,box-shadow .15s ease-in-out;
  -ms-transition: border-color .5s ease-in-out,box-shadow .15s ease-in-out;
  -o-transition: border-color .5s ease-in-out,box-shadow .15s ease-in-out;
  -webkit-transition: border-color .5s ease-in-out,box-shadow .15s ease-in-out;
  transition: border-color .5s ease-in-out,box-shadow .15s ease-in-out;
}
.login__button--active{
  color: rgb(251, 252, 253);
  background-color: rgb(60, 84, 180);
  border: 1px solid rgb(60, 84, 180);
}
.login__button--inactive{
  border: 1px solid rgb(90, 90, 90);
  color: rgb(90, 90, 90);
  background-color: rgb(251, 252, 253);
}
.login__button--active:hover,
.login__button--inactive:hover{
  box-shadow: 2px 2px 6px #999;
}
.login__buttons{
 justify-content: space-between;
 margin: auto;
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
    margin-top:19%;
    padding-top: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    min-width: 250px;
    height: fit-content;
  }
/* wbudowane klasy Vue */
  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }
  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }
</style>