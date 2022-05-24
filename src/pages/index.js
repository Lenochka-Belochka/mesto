import "./index.css";

import { commonObject } from "../utils/constants.js";
import { popupEd } from "../utils/constants.js";
import { popupAdd } from "../utils/constants.js";
import { buttonEd } from "../utils/constants.js";
import { cardButton } from "../utils/constants.js";
import { profileName } from "../utils/constants.js";
import { profileCaption } from "../utils/constants.js";
import { avatarEditForm } from "../utils/constants.js";
import { avatarEditButton } from "../utils/constants.js";
import { cardDeleteButton } from "../utils/constants.js";


import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import {Api} from "../components/Api.js";



// создаем класс для взаимодействия с сервером Mesto
const api = new Api({
  baseUrl: `https://mesto.nomoreparties.co/v1/cohort-41`,
  headers: {
    authorization: '0e0878b0-27c7-481c-9d47-0d05d423b137'
  }
});


//открытие поп ап редактирования
function openEditPopup(profileEditValidator) {
  const userData = userInfo.getUserInfo();
  profileFormPopup.setInputValues({name: userData.user_name, about: userData.about_self});
  profileFormPopup.open();
  profileEditValidator.clearFormInputError();
}

//открытие поп ап добавления карточки
function openAddCardPopup(cardAddFormElementValidator) {
  addItemFormPopup.open();
  cardAddFormElementValidator.clearFormInputError();
}

// Функция обновления аватара
 function showEditAvatarForm(avatarEditFormValidator) {
  editAvatarFormPopup.open();
  avatarEditFormValidator.clearFormInputError();
}
// создаем профиль пользователя
const userInfo = new UserInfo('.profile__image', profileName, profileCaption);

// cоздаем popup для отображения карточки:
const imagePopup = new PopupWithImage(".popup_type_card");
imagePopup.setEventListeners();


// создаем экземпляр класса PopupWithForm для редактирования профиля
const profileFormPopup = new PopupWithForm(".popup_type_edit",
    (formData) => {
    return api.saveNewProfile(formData)
    .then((result) => {
      userInfo.setUserInfo(result);
    })
    .catch((err) => {
      console.log(`Ошибка при сохранении данных профиля: ${err}!`)
    });
});
profileFormPopup.setEventListeners();



// создаем экземпляр класса PopupWithForm для добавления карточки
const addItemFormPopup = new PopupWithForm(".popup_type_add", 
 (formData) => {
  return api.addCard(formData)
  .then((result) => {
    cardsList.addItem(result);
  })
  .catch((err) => {
    console.log(`Ошибка при сохранении карточки: ${err}!`)
  });
});
addItemFormPopup.setEventListeners();



// создаем экземпляр класса PopupWithForm для подтверждения удаления карточки


// создаем экземпляр класса PopupWithForm для редактирования аватара 
const editAvatarFormPopup = new PopupWithForm('.popup_type_update-avatar',
  (newAvatar) => {
    return api.updateAvatar(newAvatar)
    .then((result) => {
      userInfo.setUserInfo(result);
    })
    .catch((err) => {
      console.log(`Ошибка при сохранении аватара: ${err}!`)
    });
}
);
editAvatarFormPopup.setEventListeners();




//Экземпляр класса FormValidator
const avatarEditFormValidator = new FormValidator(commonObject, avatarEditForm);
avatarEditFormValidator.enableValidation();

//Экземпляр класса FormValidator
const profileEditValidator = new FormValidator(commonObject, popupEd);
profileEditValidator.enableValidation();

//Экземпляр класса FormValidator
const cardAddFormElementValidator = new FormValidator(commonObject, popupAdd);
cardAddFormElementValidator.enableValidation();




// "Обновить аватар"
avatarEditButton.addEventListener('click', () => { showEditAvatarForm(avatarEditFormValidator); });

buttonEd.addEventListener("click", () => {
  openEditPopup(profileEditValidator);
});

// "Добавить карточку"
cardButton.addEventListener("click", () => {
  openAddCardPopup(cardAddFormElementValidator);
});



const cardsList = new Section(
  {
    renderer: ({_id: newId, name: newName, link: newLink, likes: newLikes, owner: {_id: ownerId}}) => {
      const userId = userInfo.getUserInfo().user_id;
      let isTrash = false;
      if (ownerId === userId) {
        isTrash = true;
      }
        const card = new Card(isTrash, userId, ownerId, newId, newName, newLink, newLikes, "#grid-template", imagePopup,
        ({cardElem, cardId}) => {
          const confirmFormPopup = new PopupWithConfirmation('.popup_type_confirm', 
          () => {
            api.deleteCard(confirmFormPopup.getCardId())
            .then((result) => {
              confirmFormPopup.close();
              card.removeCard()
            })
            .catch((err) => {
              console.log(`Ошибка при обработке запросе удаления карточки : ${err}!`);
            });
          }
          );
          confirmFormPopup.setEventListeners();
          
          confirmFormPopup.open();
          confirmFormPopup.setCardData(cardElem, cardId);
          
        },
        (cardId) => {
          if(card.isLike()) {
            api.deleteLike(cardId)
              .then((result) => {
                card.updateLike(result.likes.length);
              })
              .catch((err) => {
                console.log(`Ошибка при сбросе лайка: ${err}!`);
              }
            );
          }
          else {
            api.likeCard(cardId)
            .then((result) => {
                card.updateLike(result.likes.length);
            })
            .catch((err) => {
              console.log(`Ошибка при нажатии нравится: ${err}!`);
            }
          );
        }
      }
    );
    return card.getCard();
  } 
 }, ".photo-grid__list");

const promiseUser = api.getUserProfile();
const promiseCards = api.getInitialCards();

Promise.all([promiseUser, promiseCards])
  .then (([userElem, cards]) => {
    userInfo.setUserInfo(userElem);
    cardsList.setCardItems(cards.reverse());
    cardsList.renderItems();
  })
  .catch((err) => {
    console.log(`Ошибка при запросе данных: ${err}!`)
  });