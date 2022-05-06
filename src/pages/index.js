import "./index.css";

import { initialCards } from "../utils/constants.js";
import { commonObject } from "../utils/constants.js";
import { userInfoSettings } from "../utils/constants.js";
import { popupEd } from "../utils/constants.js";
import { popupAdd } from "../utils/constants.js";
import { buttonEd } from "../utils/constants.js";
import { cardButton } from "../utils/constants.js";
import { popupName } from "../utils/constants.js";
import { popupCaption } from "../utils/constants.js";

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

//открытие поп ап редактирования
function openEditPopup(profileEditValidator) {
  const userData = userInfo.getUserInfo();
  popupName.value = userData.userName;
  popupCaption.value = userData.userJob;
  profileFormPopup.open();
  profileEditValidator.clearFormInputError();
}

// создаем экземпляр класса PopupWithForm для добавления карточки
const addItemFormPopup = new PopupWithForm(".popup_type_add", {
  handleSubmit: (formData) => {
    cardsList.addItem(formData);
    addItemFormPopup.close();
  },
});

//открытие поп ап добавления карточки
function openAddCardPopup(cardAddFormElementValidator) {
  addItemFormPopup.open();
  cardAddFormElementValidator.clearFormInputError();
}

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  jobSelector: '.profile__caption'
})

// создаем экземпляр класса PopupWithForm для редактирования профиля
const profileFormPopup = new PopupWithForm(
  ".popup_type_edit",
  {handleSubmit: (formData) => {
    userInfo.setUserInfo(formData);
    console.log(formData);
    profileFormPopup.close();}
  }
);
// устанавливаем слушатели
profileFormPopup.setEventListeners();

// устанавливаем слушатели
addItemFormPopup.setEventListeners();

//Экземпляр класса FormValidator
const profileEditValidator = new FormValidator(commonObject, popupEd);
profileEditValidator.enableValidation();

//Экземпляр класса FormValidator
const cardAddFormElementValidator = new FormValidator(commonObject, popupAdd);
cardAddFormElementValidator.enableValidation();

buttonEd.addEventListener("click", () => {
  openEditPopup(profileEditValidator);
});

// назначаем событие - нажали на кнопку "Добавить карточку"
cardButton.addEventListener("click", () => {
  openAddCardPopup(cardAddFormElementValidator);
});

const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(
        {
          data: item,
          handleCardClick: () => {
            const imagePopup = new PopupWithImage(".popup_type_card");
            imagePopup.setEventListeners();
            imagePopup.open(item.name, item.link);
          },
        },
        "#grid-template"
      );
      const newCardFromTemplate = card.getCard();
      return newCardFromTemplate;
    },
  },
  ".photo-grid__list"
);

cardsList.renderItems();
