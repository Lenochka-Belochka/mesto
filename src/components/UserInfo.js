//import { profileName } from "../utils/constants.js";
//import { profileCaption } from "../utils/constants.js";

// Класс UserInfo - управление отображением информации о пользователе на странице

export class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameSelector = nameSelector;
    this._jobSelector = jobSelector;
    this._userName = document.querySelector(this._nameSelector);
    this._userJob = document.querySelector(this._jobSelector);
  }

  // Возврат объект с данными пользователя

  getUserInfo() {
    const userData = {
      userName: this._userName.textContent,
      userJob: this._userJob.textContent
    }
    return userData
  }

  // принимает новые данные пользователя и добавляет их на страницу

  setUserInfo({ name, about }) {
    this._userName.textContent = name;
    this._userJob.textContent = about;
  }

}
