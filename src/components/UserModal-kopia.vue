
<template>
  <transition name="modal-fade">
    <div class="modal--backdrop">
      <div class="modal">
          <img src="/bookmark-icon/1.blue.svg" alt="logo" class="logo">
          <div class="login__buttons">
              <button class="login__button--active">Zaloguj się</button>
              <button class="login__button--inactive">Utwórz konto</button>
          </div>
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
    components: {},
    data() {
    return{
      isLoadingVisible: false,isModalInfoVisible: false, 
      modalTitle: '', modalMsg: '', 
      modalIsError: true,  //flaga określająca czy pokazywane okno modalne jest błędem
    }
  }
}
</script>

<style scoped>
.login__button--active,
.login__button--inactive{
  width: 2rem;
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
.login__button--active{

}
.login__button--inactive{
}
.login__buttons{
 justify-content: space-between;
 margin: 0.5rem auto;
}
.logo {
  margin-top: 0.5rem;
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