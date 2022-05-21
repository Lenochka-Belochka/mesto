(()=>{"use strict";var e={formSelector:".form",inputSelector:".form__input",inactiveButtonClass:"popup__button_type_disabled",submitButtonSelector:".popup__button_type_save",inputErrorClass:"form__input_type_error",errorClass:"popup__error_active"},t=document.querySelector(".popup_type_update-avatar"),n=document.querySelector(".profile__edit-avatar-button"),r=document.querySelector(".profile__button_fact_edit"),o=document.querySelector(".popup_type_edit"),i=(document.querySelector(".popup__button_type_close"),document.querySelector(".profile__name"),document.querySelector(".profile__caption"),document.querySelector("#profileForm"),document.querySelector(".profile__button_fact_add")),u=document.querySelector(".popup_type_add"),c=(document.querySelector(".popup__button_type_exit"),document.querySelector("#addPlace"),document.querySelector("#photoName"),document.querySelector("#photoLink"),document.querySelector(".popup__button_type_save"),document.querySelector(".popup_type_card"),document.querySelector(".popup__button_type_ex"),o.querySelector(".form__input_type_name")),a=o.querySelector(".form__input_type_caption");function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}u.querySelector(".form__input_type_place"),u.querySelector(".form__input_type_link"),document.querySelector(".photo-grid__list"),document.querySelector("#grid-template").content;var l=function(){function e(t,n,r,o,i,u,c,a,s,l,f){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._text=i,this._image=u,this._likes=c,this._templateSelector=a,this._popupElem=s,this._handleCardClick=this._handleCardClick.bind(this),this._handleCardDelete=l,this._handleCardLike=f,this._isTrash=t,this._id=o,this._userId=n,this._ownerId=r,this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".element__button"),this._trashButton=this._element.querySelector(".element__button_delete"),this._cardImage=this._element.querySelector(".element__image"),this._likeNumberElem=this._element.querySelector(".element__likes-number")}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_likeCard",value:function(e){this._handleCardLike(this._id)}},{key:"updateLike",value:function(e){this._likeNumberElem.textContent=e,this._likeButton.classList.toggle("element__button_active")}},{key:"isLike",value:function(){return!!this._likeButton.classList.contains("elements__like-button_active")}},{key:"_deleteCard",value:function(e){this._element.remove(),this._element=null}},{key:"_handleCardClick",value:function(e){this._popupElem.open(this._text,this._image)}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(t){e._likeCard(t)})),this._trashButton.addEventListener("click",(function(t){e._deleteCard(t)})),this._cardImage.addEventListener("click",this._handleCardClick)}},{key:"getCard",value:function(){return this._cardImage.src=this._image,this._cardImage.alt=this._text,this._element.querySelector(".element__item-title").textContent=this._text,this._likeNumberElem.textContent=this._likes.length,this._isTrash||(this._trashButton.style.display="none"),this._checkId(this._likes,this._userId)&&this._likeButton.classList.add("elements__like-button_active"),this._setEventListeners(),this._element}},{key:"_checkId",value:function(e,t){for(var n=0;n<e.length;++n)if(e[n]._id===t)return!0;return!1}},{key:"getCardId",value:function(){return this._id}},{key:"getCardElem",value:function(){return this._element}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formEl=n}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_showInputError",value:function(e){var t=this._formEl.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formEl.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"clearFormInputError",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._inputList=Array.from(this._formEl.querySelectorAll(this._inputSelector)),this._buttonElement=this._formEl.querySelector(this._submitButtonSelector),this._setEventListeners()}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){var t=this._renderer(e);this._container.prepend(t)}},{key:"setCardItems",value:function(e){this._renderedItems=Array.from(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){return e.addItem(t)}))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__button_type_close"))&&e.close()}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function E(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e)).pictureEl=t._popup.querySelector(".popup__image"),t.captionEl=t._popup.querySelector(".popup__title"),t}return t=u,(n=[{key:"open",value:function(e,t){this.pictureEl.src=t,this.pictureEl.alt=e,this.captionEl.textContent=e,b(S(u.prototype),"open",this).call(this)}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},L.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function P(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleSubmit=t,n._form=n._popup.querySelector(".form"),n}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit()})),L(q(u.prototype),"setEventListeners",this).call(this)}},{key:"deleteCard",value:function(){this._cardElem.remove(),this._cardElem=null}},{key:"setCardData",value:function(e,t){this._cardElem=e,this._cardId=t}},{key:"getCardId",value:function(){return this._cardId}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=U(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},x.apply(this,arguments)}function U(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}function A(e,t){return A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},A(e,t)}function N(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return N(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleSubmit=t,n._inputList=n._popup.querySelectorAll(".form__input"),n._form=n._popup.querySelector(".form"),n._submitButton=document.querySelector(e).querySelector(".popup__button_type_save"),n._submitButtonText=n._submitButton.textContent,n}return t=u,n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("submit",(function(t){t.preventDefault(),e.renderLoading(!0),e._handleSubmit(e._getInputValues()).then((function(){return e.close()})).finally((function(){return e.renderLoading(!1)}))})),x(D(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._form.reset(),x(D(u.prototype),"close",this).call(this)}},{key:"renderLoading",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._submitButton.textContent=e?t:this._submitButtonText}}],n&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var J=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName="no name",this._userAboutSelf="no about",this._avatarElem=document.querySelector(t),this._titleElem=n,this._subtitleElem=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{user_name:this._userName,user_id:this._userAboutSelf,about_self:this._userId}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar,o=e._id;this._userName=t,this._userAboutSelf=n,this._avatar=r,this._userId=o,this._titleElem.textContent=this._userName,this._subtitleElem.textContent=this._userAboutSelf,this._avatarElem.src=this._avatar}}])&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var M=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка выполнении запроса к серверу: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this,t=this._baseUrl+"/cards";return fetch(t,{method:"GET",headers:this._headers}).then((function(t){return e._checkResponse(t)})).catch((function(e){console.log("Ошибка при выполнении запросе: ".concat(e,"!"))}))}},{key:"getUserProfile",value:function(){var e=this,t=this._baseUrl+"/users/me";return fetch(t,{method:"GET",headers:this._headers}).then((function(t){return e._checkResponse(t)})).catch((function(e){console.log("Ошибка при выполнении запросе: ".concat(e,"!"))}))}},{key:"deleteCard",value:function(e){var t=this,n=this._baseUrl+"/cards/".concat(e);return fetch(n,{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResponse(e)})).catch((function(e){console.log("Ошибка при выполнении запросе: ".concat(e,"!"))}))}},{key:"addCard",value:function(e){var t=this,n=this._baseUrl+"/cards",r=this._headers;return r["Content-Type"]="application/json",fetch(n,{method:"POST",headers:r,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._checkResponse(e)})).catch((function(e){console.log("Ошибка при выполнении запросе: ".concat(e,"!"))}))}},{key:"saveNewProfile",value:function(e){var t=this,n=this._baseUrl+"/users/me",r=this._headers;return r["Content-Type"]="application/json",fetch(n,{method:"PATCH",headers:r,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._checkResponse(e)})).catch((function(e){console.log("Ошибка при выполнении запросе: ".concat(e,"!"))}))}},{key:"updateAvatar",value:function(e){var t=this,n=this._baseUrl+"/users/me/avatar",r=this._headers;return r["Content-Type"]="application/json",fetch(n,{method:"PATCH",headers:r,body:JSON.stringify({avatar:e.link})}).then((function(e){return t._checkResponse(e)})).catch((function(e){console.log("Ошибка при выполнении запросе: ".concat(e,"!"))}))}},{key:"deleteLike",value:function(e){var t=this,n=this._baseUrl+"/cards/".concat(e,"/likes");return fetch(n,{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResponse(e)})).catch((function(e){console.log("Ошибка при выполнении запросе: ".concat(e,"!"))}))}},{key:"likeCard",value:function(e){var t=this,n=this._baseUrl+"/cards/".concat(e,"/likes");return fetch(n,{method:"PUT",headers:this._headers}).then((function(e){return t._checkResponse(e)})).catch((function(e){console.log("Ошибка при выполнении запросе: ".concat(e,"!"))}))}}])&&G(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-41",headers:{authorization:"0e0878b0-27c7-481c-9d47-0d05d423b137"}}),z=new J(".profile__image",c,a),$=new w(".popup_type_card");$.setEventListeners();var K=new V(".popup_type_edit",(function(e){return M.saveNewProfile(e).then((function(e){user.setUserInfo(e)})).catch((function(e){console.log("Ошибка при сохранении данных профиля пользователя: ".concat(e,"!"))}))}));K.setEventListeners();var Q=new V(".popup_type_add",(function(e){return M.addCard(e).then((function(e){te.addItem(e)})).catch((function(e){console.log("Ошибка при сохранении карточки: ".concat(e,"!"))}))}));Q.setEventListeners();var W=new R(".popup_type_confirm",(function(){M.deleteCard(W.getCardId()).then((function(e){W.deleteCard(),W.close()})).catch((function(e){console.log("Ошибка при обработке результатов запроса на удаление карточки : ".concat(e,"!"))}))}));W.setEventListeners();var X=new V(".popup_type_update-avatar",(function(e){return M.updateAvatar(e).then((function(e){z.setUserInfo(e)})).catch((function(e){console.log("Ошибка при сохранении аватара: ".concat(e,"!"))}))}));X.setEventListeners();var Y=new p(e,t);Y.enableValidation();var Z=new p(e,o);Z.enableValidation();var ee=new p(e,u);ee.enableValidation(),n.addEventListener("click",(function(){!function(e){X.open(),e.clearFormInputError()}(Y)})),r.addEventListener("click",(function(){!function(e){var t=z.getUserInfo();K.setInputValues({name:t.user_name,about:t.about_self}),K.open(),e.clearFormInputError()}(Z)})),i.addEventListener("click",(function(){!function(e){Q.open(),e.clearFormInputError()}(ee)}));var te=new _({renderer:function(e){var t=e._id,n=e.name,r=e.link,o=e.likes,i=e.owner._id,u=z.getUserInfo().user_id,c=!1;i===u&&(c=!0);var a=new l(c,u,i,t,n,r,o,"#grid-template",$,(function(e){var t=e.cardElem,n=e.cardId;W.setCardData(t,n),W.open()}),(function(e){a.isLike()?M.deleteLike(e).then((function(e){a.updateLike(e.likes.length)})).catch((function(e){console.log("Ошибка при dislike карточки: ".concat(e,"!"))})):M.likeCard(e).then((function(e){a.updateLike(e.likes.length)})).catch((function(e){console.log("Ошибка при like карточки: ".concat(e,"!"))}))}));return a.getCard()}},".photo-grid__list"),ne=M.getUserProfile(),re=M.getInitialCards();Promise.all([ne,re]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,c=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];z.setUserInfo(o),te.setCardItems(i),te.renderItems()})).catch((function(e){console.log("Ошибка при запросе данных пользователя и карточек: ".concat(e,"!"))}))})();