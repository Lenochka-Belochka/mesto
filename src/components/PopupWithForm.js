import { Popup } from "./Popup.js";

// Класс PopupWithForm - открытие и закрытие попапа c формой

export class PopupWithForm extends Popup {
  constructor(popupSelector, { handleSubmit }) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
  }

  // данные всех полей формы

  _getInputValues() {
    this._inputList = this._popup.querySelectorAll(".form__input");
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  // Обработчик клика иконке закрытия и обработчик сабмита формы

  setEventListeners() {
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._getInputValues());
      this.close();
    });

    super.setEventListeners();
  }

  // Перезаписывает родительский метод close + сброс

  close() {
    this._popup.querySelector(".form").reset();

    super.close();
  }
}
