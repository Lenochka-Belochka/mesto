const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
 
 const commonObject = {
    formSelector: '.form',
    inputSelector: '.form__input',
    inactiveButtonClass: 'popup__button_type_disabled',
    submitButtonSelector: '.popup__button_type_save',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'popup__error_active'
  }

  
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


// DOM
const popupName = popupEd.querySelector(".form__input_type_name");
const popupCaption = popupEd.querySelector(".form__input_type_caption");

const popupPlace = popupAdd.querySelector(".form__input_type_place");
const popupLink = popupAdd.querySelector(".form__input_type_link");

// Карточки
const elements = document.querySelector(".photo-grid__list");

// template
const cardTemplate = document.querySelector("#grid-template").content;

