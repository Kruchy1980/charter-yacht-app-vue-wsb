<template>
<div>
  <input type="email" ref="inputEmail"
  @focusout="leave" @focus="enter" @input="textChange"
  :class="{'input--valid' : validState==1, 'input--invalid' : validState==0}" >
  <small ref='errorTxt' :class="{'input__error--hide' : validState!=0, 'input__error--show' : validState==0}" >{{errorText}}</small>
</div>
  
</template>

<script>
export default {
  props: {
    errorText: { type: String, default: ''},  //komunikat z wyświetlanym błędem
    valid: { type: Boolean},  //wskaznie początkowego stanu komponentu: poprawne/niepoprawne
  },
  data(){
    return{
      isValid: false, //aktualny stan komponentu
      validState: -1, //zmienna pomocnicza do zarządaniem wyglądem komponentu
    }
  },
  mounted(){
    let s = this.$refs.errorTxt;
    if(s.innerHTML==null || s.innerHTML==''){
      s.style.display='none';
    }
  },
  methods: {
    //weryfikacja poprawności adresu email
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    leave(){
        let email = this.$refs.inputEmail;
        if (!this.validEmail(email.value)){
            this.isValid=false;
            this.validState=0;
        }
        else{
            this.isValid=true;
            this.validState=1;
        }
    },
    //czyścimy stan pola przy wejściu w edycją
    enter(){
        this.validState=-1;
        let email = this.$refs.inputEmail;
        if (!this.validEmail(email.value)){
            this.isValid=false;
        }
        else{
            this.isValid=true;
        }
    },
    //weryfikacja podczas wprowadzania
    textChange(){
      let email = this.$refs.inputEmail;
        if (!this.validEmail(email.value)){
            this.isValid=false;
            this.validState=0;
        }
        else{
            this.isValid=true;
            this.validState=1;
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