<template>
  <transition name="modal-fade">
    <div class="modal--backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription" >
        
        <header id="modalTitle" class="modal__header text__color--dark" >
            <h5>Zmiana imienia</h5>
          <button type="button" class="button--close text__color--dark" @click="close" aria-label="Close modal" >&times;</button>
        </header>

        <section id="modalBody" class="modal__body text__color--dark">
            <div class="body__group">
                <label class="body__label" for="name">Nowe imię:</label>
                <InputText id="name" ref="name" :min-length="3" :error-text="'Podaj swoje imię, minimum 3 znaki.'" />
            </div>
        </section>

        <footer class="modal__footer">
          <slot name="footer">
            <button type="button" class="button--red" @click="changeName" aria-label="Change Name" >Zatwierdź</button>
            <button type="button" class="button--gray" @click="close" aria-label="Close modal" >Anuluj</button>
          </slot>
        </footer>

      </div>
    </div>
  </transition>
</template>

<script>
import InputText from "@/components/InputText";

export default {
    name: 'userChangeName',
    components: { InputText },
    methods: {
        close() {
            this.$emit('close');
        },
        //weryfikacja stanu kontrolki
        changeName(){
            let el = this.$refs['name'];
            if(!el.isValid){
                el.setState(); 
            }
            else{
                //poprawna -> emitujemy zdarzenia z parametrem
                this.$emit('changeName',el.value);
            }
        },
    },
}
</script>

<style scoped>
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
    .body__label{
        margin-bottom: 0rem;
        margin-right: 0.75rem;
        width: fit-content;
    }
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
