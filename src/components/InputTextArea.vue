<template>
<div>
  <textarea ref="areaTxt" :rows="noRows"
  :class="{'textarea--valid' : validState==1, 'textarea--invalid' : validState==0}" @focusout="leave" @focus="enter"
  @input="textChange"
/>
  <small ref="errorTxt" :class="{'textarea__error--hide' : validState!=0, 'textarea__error--show' : validState==0}">{{ errorText }}</small>
</div>
  
</template>

<script>
export default {
  props: {
    minLength: { type: Number, default: 0 },  //wymagana liczba znaków w polu
    errorText: { type: String, default: ''},  //komunikat z błędem wyświetlany gdy min liczba znaków nie została osiągnięta
    valid: { type: Boolean},  //wskaznie początkowego stanu pola: poprawne/niepoprawne
    noRows: { type: Number, default: 5}
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
    leave(){
      if(this.minLength>0){
        let t = this.$refs.areaTxt;
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
        let t = this.$refs.areaTxt;
        this.validState=-1;
        if(t.value.length<this.minLength){
          this.isValid=false;
        }
        else{
          this.isValid=true;
        }
      }
    },
    //weryfikacja podczas wprowadzania
    textChange(){
      if(this.minLength>0){
        let t = this.$refs.areaTxt;
        if(t.value.length>=this.minLength){
          this.isValid=true;
          this.validState=1;
        }
        else{
          this.isValid=false;
          this.validState=0;
        }
      }
    },
  }
}
</script>

<style scoped>
textarea{
    overflow: auto;
    resize: vertical;
    width: 100%;
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
    margin-bottom: 0.1rem;
}
textarea:focus{
  box-shadow: 2px 2px 6px #999;
  outline: none;
}
.textarea--invalid{
  border: 1px solid rgb(255, 0, 0);
  box-shadow: 0px 0px 6px rgb(255, 0, 0);
}
.textarea--valid{
  border: 1px solid rgb(0, 128, 0);
  box-shadow: 0px 0px 3px rgb(0, 128, 0);
}
.textarea__error--show{
  color: rgb(255, 0, 0);
  visibility: visible;
}
.textarea__error--hide{
  visibility: hidden;
}
</style>