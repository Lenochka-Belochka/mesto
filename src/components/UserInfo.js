export class UserInfo {
  constructor(avatarSelector, title, subtitle) {
    this._userName = 'no name';
    this._userAboutSelf = 'no about';
    this._avatarElem = document.querySelector(avatarSelector);
    this._titleElem  = title;
    this._subtitleElem = subtitle;
  }


  getUserInfo() {
    const userData = {
      user_name: this._userName,
      user_id: this._userId,
      about_self: this._userAboutSelf,
    };
    return userData;
  }


  setUserInfo({ name, about, avatar, _id }) {
    this._userName = name;
    this._userAboutSelf = about;
    this._avatar = avatar;
    this._userId = _id;

    this._titleElem.textContent = this._userName;
    this._subtitleElem.textContent = this._userAboutSelf;
    this._avatarElem.src = this._avatar;
  }
}

