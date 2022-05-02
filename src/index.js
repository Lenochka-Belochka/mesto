import './index.css';

import {initialCards} from './scripts/constants.js';
import {commonObject} from './scripts/constants.js';
import {userInfoSettings} from './scripts/constants.js';
import {popupEd} from './scripts/constants.js';
import {popupAdd} from './scripts/constants.js';
import {buttonEd} from './scripts/constants.js';
import {cardButton} from './scripts/constants.js';
import {profileName} from './scripts/constants.js';
import {profileCaption} from './scripts/constants.js';


import { Card } from './scripts/Card.js';
import { FormValidator } from './scripts/FormValidator.js';
import { Section } from './scripts/Section.js';
import { PopupWithImage } from './scripts/PopupWithImage.js';
import { PopupWithForm } from './scripts/PopupWithForm.js';
import { UserInfo } from './scripts/UserInfo.js';


function createNewCard(Name, Link, cardTemplate, imagePopup) {
  const card = new Card(Name, Link, cardTemplate, imagePopup, () => {
    // передаем в popup данные поднимаемой карточки
    card._popupEl.setCardData(card._text, card._image);
    card._popupEl.open();
  }
  );

  cardsList.addItem(card.useCard());
}


//открытие поп ап редактирования
function openEditPopup(profileEditValidator) {
  const userInfo = user.getUserInfo();
  profileName.value = userInfo.user_name;
  profileCaption.value = userInfo.about_self;
  profileFormPopup.open();
  profileEditValidator.clearFormInputError();
}

//открытие поп ап добавления карточки
function openAddCardPopup(cardAddFormElementValidator) {
  addItemFormPopup.open();
  cardAddFormElementValidator.clearFormInputError();
}



const user = new UserInfo(userInfoSettings);

// Создаем popup для отображения карточки
const imagePopup = new PopupWithImage('.popup_type_card');
imagePopup.setEventListeners();

// создаем экземпляр класса PopupWithForm для редактирования профиля
const profileFormPopup = new PopupWithForm('.popup_type_edit',
  //вторым параметром передаем колбэк сабмита формы, т.к. нужно учесть логику формы
  (formData) => {
    // сохраняем новые значения user
    user.setUserInfo({user_name: formData.name, about_self: formData.about});
  });
// устанавливаем слушатели
profileFormPopup.setEventListeners();

// создаем экземпляр класса PopupWithForm для добавления карточки
const addItemFormPopup = new PopupWithForm('.popup_type_add',
  //вторым параметром передаем колбэк сабмита формы, т.к. нужно учесть логику формы
  (formData) => {
    createNewCard(formData.name, formData.link, '#grid-template', imagePopup);
  });
// устанавливаем слушатели
addItemFormPopup.setEventListeners();



//Экземпляр класса FormValidator 
const profileEditValidator = new FormValidator(commonObject, popupEd);
profileEditValidator.enableValidation();

//Экземпляр класса FormValidator 
const cardAddFormElementValidator = new FormValidator(commonObject, popupAdd);
cardAddFormElementValidator.enableValidation();


buttonEd.addEventListener('click', () => { openEditPopup(profileEditValidator); });

// назначаем событие - нажали на кнопку "Добавить карточку"
cardButton.addEventListener('click', () => { openAddCardPopup(cardAddFormElementValidator); });

// создаем экземпляр класса Section, который отвечает за отрисовку элементов на странице
const cardsList = new Section({data: initialCards, renderer:
  ({name: Name, link: Link}) => {
    createNewCard(Name, Link, '#grid-template', imagePopup);
  }
}, '.photo-grid__list');

// отрисовываем карточки при начальной загрузке страницы
cardsList.renderItems();







