export class Card {
 constructor(text, image, templateSelector, popupEl, handleCardClick){
    this._text = text;
    this._image = image;
    this._templateSelector = templateSelector;
    this._popupEl = popupEl;
    this._handleCardClick = handleCardClick;
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
    this._element = null;
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
    this._element.querySelector('.photo-grid__image').addEventListener('click', this._handleCardClick);

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