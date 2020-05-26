<template>
  <div id="add-your-yacht">
    <div class="modal__display">
      <div class="modal__display__link">
        <a class="modal__display__link--display" title="Dodaj swój jacht do bazy">+</a>
      </div>
    </div>
    <div class="modal__box">
      <div class="modal__box__window">
        <p class="modal__box__window__text--upper">Wprowadź podstawowe dane swojego jachtu oraz opis</p>
        <div class="modal__box__window__form">
          <form action class="modal__box__window__form">
            <div class="modal__box__window__form__items">
              <div class="modal__box__window__form__items__item">
                <label for class="modal__box__window__form__items__item__label">
                  Typ Jachtu:
                  <span class="modal__box__window__form__items__item__label--must">*</span>
                  <input type="text" class="modal__box__window__form__items__item__label__content" />
                </label>
              </div>

              <div class="modal__box__window__form__items__item">
                <label for class="modal__box__window__form__items__item__label">
                  Ilość kabin:
                  <span class="modal__box__window__form__items__item__label--must">*</span>
                  <input
                    type="number"
                    class="modal__box__window__form__items__item__label__content"
                  />
                </label>
              </div>
              <div class="modal__box__window__form__items__item">
                <label for class="modal__box__window__form__items__item__label">
                  Maksymalna ilość gości:
                  <span
                    class="modal__box__window__form__items__item__label--must"
                  >*</span>
                  <input
                    type="number"
                    class="modal__box__window__form__items__item__label__content"
                  />
                </label>
              </div>
              <div class="modal__box__window__form__items__item">
                <label for class="modal__box__window__form__items__item__label">
                  Dodatkowe informacje (np. rejon pływania):
                  <span
                    class="modal__box__window__form__items__item__label--must"
                  >*</span>
                  <textarea class="modal__box__window__form__items__item__label__content" rows="10"></textarea>
                </label>
              </div>

              <div class="modal__box__window__form__items__item">
                <label for class="modal__box__window__form__items__item__label">
                  Koszta czarteru / tydzień:
                  <span
                    class="modal__box__window__form__items__item__label--must"
                  >*</span>
                  <input
                    type="number"
                    class="modal__box__window__form__items__item__label__content"
                    required
                  />
                </label>
              </div>

              <div class="modal__box__windowform__form__items__item--skipper">
                <label for class="modal__box__window__form__items__item__label">
                  Dodaj zdjęcie:
                  <span class="modal__box__window__form__items__item__label--must">*</span>
                  <input
                    type="file"
                    class="modal__box__window__form__items__item__label__content"
                    required
                  />
                </label>
              </div>
              <!-- 
              <div class="modal__box__window__form__items__item">
                <label for class="modal__box__window__form__items__item__label">
                  Imię:
                  <span class="modal__box__window__form__items__item__label--must">*</span>
                  <input type="text" class="modal__box__window__form__items__item__label__content" />
                </label>
              </div>
              <div class="modal__box__window__form__items__item">
                <label for class="modal__box__window__form__items__item__label">
                  Nazwisko:
                  <span class="modal__box__window__form__items__item__label--must">*</span>
                  <input type="text" class="modal__box__window__form__items__item__label__content" />
                </label>
              </div>

              <div class="modal__box__window__form__items__item">
                <label for class="modal__box__window__form__items__item__label">
                  Adres Email:
                  <span class="modal__box__window__form__items__item__label--must">*</span>
                  <input
                    type="email"
                    class="modal__box__window__form__items__item__label__content"
                    required
                  />
                </label>
              </div>

              <div class="modal__box__window__form__items__item">
                <label for class="modal__box__window__form__items__item__label">
                  Numer telefonu:
                  <span class="modal__box__window__form__items__item__label--must">*</span>
                  <input
                    type="tel"
                    class="modal__box__window__form__items__item__label__content"
                    required
                  />
                </label>
              </div>-->

              <div class="modal__box__window__form__items__item--skipper">
                <label for class="modal__box__window__form__items__item--skipper__label">
                  Skipper:
                  <span class="modal__box__window__form__items__item__label--must">*</span>
                  <!-- <div class="modal__box__window__form__items__item__label--chbox"> -->
                  <input
                    type="checkbox"
                    class="modal__box__window__form__items__item--skipper__label__content"
                    required
                  />
                  <!-- </div> -->
                </label>
              </div>
              <div class="modal__box__window__form__items__item">
                <label for class="modal__box__window__form__items__item__label">
                  Imię skippera:
                  <span class="modal__box__window__form__items__item__label--must">*</span>
                  <input type="text" class="modal__box__window__form__items__item__label__content" />
                </label>
              </div>
            </div>
            <div class="modal__box__window__form__buttons">
              <button type="submit" class="modal__box__window__form__buttons__submit">Dodaj</button>
              <button type class="modal__box__window__form__buttons__clear">Wyjdź</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
      color: #eee;
      padding: 5px 15px;
      font-size: 60px;
      font-weight: bold;
    }
  }
}
.modal__box {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #00000080;
  &__window {
    position: relative;
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
    // margin-top: 40px;
    // display: flex;
    // width: 80%;
    // flex-direction: column;
    @media #{$mobile-plus} {
      width: 75%;
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
        // display: flex;
        // flex-direction: column;
        // align-content: center;
        &__item {
          margin-top: 10px;
          //   display: flex;
          width: 100%;
          //   justify-content: center;
          &--skipper {
            font-family: monospace;
            font-size: 14px;
            margin: 10px 0;
            display: flex;
            width: 200px;
            justify-content: space-between;
            &__label {
              display: flex;
              justify-self: space-between;
              align-items: center;
              &__content {
                margin-left: 15px;
              }
            }
          }
          &__label {
            font-family: monospace;
            font-size: 14px;
            width: 100%;
            &--must {
              color: #ff0000;
            }

            &__content {
              display: block;
              margin: 10px 0;
              width: 100%;

              border-radius: 10px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              outline-style: none;
              padding: 5px 0;
            }
          }
        }
      }
      &__buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
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
          box-shadow: 0 0 5px 2px #ccc;
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
        }
      }
    }
  }
}
</style>