<template>
  <div id="add-your-yacht">
    <div class="modal__display">
      <div class="modal__display__link">
        <a
          v-if="!isModalDisplayed"
          class="modal__display__link--display"
          title="Dodaj swój jacht do bazy"
          @click="toggleModalDisplay"
        >+</a>
      </div>
      <!-- </div> -->
      <div v-if="isModalDisplayed" class="modal__box">
        <div class="modal__box__window">
          <p
            class="modal__box__window__text--upper"
          >Wprowadź podstawowe dane swojego jachtu oraz opis</p>
          <div class="modal__box__window__form">
            <form action class="modal__box__window__form" @submit.prevent="handleSubmitForm">
              <div class="modal__box__window__form__items">
                <div class="modal__box__window__form__items__item">
                  <label for class="modal__box__window__form__items__item__label">
                    Typ Jachtu:
                    <span class="modal__box__window__form__items__item__label--must">*</span>
                    <input
                      v-model="yacht_type"
                      type="text"
                      class="modal__box__window__form__items__item__label__content"
                      placeholder="Podaj typ swojego jachtu"
                      required
                    >
                  </label>
                </div>

                <div class="modal__box__window__form__items__item">
                  <label for class="modal__box__window__form__items__item__label">
                    Ilość kabin:
                    <span class="modal__box__window__form__items__item__label--must">*</span>
                    <input
                      v-model="cabins"
                      type="number"
                      class="modal__box__window__form__items__item__label__content"
                      placeholder="Podaj ilość kabin użytkowych"
                      required
                    >
                  </label>
                </div>
                <div class="modal__box__window__form__items__item">
                  <label for class="modal__box__window__form__items__item__label">
                    Maksymalna ilość gości:
                    <span
                      class="modal__box__window__form__items__item__label--must"
                    >*</span>
                    <input
                      v-model="guests"
                      type="number"
                      class="modal__box__window__form__items__item__label__content"
                      placeholder="Podaj maksymalną ilość gości"
                      required
                    >
                  </label>
                </div>
                <div class="modal__box__window__form__items__item">
                  <label for class="modal__box__window__form__items__item__label">
                    Dodatkowe informacje (np. rejon pływania):
                    <span
                      class="modal__box__window__form__items__item__label--must"
                    >*</span>
                    <textarea
                      v-model="extended_info"
                      class="modal__box__window__form__items__item__label__content"
                      rows="6"
                      placeholder="Podaj informacje dodatkowe"
                      required
                    />
                  </label>
                </div>

                <div class="modal__box__window__form__items__item">
                  <label for class="modal__box__window__form__items__item__label">
                    Koszta czarteru [PLN]/tydzień
                    <span
                      class="modal__box__window__form__items__item__label--must"
                    >*</span>
                    <input
                      v-model="price"
                      type="number"
                      class="modal__box__window__form__items__item__label__content"
                      placeholder="Podaj maksymalny koszt czarteru jachtu"
                      required
                    >
                  </label>
                </div>

                <div class="modal__box__windowform__form__items__item--skipper">
                  <label class="modal__box__window__form__items__item__label">
                    Dodaj zdjęcie:
                    <span class="modal__box__window__form__items__item__label--must">*</span>
                    <progress
                      class="modal__box__window__form__items__item__label--upload"
                      :value="uploadValue"
                      max="100"
                      step="0.01"
                    />
                    <input
                      type="file"
                      class="modal__box__window__form__items__item__label__content--file"
                      required
                      @change="onUploadImage"
                    >
                  </label>
                </div>

                <div>
                  <div class="modal__box__window__form__items__item--skipper">
                    <label for class="modal__box__window__form__items__item--skipper__label">
                      Skipper:
                      <input
                        v-model="isChecked"
                        type="checkbox"
                        class="modal__box__window__form__items__item--skipper__label__content"
                      >
                      <img
                        class="modal__box__window__form__items__item--skipper__label__icon"
                        src="/info-icon/info.svg"
                        alt="Info-icon"
                        title="Zaznacz jeśli twój jacht posiada skippera"
                      >
                    </label>
                    <label v-if="isChecked" class="modal__box__window__form__items__item__label">
                      Imię skippera:
                      <span
                        class="modal__box__window__form__items__item__label--must"
                      >*</span>
                      <input
                        v-model="skippers_name"
                        type="text"
                        class="modal__box__window__form__items__item__label__content"
                        required
                      >
                    </label>
                  </div>
                </div>
              </div>
              <div class="modal__box__window__form__buttons">
                <button type="submit" class="modal__box__window__form__buttons__submit">Dodaj</button>
                <button
                  type="button"
                  class="modal__box__window__form__buttons__clear"
                  @click="toggleModalDisplay"
                >Wyjdź</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "@/firebase";
