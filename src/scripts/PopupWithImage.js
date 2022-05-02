import {Popup} from './Popup.js';

// Класс PopupWithImage - открытие и закрытие попапа c картинкой
 
 export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._pictureEl = this._popup.querySelector('.popup__image');
    this._captionEl = this._popup.querySelector('.popup__title');

 }

 // Метод для установки данных карточки
 
 setCardData(cardText, cardImage) {
  this._cardText = cardText;
  this._cardImage = cardImage;
 }

 //  Вставляем в попап картинку с src изображения и подписью к картинке

 open() {

    // сообщаем popup данные картинки, которую поднимаем
    this._pictureEl.src = this._cardImage;
    this._pictureEl.alt = this._cardText;
    this._captionEl.textContent = this._cardText;

    super.open()

 }
}