export class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._userName = document.querySelector(nameSelector); 
    this._userJob = document.querySelector(jobSelector); 
  }

  // Возврат объект с данными пользователя

  getUserInfo() {
    const userData = {
      userName: this._userName.textContent,
      userJob: this._userJob.textContent,
    };
    return userData;
  }

  // принимает новые данные пользователя и добавляет их на страницу

  setUserInfo({ name, about }) {
    this._userName.textContent = name;
    this._userJob.textContent = about;
  }
}
