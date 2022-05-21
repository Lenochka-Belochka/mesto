export class Card {
  constructor(
    isTrash,
    userId,
    ownerId,
    id,
    text,
    image,
    likes,
    templateSelector,
    popupElem,
    handleCardDelete,
    handleCardLike
  ) {
    this._text = text;
    this._image = image;
    this._likes = likes;
    this._templateSelector = templateSelector;
    this._popupElem = popupElem;

    this._handleCardClick = this._handleCardClick.bind(this);
    this._handleCardDelete = handleCardDelete;
    this._handleCardLike = handleCardLike;

    this._isTrash = isTrash;
    this._id = id; 
    this._userId = userId; 
    this._ownerId = ownerId; 

    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector(".element__button");
    this._trashButton = this._element.querySelector(".element__button_delete");
    this._cardImage = this._element.querySelector(".element__image");
    this._likeNumberElem = this._element.querySelector(
      ".element__likes-number"
    );
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  _likeCard(evt) {
    this._handleCardLike(this._id);
  }

  updateLike(numLikes) {
    this._likeNumberElem.textContent = numLikes;
    this._likeButton.classList.toggle("element__button_active");
  }

  isLike() {
    if (this._likeButton.classList.contains("element__button_active")){
      return true;    
    }
      return false;
  }

  _deleteCard(evt) {
    this._handleCardDelete({ cardElem: this._element, cardId: this._id });
  }

  _handleCardClick(evt) {
    this._popupElem.open(this._text, this._image);
  }

  _deleteCard(evt) {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", (evt) => {
      this._likeCard(evt);
    });
    this._trashButton.addEventListener("click", (evt) => {
      this._deleteCard(evt);
    });

    this._cardImage.addEventListener("click", this._handleCardClick);
  }

  getCard() {
    this._cardImage.src = this._image;
    this._cardImage.alt = this._text;
    this._element.querySelector(".element__item-title").textContent =
      this._text;
    this._likeNumberElem.textContent = this._likes.length;

    if (!this._isTrash) this._trashButton.style.display = "none";

    if (this._checkId(this._likes, this._userId))
      this._likeButton.classList.add("element__button_active");

    this._setEventListeners();
    return this._element;
  }

  _checkId(arr, targerId) {
    for (let index = 0; index < arr.length; ++index) {
      if (arr[index]._id === targerId) return true;
    }
    return false;
  }

  getCardId() {
    return this._id;
  }

  getCardElem() {
    return this._element;
  }
}
