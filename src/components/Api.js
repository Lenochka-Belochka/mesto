export class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  //Ответ от сервера
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка выполнении запроса к серверу: ${res.status}`);
  }

  //Публичный метод для загрузки карточек

  getInitialCards() {
    const request = this._baseUrl + "/cards";
    // возвращаем промис
    return fetch(request, {
      method: "GET",
      headers: this._headers,
    })
      .then((res) => this._checkResponse(res))
      .catch((err) => {
        console.log(`Ошибка при выполнении запросе: ${err}!`);
      });
  }

  // Публичный метод для загрузки пользовательского профиля

  getUserProfile() {
    const request = this._baseUrl + "/users/me";
    return fetch(request, {
      method: "GET",
      headers: this._headers,
    })
      .then((res) => this._checkResponse(res))
      .catch((err) => {
        console.log(`Ошибка при выполнении запросе: ${err}!`);
      });
  }

  // Метод для удаления карточки
  deleteCard(cardId) {
    const request = this._baseUrl + `/cards/${cardId}`;
    return fetch(request, {
      method: "DELETE",
      headers: this._headers,
    })
      .then((res) => this._checkResponse(res))
      .catch((err) => {
        console.log(`Ошибка при выполнении запросе: ${err}!`);
      });
  }

  // Метод для добавления карточки

  addCard(cardData) {
    const request = this._baseUrl + "/cards";
    const newHeaders = this._headers;
    newHeaders["Content-Type"] = "application/json";
    return fetch(request, {
      method: "POST",
      headers: newHeaders,
      body: JSON.stringify({
        name: cardData.name,
        link: cardData.link,
      }),
    })
      .then((res) => this._checkResponse(res))
      .catch((err) => {
        console.log(`Ошибка при выполнении запросе: ${err}!`);
      });
  }

  //Метод для сохранения данных профиля пользователя

  saveNewProfile(profileData) {
    const request = this._baseUrl + "/users/me";
    const newHeaders = this._headers;
    newHeaders["Content-Type"] = "application/json";
    // отправляем запрос
    return fetch(request, {
      method: "PATCH",
      headers: newHeaders,
      body: JSON.stringify({
        name: profileData.name,
        about: profileData.about,
      }),
    })
      .then((res) => this._checkResponse(res))
      .catch((err) => {
        console.log(`Ошибка при выполнении запросе: ${err}!`);
      });
  }

  // Метод для Обновления автара в профиле пользователя
  updateAvatar(newAvatar) {
    const request = this._baseUrl + "/users/me/avatar";
    const newHeaders = this._headers;
    newHeaders["Content-Type"] = "application/json";
    return fetch(request, {
      method: "PATCH",
      headers: newHeaders,
      body: JSON.stringify({
        avatar: newAvatar.link,
      }),
    })
      .then((res) => this._checkResponse(res))
      .catch((err) => {
        console.log(`Ошибка при выполнении запросе: ${err}!`);
      });
  }

  // Метод для удаления лайка карточки
  deleteLike(cardId) {
    const request = this._baseUrl + `/cards/${cardId}/likes`;
    return fetch(request, {
      method: "DELETE",
      headers: this._headers,
    })
      .then((res) => this._checkResponse(res))
      .catch((err) => {
        console.log(`Ошибка при выполнении запросе: ${err}!`);
      });
  }

  // Метод для лайка карточки
  likeCard(cardId) {
    const request = this._baseUrl + `/cards/${cardId}/likes`;
    return fetch(request, {
      method: "PUT",
      headers: this._headers,
    })
      .then((res) => this._checkResponse(res))
      .catch((err) => {
        console.log(`Ошибка при выполнении запросе: ${err}!`);
      });
  }
}