export default {
  data() {
    return {
      // Wyświetlanie modalnego formularza na przycisk
      isModalDisplayed: false,
      //  Wyświetlanie pola z dodawaniem imienia po zaznaczeniu checkbox'a
      isChecked: false,
      // Zmienna do wyświetlania progress baru
      // isUploaded: false,
      // pusta tablica z jachtami
      yachts: [],
      // id dodanego jachtu

      yacht_id: "",
      // Elementy formularza dodawania nowego jachtu do bazy
      cabins: null,
      extended_info: "",
      guests: null,
      price: null,
      skippers_name: "",
      yacht_type: "",
      // część dla zdjęcia jachtu
      selectedFile: null,
      uploadValue: 0,
      image_url: ""
    };
  },
  methods: {
    toggleModalDisplay() {
      //   console.log(this.isModalDisplayed);
      this.isModalDisplayed = !this.isModalDisplayed;
      // console.log(this.isModalDisplayed);
    },
    // Dodawanie zdjęcia do firebase'a
    onUploadImage(event, image_url) {
      const fb = firebase.storage();
      // Utworzenie zmiennej zawierającej dane obietem dodanego pliku
      const file = event.target.files[0]; //ponieważ cchcemy dodać tylko jeden plik
      // Teraz tworzymy referencję do naszego folderu w firebase.storage
      const storageRef = fb.ref("yachts/" + file.name);
      // Teraz dodajemy obrazek do storage'a tworząc zmienną pokazującą dodawwanie obrazka potem
      let uploadTask = storageRef.put(file);
      // Pokaanie stanu postępu ładowania do bazy danych zdjęcia
      uploadTask.on(
        "state_changed",
        snapshot => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          let progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.uploadValue = progress;
          if (progress === 100) {
            this.uploadValue = "";
            alert("Twoje zdjęcie zostało dodane");
            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
              // console.log("File availible at", downloadURL);
              this.image_url = downloadURL;
              // console.log(this.image_url);
            });
          }
        },
        error => {
          this.state = error;
        }
      );
    },
    handleSubmitForm() {
      let db = firebase.firestore();
      db.collection("New_Yacht")
        .add({
          yacht_id: (Math.random() * 16).toString(36).substr(2, 25),
          cabins: this.cabins,
          extended_info: this.extended_info,
          guests: this.guests,
          price: this.price,
          skippers_name: this.skippers_name,
          yacht_type: this.yacht_type,
          image_url: this.image_url
        })
        .then(docRef => {
          this.$router.push("/list-of-added-yachts"); //dorobić kartkę z widokiem dodanego jachtu - danych i potem przekierować tutaj
        })
        .catch(error => console.log(err));
    }
  }
};
</script>

<style lang="scss" scoped>
// Media Query prepared for larger than 425
$mobile-plus: "only screen and (min-width : 425px)";
// Media Query for 768px plus
$tablet-plus: "only screen and (min-width : 768px)";
// Media Query - main-content larger
$media-content: "only screen and (min-width : 960px)";

.modal__display {
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-content: center;
  &__link {
    background-color: #b9820a;
    border-radius: 50%;
    padding: 5px;
    &--display {
      cursor: pointer;
      color: #eee;
      padding: 5px 15px;
      font-size: 60px;
      font-weight: bold;
    }
  }
}
.modal__box {
  margin-top: 45px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #00000080;
  //   display: none;
  &__window {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95%;
    height: auto;
    background-color: #eee;
    padding: 15px;
    border-radius: 20px;
    box-shadow: 0 0 10px 3px #fff;
    transition: all 0.5s;
    @media #{$mobile-plus} {
      width: 80%;
    }
    @media #{$tablet-plus} {
      width: 70%;
    }
    @media #{$media-content} {
      width: 600px;
    }

    &__text--upper {
      margin: 10px auto;
      padding: 10px 0;
      font-weight: bold;
      text-align: center;
      font-family: monospace;
      font-size: 18px;
    }
    &__form {
      margin: 10px auto;
      &__items {
        width: 90%;
        margin: auto;

        &__item {
          margin-top: 5px;
          width: 100%;
          &--skipper {
            font-family: monospace;
            font-size: 14px;
            margin: 5px 0;
            display: flex;
            flex-direction: column;
            width: 100%;
            justify-content: space-between;
            &__label {
              display: flex;
              justify-self: space-between;
              align-items: center;
              &__icon {
                width: 20px;
                height: 20px;
                margin-left: 10px;
              }
              &__content {
                margin-left: 15px;
              }
            }
          }
          &__label {
            font-family: monospace;
            font-size: 14px;
            width: 100%;
            // margin-top: 5px;
            &--upload {
              margin: 5px 0;
              width: 100%;
              height: 2.5em;
            }
            &--must {
              margin-right: 10px;
              color: #ff0000;
            }

            &__content {
              display: block;
              margin: 5px 0;
              width: 100%;
              border-radius: 10px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              outline-style: none;
              padding: 5px 0;
              transition: all 1s;
              padding: 3px 5px;
              &--file {
                padding: 3px;
                background-color: transparent;
                width: 100%;
              }
              &--file::-webkit-file-upload-button {
                margin: 5px 0;
                padding: 3px 5px;
                background-color: #0637be;
                color: #ddd;
                font-weight: bold;
                border: none;
                outline-style: none;
                border-radius: 20px;
                cursor: pointer;
                font-size: 14px;
                box-shadow: 0 0 5px 2px #03143a;
              }
            }
          }
        }
      }
      &__buttons {
        margin: 20px auto 10px auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        // padding: 10px;
        &__submit {
          text-align: center;
          cursor: pointer;
          padding: 5px 8px;
          background-color: #00ff00;
          color: #eee;
          border: none;
          border-radius: 20px;
          outline-style: none;
          font-weight: bold;
          font-size: 16px;
          box-shadow: 0 0 5px 2px #027c02;
        }
        &__clear {
          text-align: center;
          cursor: pointer;
          padding: 5px 8px;
          background-color: #8b0303;
          color: #eee;
          border: none;
          border-radius: 20px;
          outline-style: none;
          font-weight: bold;
          font-size: 16px;
          box-shadow: 0 0 5px 2px #3d0101;
        }
      }
    }
  }
}
</style>