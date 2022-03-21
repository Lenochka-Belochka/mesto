// Создаю исходный объект
const commonObject = {
    formSelector: '.form',
    inputSelector: '.form__input',
    inactiveButtonClass: 'popup__button_type_disabled',
    submitButtonSelector: '.popup__button_type_save',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'popup__error_active'
  }

  // Создаю функцию, которая показывает стиль и текст ошибки
  const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };
  

  // Создаю функцию, которая скрывает стиль и текст ошибки
  const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  };
  

  // Создаю функцию, которая осуществляет проверку на валидность
  const checkInputValidity = (formElement, inputElement, {inputErrorClass, errorClass}) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
    } else {
      hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    }
  };
  

  // Создаю функцию, которая добавляет слушатели 
  const setEventListeners = (formElement, {inputSelector, submitButtonSelector, inactiveButtonClass, ...rest}) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, rest);
        toggleButtonState(inputList, buttonElement, inactiveButtonClass);
      });
    });
  };
  
  // Создаю функцию, которая  проверяет наличие неволидных полей
  const hasInvalidInput = (inputList) =>{
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }
  

  // Создаю функцию, которая разблокирует кнопку 
    const enableSubmitButton = (buttonElement, inactiveButtonClass) => {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
      }

  // Создаю функцию, которая блокирует кнопку
  const disableSubmitButton = (buttonElement, inactiveButtonClass) => {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  }

  
  // tooggle кнопки
  const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (hasInvalidInput(inputList)){
      disableSubmitButton(buttonElement, inactiveButtonClass);
    } else {
      enableSubmitButton(buttonElement, inactiveButtonClass);
    }
  }
  
  // Создаю функцию, которая запускает валидацию форм
  const enableValidation = ({formSelector, ...rest}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      })
      setEventListeners(formElement, rest);
    })
  }
  
  enableValidation(commonObject);