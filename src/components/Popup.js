//  класс отвечающий за открытие и закрытие попапа

export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  // Публичный метод - открытие popup

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  // Публичный метод - закрытие popup

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  // Приватный метод - логика закрытия попапа клавишей Esc

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  // Публичный метод - закрытие по иконке закрытия попапа

  setEventListeners() {
    this._popup.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__button_type_close'))
      {
        this.close()
      }
    })
  }
}
