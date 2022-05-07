export class Card {
  constructor({ data, handleCardClick }, selector) {
    this.data = data;
    this.handleCardClick = handleCardClick;
    this.selector = selector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this.selector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  //лайк
  _addLikeOnPhoto(evt) {
    evt.target.classList.toggle("element__button_active");
  }

  //удаление
  _deleteCard(evt) {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    //лайк
    this._element
      .querySelector(".element__button")
      .addEventListener("click", (evt) => {
        this._addLikeOnPhoto(evt);
      });
    //удаление
    this._element
      .querySelector(".element__button_delete")
      .addEventListener("click", (evt) => {
        this._deleteCard(evt);
      });

    // клик на картинку
    this._pictureElement.addEventListener("click", () => {
      this.handleCardClick();
    });
  }

  getCard() {
    this._element = this._getTemplate();

    this._pictureElement = this._element.querySelector(".element__image");

    this._pictureElement.src = this.data.link;
    this._pictureElement.alt = this.data.name;
    this._element.querySelector(".element__item-title").textContent =
      this.data.name;

    this._setEventListeners();
    return this._element;
  }
}
