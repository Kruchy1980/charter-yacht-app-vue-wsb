<template>
  <input type="text" 
  @focusout="leave" @focus="enter" @input="textChange"
  >
</template>

<script>
export default {
  props: {
    minLength: { type: Number },
    valid: {type: Boolean}
  },
  data(){
    return{
      isValid: this.valid,
    }
  },
  methods: {
    //weryfikacja długości wprowadzonego ciągu znaków
    leave(){
      let t = document.getElementsByTagName('input')[0];
      if(t.value.length<this.minLength){
        t.classList.add('invalid');
        t.classList.remove('valid');
        this.isValid=false;
      }
      else{
        t.classList.remove('invalid');
        t.classList.add('valid');
        this.isValid=true;
      }
    },
    //czyścimy klasy przy wejściu w pole
    enter(){
      let t = document.getElementsByTagName('input')[0];
      t.classList.remove('invalid');
      t.classList.remove('valid');
    },
    //weryfikacja podczas wprowadzania
    textChange(){
      let t = document.getElementsByTagName('input')[0];
      if(t.value.length>=this.minLength){
        t.classList.remove('invalid');
        t.classList.add('valid');
        this.isValid=true;
      }
      else{
        t.classList.add('invalid');
        t.classList.remove('valid');
        this.isValid=false;
      }
    },
  }
}
</script>

<style scoped>
input{
    display: block;
    width: 100%;
    height: 2em;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.5;
    color: rgb(73, 80, 87);
    background-color: #fff;
    border: 1px solid rgb(90, 90, 90);
    border-radius: .25rem;
    -moz-transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    -ms-transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    -o-transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    -webkit-transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
input:focus{
  box-shadow: 2px 2px 6px #999;
  outline: none;
}
.invalid{
  border: 1px solid rgb(255, 0, 0)!important;
  box-shadow: 0px 0px 6px rgb(255, 0, 0)!important;
}
.valid{
  border: 1px solid rgb(0, 128, 0)!important;
  box-shadow: 0px 0px 3px rgb(0, 128, 0)!important;
}
</style>