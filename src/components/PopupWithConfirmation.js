import {Popup} from './Popup.js';

// Отвечает за открытие и закрытие попапа c формой

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;

    // собственно форма
    this._form = this._popup.querySelector('.form');
 }

 // обработчик клика иконке закрытия и обработчик сабмита формы

 setEventListeners() {

  this._popup.addEventListener('submit', (evt) => {
    evt.preventDefault();
    this._handleSubmit();
   });

  super.setEventListeners();
 }

 // Удаление карточки

  deleteCard() {
    this._cardElem.remove();
    this._cardElem = null;
  }

  // элемент и id карточки, удаление которой подтверждаем

  setCardData(cardElem, cardId) {
    this._cardElem = cardElem;
    this._cardId = cardId;
  }

  //Функция для возврата id карточки

  getCardId() {
    return this._cardId;
  }

}