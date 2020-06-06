<template>
  <transition name="modal-fade">
    <div class="modal--backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        
        <header id="modalTitle" class="modal__header text__color--dark">
            <h5>Usuwanie konta</h5>
          <button type="button" class="button--close text__color--dark" aria-label="Close modal" @click="close">&times;</button>
        </header>

        <section id="modalBody" class="modal__body text__color--dark">
            <div class="body__group">
                <p class="body__p text__color--red">Czy jesteś pewien i chcesz usunąć swoje konto?</p>
            </div>
            <p class="body__p">Podaj aktualne dane konta aby potwierdzić usunięcie konta.</p>
            <div class="body__group">
                  <label class="body__label" for="loginEmail">E-mail:</label>
                  <InputEmail id="loginEmail" ref="loginEmail" :error-text="'Proszę podać poprawny adres e-mail.'" />
              </div>
              <div class="body__group">
                  <label class="body__label" for="loginPassword">Hasło:</label>
                  <InputPassword id="loginPassword" ref="loginPassword" :min-length="6" :error-text="'Hasło musi mieć minimum 6 znaków.'" />
              </div>
        </section>

        <footer class="modal__footer">
          <slot name="footer">
            <button type="button" class="button--red" aria-label="Delete account" @click="deleteAccount">Zatwierdź</button>
            <button type="button" class="button--gray" aria-label="Close modal" @click="close">Anuluj</button>
          </slot>
        </footer>

      </div>
    </div>
  </transition>
</template>

<script>
import InputEmail from "@/components/InputEmail";
import InputPassword from "@/components/InputPassword";

export default {
    name: 'UserDeleteAccount',
    components: { InputEmail, InputPassword },
    methods: {
        close() {
            this.$emit('close');
        },
        //weryfikacja stanu kontrolki
        deleteAccount(){
            let valid = true; //zmienna pomocnicza
            let mail = this.$refs['loginEmail'];
            let pass = this.$refs['loginPassword'];
            let controls = [mail,pass];
            controls.forEach(element => {
            if(!element.isValid){
                valid=false;
                element.setState();  //uruchamiamy alert na kontrolce
            }
            });
            if(valid){
                this.$emit('deleteAccount',mail.value,pass.value);
            }
        },
    },
}
</script>

<style scoped>
.body__p{
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
}
.body__label{
    margin-bottom: 0.25rem;
    font-size: .9rem;
}
.body__group{
    display: flex;
    flex-direction: column;
    margin-bottom: .25rem;
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
    align-items: center;
}
.modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    min-width: 250px;
}
.modal__body {
    position: relative;
    padding: .5rem 1rem;
    color: rgb(33, 37, 41);
    font-size: 1em;
}
.modal__footer {
    border-top: 1px solid #eee;
    justify-content: flex-end;
    padding: .5rem;
    display: flex;
    flex-direction: row
}
.modal__header{
    padding-top: .5rem;
    padding-left: .5rem;
    padding-right: .5rem;
    padding-bottom: .25rem;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #eee;
    justify-content: space-between;
}
.button--close {
    border: none;
    font-size: 1.4rem;
    padding-left: .5rem;
    padding-right: .5rem;
    cursor: pointer;
    font-weight: bold;
    color: rgb(60, 84, 180);
    background: transparent;
}
.button--gray,
.button--red{
    width: auto;
    cursor: pointer;
    height: 2.1em;
    padding: .4rem .75rem;
    text-align: center;
    vertical-align: middle;
    font-weight: bolder;
    font-size: 0.9em;
    border-radius: .25rem;
    margin-right: .5rem;
    -moz-transition: border-color .5s ease-in-out,box-shadow .15s ease-in-out;
    -ms-transition: border-color .5s ease-in-out,box-shadow .15s ease-in-out;
    -o-transition: border-color .5s ease-in-out,box-shadow .15s ease-in-out;
    -webkit-transition: border-color .5s ease-in-out,box-shadow .15s ease-in-out;
    transition: border-color .5s ease-in-out,box-shadow .15s ease-in-out;
}
.button--gray{
    border: 1px solid rgb(108, 117, 125);
    color: rgb(108, 117, 125);
}
.button--gray:hover{
    color: rgb(251, 252, 253);
    background-color: rgb(108, 117, 125);
    box-shadow: 2px 2px 6px #999;
}
.button--red{
    border: 1px solid rgb(255, 0, 0);
    color: rgb(255, 0, 0);
}
.button--red:hover{
    color: rgb(251, 252, 253);
    background-color: rgb(255, 0, 0);
    box-shadow: 2px 2px 6px #999;
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
@media only screen and (min-width: 768px){
    .body__group{
        flex-direction: row;
        align-items: baseline;
    }
    .modal{
        min-width: 500px;
        width: fit-content;
    }
    .modal__header{
        padding-bottom: 0.2rem;
        margin-bottom: 0.4rem;
    }
    .modal__footer{
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
    }
} 
</style>
