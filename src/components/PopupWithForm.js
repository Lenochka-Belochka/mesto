import { Popup } from "./Popup.js";

// Класс PopupWithForm - открытие и закрытие попапа c формой

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;

    this._inputList = this._popup.querySelectorAll(".form__input");
    this._form = this._popup.querySelector(".form");
    this._submitButton = document.querySelector(popupSelector).querySelector(".popup__button_type_save");
    this._submitButtonText = this._submitButton.textContent;
  }


  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  setEventListeners(){
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();

    this.renderLoading(true);

      this._handleSubmit(this._getInputValues())
      .then(() => this.close()) 
      .finally(() => this.renderLoading(false)); 

    });

    super.setEventListeners();
  }


  close() {
    this._form.reset();
    super.close();
  }

  renderLoading(isLoading, buttonText='Сохранение...') {
    if(isLoading)
      this._submitButton.textContent = buttonText;
    else
      this._submitButton.textContent = this._submitButtonText;
    }
  
}

