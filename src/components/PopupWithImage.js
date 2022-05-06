import { Popup } from "./Popup.js";

// Класс PopupWithImage - открытие и закрытие попапа c картинкой

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.pictureEl = this._popup.querySelector(".popup__image");
    this.captionEl = this._popup.querySelector(".popup__title");
  }

  open(title, source) {
    this.pictureEl.src = source;
    this.pictureEl.alt = title;
    this.captionEl.textContent = title;
    super.open();
  }
}
