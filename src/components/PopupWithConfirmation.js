import {Popup} from './Popup.js';

// Отвечает за открытие и закрытие попапа c формой

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;

    this._form = this._popup.querySelector('.form');
 }


 setEventListeners() {

  this._popup.addEventListener('submit', (evt) => {
    evt.preventDefault();
    this._handleSubmit();
   });

  super.setEventListeners();
 }




  setCardData(cardElem, cardId) {
    this._cardElem = cardElem;
    this._cardId = cardId;
  }


  getCardId() {
    return this._cardId;
  }

}