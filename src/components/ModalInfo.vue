<template>
  <transition name="modal-fade">
    <div class="modal--backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription" >
        
        <header id="modalTitle" :class="isError ? 'modal__header--red' : 'modal__header--green'">
          <slot name="header">
              <h4>Komunikat</h4> 
              <button type="button" class="button--close" @click="close" aria-label="Close modal" >&times;</button>
          </slot>
          
        </header>

        <section id="modalBody" class="modal__body">
          <slot name="body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, suscipit!</slot>
        </section>

        <footer class="modal__footer">
          <slot name="footer">
            <button type="button" :class="isError ? 'button--red' : 'button--green'" @click="close" aria-label="Close modal" >OK</button>
          </slot>
        </footer>

      </div>
    </div>
  </transition>
</template>

<script>
export default {
    name: 'modalInfo',
    props: {
      isError: { type: Boolean, default: false}
    },
    methods: {
      close() {
        this.$emit('close');
      },
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
  .modal__header--green,
  .modal__header--red {
    padding-top: .5rem;
    padding-left: .5rem;
    padding-right: .5rem;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #eee;
    justify-content: space-between;
  }
  .modal__header--green{
    color: rgb(0, 128, 0);
  }
  .modal__header--red{
    color: rgb(255, 0, 0);
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
</style>>
