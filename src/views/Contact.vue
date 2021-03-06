<template>
  <div id="contact">
    <MainMenu />
    <main class="contact__container">
      <section class="contact__container__section background__color--light">
        <article class="contact__article text__color--dark">
          <h2 class="contact__article__title">Kontakt</h2>
          <p
            class="contact__article__p"
          >Napisz do nas! Z góry dziękujemy za wszystkie sugestie i opinie.</p>
          <form action class="contactform" @submit.prevent="validateSendContact($event)">
            <div class="contactform__group">
              <label class="contactform__label" for="name">
                Imię
                <span class="text__color--gray">(wymagane)</span>
              </label>
              <InputText
                id="name"
                ref="name"
                :min-length="3"
                :error-text="'Podaj swoje imię, minimum 3 znaki.'"
              />
            </div>
            <div class="contactform__group">
              <label class="contactform__label" for="email">
                E-mail
                <span class="text__color--gray">(wymagane)</span>
              </label>
              <InputEmail
                id="email"
                ref="email"
                :error-text="'Proszę podać poprawny adres e-mail.'"
              />
            </div>
            <div class="contactform__group">
              <label class="contactform__label" for="subject">
                Temat
                <span class="text__color--gray">(wymagane)</span>
              </label>
              <InputText
                id="subject"
                ref="subject"
                :min-length="1"
                :error-text="'Określ temat wiadomości.'"
              />
            </div>
            <div class="contactform__group">
              <label class="contactform__label" for="msg">
                Treść wiadomości
                <span class="text__color--gray">(wymagane)</span>
              </label>
              <InputTextArea
                id="msg"
                ref="msg"
                :min-length="1"
                :no-rows="5"
                :error-text="'Określ treść wiadomości.'"
              />
            </div>
            <button
              type="submit"
              class="contactform__button background__color--light"
            >Wyślij wiadomość</button>
          </form>
        </article>
      </section>
    </main>
    <!-- okna modalne -->
    <ModalLoading v-show="isLoadingVisible" />
    <ModalInfo v-show="isModalInfoVisible" :is-error="modalIsError" @close="closeModal">
      <template v-slot:header>{{ modalTitle }}</template>
      <template v-slot:body>
        <div>{{ modalMsg }}</div>
      </template>
    </ModalInfo>
    <MainFooter />
  </div>
</template>

<script>
import MainMenu from "@/components/MainMenu";
import MainFooter from "@/components/MainFooter";
import InputText from "@/components/InputText";
import InputEmail from "@/components/InputEmail";
import InputTextArea from "@/components/InputTextArea";
import ModalLoading from "@/components/LoadingLineDots";
import ModalInfo from "@/components/ModalInfo";
import firebase from "@/firebase.js";

export default {
  name: "Contact",
  components: {
    MainMenu,
    MainFooter,
    InputText,
    InputEmail,
    InputTextArea,
    ModalLoading,
    ModalInfo
  },
  data() {
    return {
      isLoadingVisible: false,
      isModalInfoVisible: false,
      modalTitle: "",
      modalMsg: "",
      modalIsError: true, //flaga określająca czy pokazywane okno modalne jest błędem
      formSubmit: false //flaga określająca czy odświeżyć formę
    };
  },
  methods: {
    closeModal() {
      this.isModalInfoVisible = false;
      if (this.formSubmit) {
        document.getElementsByTagName("form")[0].submit();
      }
    },
    validateSendContact(e) {
      //weryfikacja poprawności formularza
      try {
        let valid = true; //zmienna pomocnicza
        let controls = ["name", "email", "subject", "msg"];
        controls.forEach(element => {
          let el = this.$refs[element];
          if (!el.isValid) {
            valid = false;
            this.$refs[element].setState(); //uruchamiamy alert na kontrolce
          }
        });
        if (valid) {
          //wszystkie kontrolki wypełnione -> zapisujemy wiadomość do bazy
          this.isLoadingVisible = true;
          const that = this; //zapamiętujemy kontekst aby użyć w innej funkcji
          firebase.auth().onAuthStateChanged(function(user) {
            if (!user) {
              //brak aktywnego usera -> logowanie anonimowe
              firebase
                .auth()
                .signInAnonymously()
                .then(function() {
                  saveContactMsg(that); //zapis do bazy
                })
                .catch(function(error) {
                  that.modalIsError = true;
                  that.isLoadingVisible = false;
                  that.modalTitle = "Login anonymous: " + error.code;
                  that.modalMsg = error.message;
                  console.error(that.modalTitle, that.modalMsg);
                  that.isModalInfoVisible = true;
                });
            } else {
              saveContactMsg(that);
            }
          });
        }
      } catch (err) {
        this.modalIsError = true;
        this.isLoadingVisible = false;
        console.error("Error contact form: ", err);
        this.modalTitle = "Błąd podczas wysyłania wiadomości!";
        this.modalMsg = err;
        this.isModalInfoVisible = true;
      }
    }
  }
};

