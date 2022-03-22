//Объявляем переменные для поп-ап редактирования блока профиля
const buttonEd = document.querySelector(".profile__button_fact_edit");
const popupEd = document.querySelector(".popup_type_edit");
const popupButtonClose = document.querySelector(".popup__button_type_close");
const profileName = document.querySelector(".profile__name");
const profileCaption = document.querySelector(".profile__caption");
const formProfileElement = document.querySelector('#profileForm');

//Объявляем еременные для поп-ап редактирования блока карточек
const cardButton = document.querySelector(".profile__button_fact_add");
const popupAdd = document.querySelector(".popup_type_add");
const popupButtonExit = document.querySelector(".popup__button_type_exit");
const cardAddFormElement = document.querySelector('#addPlace');
const photoName = document.querySelector('#photoName');
const photoLink = document.querySelector('#photoLink');

//Объявляем переменные для поп-ап общие
const popupButtonSave = document.querySelector(".popup__button_type_save");

//Объявляем переменные для работы с попапом из карточки
const popupCard = document.querySelector(".popup_type_card");
const buttonCloseCard = document.querySelector(".popup__button_type_ex");
const popupCardImage = popupCard.querySelector(".popup__image");
const popupCardTitle = popupCard.querySelector(".popup__title");

// DOM
const popupName = popupEd.querySelector(".form__input_type_name");
const popupCaption = popupEd.querySelector(".form__input_type_caption");

const popupPlace = popupAdd.querySelector(".form__input_type_place");
const popupLink = popupAdd.querySelector(".form__input_type_link");

// Карточки
const elements = document.querySelector(".photo-grid__list");

// template
const cardTemplate = document.querySelector("#grid-template").content;




// функция открытия поп ап
function openPopup(popupEd) {
  popupEd.classList.add("popup_opened");
  document.addEventListener('keydown', closePopupClickOnEscapeButton);
}
//функция закрытия поп ап
function closePopup(popupEd) {
  popupEd.classList.remove("popup_opened");
  document.removeEventListener('keydown', closePopupClickOnEscapeButton);
}

//открытие поп ап редактирования
function openEditPopup() {
  popupName.value = profileName.textContent;
  hideInputError(formProfileElement, popupName, commonObject.inputErrorClass, commonObject.errorClass);
  popupCaption.value = profileCaption.textContent;
  hideInputError(formProfileElement, popupCaption, commonObject.inputErrorClass, commonObject.errorClass);
  enableSubmitButton(popupButtonSave, commonObject.inactiveButtonClass);
  openPopup(popupEd);
}


//функция для сохранения значений в профиле редактирования
function submitProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileCaption.textContent = popupCaption.value;
  closePopup(popupEd);
}
popupEd.addEventListener("submit", submitProfileForm);


//события для окна добавления картинки
popupButtonExit.addEventListener("click", () => closePopup(popupAdd));

//открытие окна при клике на картинку
function openPopupCard(name, link) {
  popupCardImage.src = link.src;
  popupCardImage.alt = name.textContent;
  popupCardTitle.textContent = name.textContent;
}

//закрытие картинки
buttonCloseCard.addEventListener("click", () => closePopup(popupCard));

//удаление
function deleteCard(element) {
  element.closest("li").remove();
}

//лайк
function addLikeOnPhoto(element) {
  element.classList.toggle("photo-grid__button_active");
}



//новая карточка
function createNewCard(item) {
  const cardElement = cardTemplate
    .querySelector(".photo-grid__item")
    .cloneNode(true);
  const cardElementTitle = cardElement.querySelector(".photo-grid__item-title");
  const cardElementLike = cardElement.querySelector(".photo-grid__button");
  const cardElementDelete = cardElement.querySelector(
    ".photo-grid__button_delete"
  );
  const cardElementPicture = cardElement.querySelector(".photo-grid__image");
  cardElementPicture.alt = item.name;
  cardElementPicture.src = item.link;
  cardElementTitle.textContent = item.name;
  cardElementLike.addEventListener("click", () => {
    addLikeOnPhoto(cardElementLike);
  });
  cardElementDelete.addEventListener("click", () => {
    deleteCard(cardElementDelete);
  });
  cardElementPicture.addEventListener("click", () => {
    openPopupCard(cardElementTitle, cardElementPicture);
    openPopup(popupCard);
  });
  return cardElement;
}

function renderCard (item) {
  const newCardAdded = createNewCard(item);
  elements.prepend(newCardAdded);
}

initialCards.forEach((item) => renderCard(item));


// отправка формы новой карточки
function addNewCard(evt) {
  evt.preventDefault(); 
  const cardInformation = {};
  cardInformation.name = popupPlace.value;
  cardInformation.link = popupLink.value;
  renderCard(cardInformation);
  closePopup(popupAdd);
  popupPlace.value = " ";
  popupLink.value = " ";
}
popupAdd.addEventListener("submit", addNewCard);

//события для окна редактирования
buttonEd.addEventListener("click", openEditPopup);
popupButtonClose.addEventListener("click", () => closePopup(popupEd));




// Создаю функцию закрытия попапа по клику на поле
function closePopupClickOnOverlay(popupEd) {
  return function(event){
  if (event.target === event.currentTarget){
    closePopup(popupEd);
  }
}
}

// Создаю функцию закрытия попапа при клике на Esc
function closePopupClickOnEscapeButton(event) {
  if (event.key === 'Escape'){
    const popupOpen = document.querySelector('.popup_opened');
    closePopup(popupOpen);
  }
}


//открытие поп ап добавления карточки
function openAddCardPopup() {
  cardAddFormElement.reset();
  hideInputError(cardAddFormElement, photoName, commonObject.inputErrorClass, commonObject.errorClass);
  hideInputError(cardAddFormElement, photoLink, commonObject.inputErrorClass, commonObject.errorClass);
  enableValidation(commonObject);
  disableSubmitButton(popupButtonSave, commonObject.inactiveButtonClass);
  openPopup(popupAdd);
}

cardButton.addEventListener("click", openAddCardPopup);


// Слушатели событий закрытия попапов при клике на поле
popupAdd.addEventListener('click', closePopupClickOnOverlay(popupAdd));
popupEd.addEventListener('click', closePopupClickOnOverlay(popupEd));
popupCard.addEventListener('click', closePopupClickOnOverlay(popupCard));