<template>
  <transition name="modal-fade">
    <div class="modal--backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription" >
        
        <header id="modalTitle" class="modal__header text__color--dark" >
          <slot name="header">
              <h5>Pytanie</h5> 
          </slot>
          <button type="button" class="button--close text__color--dark" @click="close" aria-label="Close modal" >&times;</button>
        </header>

        <section id="modalBody" class="modal__body text__color--dark">
          <slot name="body">Treść pytania?</slot>
        </section>

        <footer class="modal__footer">
          <slot name="footer">
            <button type="button" class="button--green" @click="close" aria-label="Close modal" >Nie</button>
            <button type="button" class="button--red" @click="logOut" aria-label="Log out" >Tak</button>
          </slot>
        </footer>

      </div>
    </div>
  </transition>
</template>

<script>
export default {
    name: 'modalLogOut',
    methods: {
      close() {
        this.$emit('close');
      },
      logOut(){
          this.$emit('logOut');
      }
    },
}
</script>

<style scoped>
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
    padding: 1rem .5rem;
    color: rgb(33, 37, 41);
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
  .button--green,
  .button--red{
    width: 3.5rem;
    cursor: pointer;
    height: 2em;
    padding: .35rem .75rem;
    text-align: center;
    vertical-align: middle;
    font-weight: bolder;
    border-radius: .25rem;
    margin-right: .5rem;
    -moz-transition: border-color .5s ease-in-out,box-shadow .15s ease-in-out;
    -ms-transition: border-color .5s ease-in-out,box-shadow .15s ease-in-out;
    -o-transition: border-color .5s ease-in-out,box-shadow .15s ease-in-out;
    -webkit-transition: border-color .5s ease-in-out,box-shadow .15s ease-in-out;
    transition: border-color .5s ease-in-out,box-shadow .15s ease-in-out;
  }
  .button--green{
    border: 1px solid rgb(0, 128, 0);
    color: rgb(0, 128, 0);
  }
  .button--green:hover{
    color: rgb(251, 252, 253);
    background-color: rgb(0, 128, 0);
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
  .modal{
    width: 500px;
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
