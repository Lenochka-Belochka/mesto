import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

export const popupCardImage = popupCard.querySelector(".popup__image");
export const popupCardTitle = popupCard.querySelector(".popup__title");

// функция открытия поп ап
export function openPopup(popupEl) {
  popupEl.classList.add("popup_opened");
  document.addEventListener('keydown', closePopupClickOnEscapeButton);
}
//функция закрытия поп ап
function closePopup(popupEl) {
  popupEl.classList.remove("popup_opened");
  document.removeEventListener('keydown', closePopupClickOnEscapeButton);
}

// Создаю функцию закрытия попапа при клике на Esc
function closePopupClickOnEscapeButton(event) {
  if (event.key === 'Escape'){
    const showPopup = document.querySelector('.popup_opened');
    closePopup(showPopup);
  }
}
// Создаю функцию закрытия попапа по клику на поле

function closePopupClickOnOverlay(popupEd) {
  return function(event){
  if (event.target === event.currentTarget){
    closePopup(popupEd);
  }
}
}



function createNewCard(Name, Link, cardTemplate, popupCard) {
  const cardItem = new Card(Name, Link, cardTemplate, popupCard);
  return cardItem.useCard();
}

function pasteCard(cardEl) {
  elements.prepend(cardEl);
}

function addInitialCards() {
  initialCards.forEach((card) => {
    pasteCard(createNewCard(card.name, card.link, '#grid-template', popupCard));
 });
}


function saveNewItem(evt) {
  evt.preventDefault();

  pasteCard(createNewCard(popupPlace.value, popupLink.value, '#grid-template', popupCard));

  closePopup(popupAdd);
}




//открытие поп ап редактирования
function openEditPopup(profileEditValidator) {
  popupName.value = profileName.textContent;
  popupCaption.value = profileCaption.textContent;
  openPopup(popupEd);
  profileEditValidator.clearFormInputError();
}


//открытие поп ап добавления карточки
function openAddCardPopup(cardAddFormElementValidator) {
  cardAddFormElement.reset();
  openPopup(popupAdd);
  cardAddFormElementValidator.clearFormInputError();
}



//функция для сохранения значений в профиле редактирования
function submitProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileCaption.textContent = popupCaption.value;
  closePopup(popupEd);
}


addInitialCards(initialCards);

//Экземпляр класса FormValidator 
const profileEditValidator = new FormValidator(commonObject, formProfileElement);
profileEditValidator.enableValidation();

//Экземпляр класса FormValidator 
const cardAddFormElementValidator = new FormValidator(commonObject, cardAddFormElement);
cardAddFormElementValidator.enableValidation();


buttonEd.addEventListener('click', () => {openEditPopup(profileEditValidator); });
cardButton.addEventListener('click', () => {openAddCardPopup(cardAddFormElementValidator);});

formProfileElement.addEventListener('submit', submitProfileForm);
cardAddFormElement.addEventListener('submit', saveNewItem);


popupAdd.addEventListener('click', closePopupClickOnOverlay(popupAdd));
popupEd.addEventListener('click', closePopupClickOnOverlay(popupEd));
popupCard.addEventListener('click', closePopupClickOnOverlay(popupCard));

popupButtonExit.addEventListener("click", () => closePopup(popupAdd));
popupButtonClose.addEventListener("click", () => closePopup(popupEd));
buttonCloseCard.addEventListener("click", () => closePopup(popupCard));





