import {openPopup} from './index.js';

export class Card {
 constructor(text, image, templateSelector, popupElement){
    this._text = text;
    this._image = image;
    this._templateSelector = templateSelector;
    this._popupElement = popupElement;


    this._imageElement = popupElem.querySelector('.popup__image');
    this._titleElement = popupElem.querySelector('.popup__title');
 }

 _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.photo-grid__item')
    .cloneNode(true);

    return cardElement;
  }



  //лайк
 _addLikeOnPhoto(evt) {
    evt.target.classList.toggle("photo-grid__button_active");
  }

  //удаление
  _deleteCard(evt) {
    this._element.remove();
  }

  //открытие окна при клике на картинку
 _openPopupCard(cardData, popupElement) {
    this._imageElement.src = cardData.src;
    this._imageElemen.alt = cardData.name;
    this._titleElement.textContent = cardData.name;

    openPopup(popupElement);
  }

 
  
  _setEventListeners() {
      //лайк
    this._element.querySelector('.photo-grid__button').addEventListener('click', (evt) => {
      this._addLikeOnPhoto(evt);
    })
     //удаление
    this._element.querySelector('.photo-grid__button_delete').addEventListener('click', (evt) => {
      this._deleteCard(evt);
    })

    // клик на картинку
    this._element.querySelector('.photo-grid__image').addEventListener('click', () => {
      this._openPopupCard({src: this._image, name: this._text}, this._popupElement);
    })

  }



  useCard() {
    this._element = this._getTemplate();
    const pictureElement = this._element.querySelector('.photo-grid__image');

    pictureElement.src = this._image;
    pictureElement.alt = this._text;
    this._element.querySelector('.photo-grid__item-title').textContent = this._text;

    this._setEventListeners();

    return this._element;
  }

}