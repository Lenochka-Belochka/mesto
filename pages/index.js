const editButton = document.querySelector('.profile__button_fact_edit')
const popupButtonClose = document.querySelector('.popup__button_type_close')
const popupButtonSave = document.querySelector('.popup__button_type_save')
const popupName = document.querySelector('.form__input_type_name')
const popupCaption = document.querySelector('.form__input_type_caption')
const Name = document.querySelector('.profile__name')
const Caption = document.querySelector('.profile__caption')
const popup = document.querySelector('.popup')
const formSubmit = document.querySelector('.form')

function openPopup() {
    popup.classList.add('popup_opened');
}
function closePopup() { //закрытие popup
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);
popupButtonClose.addEventListener('click', closePopup);


function formSubmitHandler (evt) {
    evt.preventDefault();
    popupName.getAttribute('value');
    popupCaption .getAttribute('value');
    Name.textContent = popupName.value;
    Caption.textContent = popupCaption.value;
    closePopup();
  }
  
popup.addEventListener('submit', formSubmitHandler);
