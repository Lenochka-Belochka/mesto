import {profileName} from './constants.js';
import {profileCaption} from './constants.js';

// Класс UserInfo - управление отображением информации о пользователе на странице

 export class UserInfo {
  constructor(userInfo) {
    this._userName = userInfo.user_name;
    this._userAboutSelf = userInfo.about_self;
    // обновим данные в разметке
    profileName.textContent=this._userName;
    profileCaption.textContent=this._userAboutSelf;
  }

// Возврат объект с данными пользователя

getUserInfo() {
  return {user_name: this._userName, about_self: this._userAboutSelf};
}

// принимает новые данные пользователя и добавляет их на страницу

setUserInfo(userInfo) {
  // сохраним данные пользователя
  this._userName = userInfo.user_name;
  this._userAboutSelf = userInfo.about_self;
  // обновим данные в разметке
  profileName.textContent=this._userName;
  profileCaption.textContent=this._userAboutSelf;
}

}