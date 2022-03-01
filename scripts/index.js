//Объявляем переменные для поп-ап редактирования блока профиля
const editButton = document.querySelector('.profile__button_fact_edit')
const editPopup = document.querySelector('.popup-edit')
const popupButtonClose = document.querySelector('.popup__button_type_close')
const Name = document.querySelector('.profile__name')
const Caption = document.querySelector('.profile__caption')


//Объявляем еременные для поп-ап редактирования блока карточек
const addCardButton = document.querySelector('.profile__button_fact_add')
const addPopup = document.querySelector('.popup-add')
const popupButtonExit = document.querySelector('.popup__button_type_exit')


//Объявляем переменные для поп-ап общие
const popupButtonSave = document.querySelector('.popup__button_type_save')
const popup = document.querySelector('.popup')

//Объявляем переменные для работы с попапом из карточки
const popupCard = document.querySelector('.popup-card');
const buttonCloseCard = document.querySelector('.popup__button_type_ex');
const popupCardImage = popupCard.querySelector('.popup-card__image');
const popupCardTitle = popupCard.querySelector('.popup-card__title');


// DOM
const popupEditElement = document.querySelector('.form-edit');
const popupName = popupEditElement.querySelector('.form__input_type_name')
const popupCaption = popupEditElement.querySelector('.form__input_type_caption')

const popupAddElement = document.querySelector('.form-add');
const popupPlace = popupAddElement.querySelector('.form__input_type_place')
const popupLink = popupAddElement.querySelector('.form__input_type_link')


// Карточки
const elements = document.querySelector('.photo-grid__list');

// template
const cardTemplate = document.querySelector('#grid-template').content;

//переключатель окрытия закрытия поп ап
function togglePopup(popup) {
  popup.classList.toggle('popup_opened');
}

//исходные значения в поле редактирования
function FirstData () {
popupName.value = Name.textContent;
popupCaption.value = Caption.textContent;
}

//открытие поп ап редактирования
function openEditPopup() {
  togglePopup(editPopup);
  FirstData();
}

//события для окна редактирования
editButton.addEventListener('click', openEditPopup);
popupButtonClose.addEventListener('click', () => togglePopup(editPopup));

//функция для сохранения значений в профиле редактирования
function formSubmitHandler (evt) {
  evt.preventDefault();
  popupName.getAttribute('value');
  popupCaption.getAttribute('value');
  Name.textContent = popupName.value;
  Caption.textContent = popupCaption.value;
  togglePopup(editPopup);
}
popup.addEventListener('submit', formSubmitHandler);


//события для окна добавления картинки
addCardButton.addEventListener('click', () => togglePopup(addPopup));
popupButtonExit.addEventListener('click', () => togglePopup(addPopup));

// добавляем стартовые картинки
function initialPhoto() {
  initialCards.forEach((item) => {
    const newCardAdded = newCard(item.name, item.link);
    elements.append(newCardAdded);
  });
}
initialPhoto();

//открытие окна при клике на картинку
function openPopupCard(name, link) {
  popupCardImage.src = link.src;
  popupCardImage.alt = name.textContent;
  popupCardTitle.textContent = name.textContent;
}

//закрытие картинки
buttonCloseCard.addEventListener('click', () => togglePopup(popupCard));

//удаление
function deleteCard(element) {
  element.closest('li').remove();
}

//лайк
function LikeOnPhoto(element) {
  element.classList.toggle('photo-grid__button_active');
}


//новая карточка
  function newCard(name, link) {
  const cardElement = cardTemplate.querySelector('.photo-grid__item').cloneNode(true);
  const cardElementTitle = cardElement.querySelector('.photo-grid__item-title');
  const cardElementLike = cardElement.querySelector('.photo-grid__button');
  const cardElementDelete = cardElement.querySelector('.photo-grid__button_delete');
  const cardElementPicture = cardElement.querySelector('.photo-grid__image');
  cardElementPicture.alt = name;
  cardElementPicture.src = link;
  cardElementTitle.textContent = name;
  cardElementLike.addEventListener('click', () => {
    LikeOnPhoto(cardElementLike);
  });
  cardElementDelete.addEventListener('click', () => {
    deleteCard(cardElementDelete);
  });
  cardElementPicture.addEventListener('click', () => {
    openPopupCard(cardElementTitle, cardElementPicture);
    togglePopup(popupCard);
  });
  return cardElement;
}


//вставка карточки из формы
function addCardForm() {
  const newCardAdded = newCard(popupPlace.value, popupLink.value);
  elements.prepend(newCardAdded);
}

//очищение формы 
function clearForm() {
  popupPlace.value = '';
  popupLink.value = '';
}


// отправка формы новой карточки
function addNewCard(evt) {
  evt.preventDefault(); //
  addCardForm();
  clearForm();
  togglePopup(addPopup);
}
popupAddElement.addEventListener('submit', addNewCard);



