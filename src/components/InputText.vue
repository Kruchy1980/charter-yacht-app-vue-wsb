<template>
<div>
  <input type="text" ref='inputTxt'
  @focusout="setState" @focus="enter" @input="setState"
  :class="{'input--valid' : validState==1, 'input--invalid' : validState==0}" >
  <small ref='errorTxt' :class="{'input__error--hide' : validState!=0, 'input__error--show' : validState==0}" >{{errorText}}</small>
</div>
  
</template>

<script>
export default {
  props: {
    minLength: { type: Number, default: 0 },  //wymagana liczba znaków w polu
    errorText: { type: String, default: ''},  //komunikat z błędem wyświetlany gdy min liczba znaków nie została osiągnięta
    valid: { type: Boolean},  //wskaznie początkowego stanu pola: poprawne/niepoprawne
  },
  data(){
    return{
      isValid: false, //aktualny stan komponentu
      validState: -1, //zmienna pomocnicza do zarządaniem wyglądem komponentu
    }
  },
  mounted(){
    let s = this.$refs.errorTxt;
    if(this.minLength<=0){  //nie jest wymagana min długość tekstu
      this.isValid=true;  //stan komponentu poprawny
      s.style.display='none'; //ukrywamy element z komunikatem błędu
    }
    if(s.innerHTML==null || s.innerHTML==''){
      s.style.display='none';
    }
  },
  methods: {
    //weryfikacja długości wprowadzonego ciągu znaków przy wyjściu z pola
    setState(){
      if(this.minLength>0){
        let t = this.$refs.inputTxt;
        if(t.value.length<this.minLength){
          this.isValid=false;
          this.validState=0;
        }
        else{
          this.isValid=true;
          this.validState=1;
        }
      }
    },
    //czyścimy stan pola przy wejściu w edycją
    enter(){
      if(this.minLength>0){
        let t = this.$refs.inputTxt;
        this.validState=-1;
        if(t.value.length<this.minLength){
          this.isValid=false;
        }
        else{
          this.isValid=true;
        }
      }
    },
  }
}
</script>

<style scoped>
input{
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
    margin-bottom: 0.2rem;
}
input:focus{
  box-shadow: 2px 2px 6px #999;
  outline: none;
}
.input--invalid{
  border: 1px solid rgb(255, 0, 0);
  box-shadow: 0px 0px 6px rgb(255, 0, 0);
}
.input--valid{
  border: 1px solid rgb(0, 128, 0);
  box-shadow: 0px 0px 3px rgb(0, 128, 0);
}
.input__error--show{
  color: rgb(255, 0, 0);
  visibility: visible;
}
.input__error--hide{
  visibility: hidden;
}
</style>