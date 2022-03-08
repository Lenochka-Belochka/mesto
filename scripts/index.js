//Объявляем переменные для поп-ап редактирования блока профиля
const buttonEd = document.querySelector(".profile__button_fact_edit");
const popupEd = document.querySelector(".popup_type_edit");
const popupButtonClose = document.querySelector(".popup__button_type_close");
const profileName = document.querySelector(".profile__name");
const profileCaption = document.querySelector(".profile__caption");

//Объявляем еременные для поп-ап редактирования блока карточек
const cardButton = document.querySelector(".profile__button_fact_add");
const popupAdd = document.querySelector(".popup_type_add");
const popupButtonExit = document.querySelector(".popup__button_type_exit");

//Объявляем переменные для поп-ап общие
const popupButtonSave = document.querySelector(".popup__button_type_save");

//Объявляем переменные для работы с попапом из карточки
const popupCard = document.querySelector(".popup_type_card");
const buttonCloseCard = document.querySelector(".popup__button_type_ex");
const popupCardImage = popupCard.querySelector(".popup__image");
const popupCardTitle = popupCard.querySelector(".popup__title");

// DOM
const popupName = popupEd.querySelector(".form__input_type_name");
const popupCaption = popupEd.querySelector(
  ".form__input_type_caption"
);

const popupPlace = popupAdd.querySelector(".form__input_type_place");
const popupLink = popupAdd.querySelector(".form__input_type_link");

// Карточки
const elements = document.querySelector(".photo-grid__list");

// template
const cardTemplate = document.querySelector("#grid-template").content;

// функция открытия поп ап
function openPopup(popupEd) {
  popupEd.classList.add("popup_opened");
}
//функция закрытия поп ап
function closePopup(popupEd) {
  popupEd.classList.remove("popup_opened");
}

//открытие поп ап редактирования
function openEditPopup() {
  popupName.value = profileName.textContent;
  popupCaption.value = profileCaption.textContent;
  openPopup(popupEd);
}


//функция для сохранения значений в профиле редактирования
function submitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileCaption.textContent = popupCaption.value;
  closePopup(popupEd);
}
popupEd.addEventListener("submit", submitHandler);


//события для окна добавления картинки
cardButton.addEventListener("click", () => openPopup(popupAdd));
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
function createNewCard(name, link) {
  const cardElement = cardTemplate
    .querySelector(".photo-grid__item")
    .cloneNode(true);
  const cardElementTitle = cardElement.querySelector(".photo-grid__item-title");
  const cardElementLike = cardElement.querySelector(".photo-grid__button");
  const cardElementDelete = cardElement.querySelector(
    ".photo-grid__button_delete"
  );
  const cardElementPicture = cardElement.querySelector(".photo-grid__image");
  cardElementPicture.alt = name;
  cardElementPicture.src = link;
  cardElementTitle.textContent = name;
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

// добавляем стартовые картинки
function addInitialPhoto() {
  initialCards.forEach((item) => {
    const newCardAdded = createNewCard(item.name, item.link);
    elements.append(newCardAdded);
  });
}
addInitialPhoto();

//вставка карточки из формы
function addCardForm() {
  const newCardAdded = createNewCard(popupPlace.value, popupLink.value);
  elements.prepend(newCardAdded);
}

// отправка формы новой карточки
function addNewCard(evt) {
  evt.preventDefault(); //
  addCardForm();
  popupPlace.value = "";
  popupLink.value = "";
  closePopup(popupAdd);
}
popupAdd.addEventListener("submit", addNewCard);

//события для окна редактирования
buttonEd.addEventListener("click", openEditPopup);
popupButtonClose.addEventListener("click", () => closePopup(popupEd));
