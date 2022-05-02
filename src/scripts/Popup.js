//  класс отвечающий за открытие и закрытие попапа

export class Popup {
    constructor(popupSelector) {
      this._popup = document.querySelector(popupSelector);
      this._handleEscClose = this._handleEscClose.bind(this);
    }
  
  
   // Публичный метод - открытие popup
   
   open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
   }
  
   // Публичный метод - закрытие popup
   
   close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
   }
  
   // Приватный метод - логика закрытия попапа клавишей Esc
    
   _handleEscClose(evt) {
    if(evt.key === 'Escape') {
      this.close();
    }
  }
  
   // Публичный метод - закрытие по иконке закрытия попапа
   
   setEventListeners() {
  
    this._popup.addEventListener('mousedown', (event) => {
        //  надо что-то делать с кнопками
      this._buttonClose = this._popup.querySelector('.popup__button_type_close');
  
      if (event.target !== event.currentTarget && event.target !== this._buttonClose) {
        return;
      }
      else
        this.close();
      }
      );
    }
}