function saveContactMsg(that) {
  let db = firebase.firestore();
  db.collection("ContactMsg")
    .add({
      //dodanie do bazy wiadomości
      Name: that.$refs["name"].value,
      Email: that.$refs["email"].value,
      Subject: that.$refs["subject"].value,
      MessageContent: that.$refs["msg"].value
    })
    .then(function(docRef) {
      that.formSubmit = true; //należy odświeżyć formularz
      that.isLoadingVisible = false; //ukrywamy animację
      that.modalIsError = false; //zmieniamy status okna modalnego
      that.modalTitle = "Wiadomość wysłana.";
      that.modalMsg =
        "Dziękujemy za przesłanie wiadomości. Twoja wiadomość została zapisana z identyfikatorem: " +
        docRef.id;
      that.isModalInfoVisible = true; //pokazujemy okno z komunikatem
    })
    .catch(function(error) {
      that.modalIsError = true;
      that.isLoadingVisible = false;
      that.modalTitle = "Adding message: " + error.code;
      that.modalMsg = error.message;
      console.error(that.modalTitle, that.modalMsg);
      that.isModalInfoVisible = true;
    });
}
</script>

<style scoped>
.contactform__button {
  width: 100%;
  cursor: pointer;
  height: 2.3em;
  padding: 0.35rem 0.75rem;
  text-align: center;
  vertical-align: middle;
  font-weight: bolder;
  line-height: 1.5;
  /* background-color: rgb(255, 255, 255); */
  border: 1px solid rgb(90, 90, 90);
  color: rgb(90, 90, 90);
  border-radius: 0.25rem;
  -moz-transition: border-color 0.5s ease-in-out, box-shadow 0.15s ease-in-out;
  -ms-transition: border-color 0.5s ease-in-out, box-shadow 0.15s ease-in-out;
  -o-transition: border-color 0.5s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-transition: border-color 0.5s ease-in-out,
    box-shadow 0.15s ease-in-out;
  transition: border-color 0.5s ease-in-out, box-shadow 0.15s ease-in-out;
}
.contactform__button:hover {
  color: rgb(251, 252, 253) !important;
  background-color: rgb(90, 90, 90) !important;
  box-shadow: 2px 2px 6px #999;
}
.contactform__label {
  margin-bottom: 0.5rem;
}
.contactform__group {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
}
.contactform {
  margin-top: 1rem;
  margin-right: auto;
  margin-left: auto;
}
.contact__article {
  padding: 5%;
}
.contact__article__title {
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
}
.contact__article__p {
  margin-bottom: 0.2rem;
  line-height: 1.5;
  text-align: justify;
}
#contact {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.contact__container {
  flex: 1;
}
.contact__container__section {
  margin-top: 19%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 2%;
  box-shadow: 4px 6px 20px #999;
  border-radius: 5px;
}
#contact::after {
  content: "";
  background: url("/images/background/contact-small.jpg") no-repeat center
    center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
  min-height: 100vh;
}
@media only screen and (min-width: 640px) {
  .container__section {
    margin-top: 15%;
  }
}
@media only screen and (min-width: 768px) {
  #contact::after {
    background: url("/images/background/contact-big.jpg") no-repeat center
      center fixed;
  }
  .contact__container__section {
    margin-top: 10%;
    margin-left: 10%;
    margin-right: 10%;
  }
  .contact__article {
    padding: 3%;
  }
  .contactform {
    flex: 0 0 75%;
    max-width: 75%;
  }
}
@media only screen and (min-width: 1200px) {
  .contactform {
    flex: 0 0 50%;
    max-width: 50%;
    margin-top: 2rem;
  }
  .contact__container__section {
    margin-top: 5%;
    margin-left: 15%;
    margin-right: 15%;
    margin-bottom: 1%;
  }
}
</style>

