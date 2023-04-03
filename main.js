(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(n)?n:String(n)}var r=function(){function t(e,r,o,i,u){var a,c,l,s=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,l=function(){s._buttonLike.addEventListener("click",(function(){return s._toggleLike()})),s._elementImages.addEventListener("click",(function(){return s._cardZoom(s._cardName,s._cardImage)})),s._userId===s._authorId?s._iconDelete.addEventListener("click",(function(){return s._cardDelete(s)})):s._iconDelete.remove()},(c=n(c="_addEventHandlers"))in a?Object.defineProperty(a,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[c]=l,this._card=e,this._cardName=this._card.name,this._cardImage=this._card.link,this._cardTemplate=r,this._userId=o,this._cardId=i.cardId,this._authorId=i.authorId,this._cardZoom=u.handleCardZoom,this._cardDelete=u.handleCardDelete,this._putLike=u.handleCardLike,this._removeLike=u.handleCardDeleteLike}var r,o;return r=t,(o=[{key:"deleteCard",value:function(){this._card=null,this._cardElement.remove()}},{key:"createCard",value:function(){return this._cardElement=this._getTemplate(),this._elementImages=this._cardElement.querySelector(".elements__photo"),this._elementName=this._cardElement.querySelector(".elements__subtitle"),this._buttonLike=this._cardElement.querySelector(".elements__button"),this._iconDelete=this._cardElement.querySelector(".elements__delete"),this.likesCounter=this._cardElement.querySelector(".cards__like-count"),this._elementName.textContent=this._cardName,this._elementImages.src=this._cardImage,this._elementImages.alt=this._cardName,this.renderCardLike(this._card),this._addEventHandlers(),this._cardElement}},{key:"renderCardLike",value:function(t){this._likesCount=t.likes,0===this._likesCount.length?this.likesCounter.textContent="":this.likesCounter.textContent=this._likesCount.length,this._isLiked()?this._buttonLike.classList.add("elements__button-active"):this._buttonLike.classList.remove("elements__button-active")}},{key:"_isLiked",value:function(){var t=this;return this._likesCount.find((function(e){return e._id===t._userId}))}},{key:"_toggleLike",value:function(){this._isLiked()?this._removeLike(this._cardId):this._putLike(this._cardId)}},{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".elements__element").cloneNode(!0)}},{key:"getId",value:function(){return this._cardId}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,a(r.key),r)}}function u(t,e,n){return(e=a(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===o(e)?e:String(e)}var c=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,"_isValidInput",(function(t){t.validity.valid?r._hideError(t):r._showError(t)})),u(this,"_showError",(function(t){var e=r._formElement.querySelector(".".concat(t.id,"-error"));e.textContent=t.validationMessage,e.classList.add(r._settings.errorClass)})),u(this,"_hideError",(function(t){var e=r._formElement.querySelector(".".concat(t.id,"-error"));e.classList.remove(t.errorClass),e.textContent=""})),u(this,"_hasInvalidInput",(function(){return r._inputList.some((function(t){return!t.validity.valid}))})),this._formElement=n,this._settings=e,this._btn=this._formElement.querySelector(this._settings.submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._settings.inputSelector))}var e,n;return e=t,(n=[{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._btn.disabled=!0,this._btn.classList.add(this._settings.inactiveButtonClass)):(this._btn.disabled=!1,this._btn.classList.remove(this._settings.inactiveButtonClass))}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t.toggleButtonState(t._inputList,t._buttonElement),t._isValidInput(e)}))}))}},{key:"enableValidation",value:function(){var t=this;this.toggleButtonState(),this._inputList.forEach((function(e){t._isValidInput(e)})),this._setEventListeners()}},{key:"resetValidate",value:function(){var t=this;this._inputList.forEach((function(e){t._hideError(e)})),this.toggleButtonState()}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var f=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){t.forEach(this._renderer)}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}var y=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupSelector=e,this._popupItem=document.querySelector(this._popupSelector),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popupItem.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupItem.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popupItem.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close-form"))&&t.close()}))}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},v.apply(this,arguments)}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=_(r);if(o){var n=_(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=e.callbackFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._callbackFormSubmit=r,n._popupFormItem=n._popupItem.querySelector(".popup__form"),n._inputList=Array.from(n._popupFormItem.querySelectorAll(".popup__input")),n._buttonSend=n._popupItem.querySelector(".popup__submit-button"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;v(_(u.prototype),"setEventListeners",this).call(this),this._popupFormItem.addEventListener("submit",(function(e){e.preventDefault(),t._callbackFormSubmit(t._getInputValues())}))}},{key:"setLoadingButtonText",value:function(){this._buttonSend.textContent="Сохранение..."}},{key:"resetButtonText",value:function(){this._buttonSend.textContent="Сохранить"}},{key:"close",value:function(){v(_(u.prototype),"close",this).call(this),this._popupFormItem.reset()}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},w.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(r);if(o){var n=j(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===S(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupDescription=e._popupItem.querySelector(".popup__subtitle"),e._popupImage=e._popupItem.querySelector(".popup__image"),e}return e=u,(n=[{key:"open",value:function(t,e){this._popupDescription.textContent=t,this._popupImage.src=e,this._popupImage.alt=t,w(j(u.prototype),"open",this).call(this)}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},C.apply(this,arguments)}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}var D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(r);if(o){var n=T(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===L(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=e.callbackNotification;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitButton=n._popupItem.querySelector(".popup__form"),n._callbackNotification=r,n}return e=u,(n=[{key:"open",value:function(t){this._card=t,C(T(u.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var t=this;this._submitButton.addEventListener("submit",(function(e){e.preventDefault(),t._callbackNotification(t._card)})),C(T(u.prototype),"setEventListeners",this).call(this)}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}var x,A=function(){function t(e){var n=e.usernameSelector,r=e.userDescriptionSelector,o=e.userAvatarLink;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._username=document.querySelector(n),this._userDescription=document.querySelector(r),this._avatarLink=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{username:this._username.textContent,description:this._userDescription.textContent,avatar:this._avatarLink.link}}},{key:"setUserInfo",value:function(t){var e=t.username,n=t.description;this._username.textContent=e,this._userDescription.textContent=n}},{key:"setUserAvatar",value:function(t){this._avatarLink.src=t}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),B={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input_type_visible"},N={formEdit:document.querySelector(".edit-form"),avatarEdit:document.querySelector(".edit-avatar"),formAdd:document.querySelector(".add-form"),popupInputName:document.querySelector(".popup__input-name"),popupInputInfo:document.querySelector(".popup__input-info"),buttonEditProfile:document.querySelector(".profile__button-edit"),profileAvatarEdit:document.querySelector(".profile__avatar-edit"),buttonAddCard:document.querySelector(".profile__button-add")};function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==V(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===V(o)?o:String(o)),r)}var o}function F(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var H=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._headers=e.headers,this._authorization=e.authorization}var e,n;return e=t,(n=[{key:"_getResponseData",value:function(t){return t.ok?t.json():Promise.reject("et Ошибка: ".concat(t.status))}},{key:"getProfile",value:function(){var t=this;return fetch("".concat(this._url,"users/me/"),{headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"patchUserData",value:function(t){var e=this;return fetch("".concat(this._url,"users/me/"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:t.username,about:t.description})}).then((function(t){return e._getResponseData(t)}))}},{key:"patchUserPhoto",value:function(t){var e=this;return fetch("".concat(this._url,"users/me/avatar/"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:t.avatar})}).then((function(t){return e._getResponseData(t)}))}},{key:"getCards",value:function(){var t=this;return fetch("".concat(this._url,"cards/"),{headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"addNewCard",value:function(t){var e=this,n=t.name,r=t.link;return fetch("".concat(this._url,"cards"),{headers:this._headers,method:"POST",body:JSON.stringify({name:n,link:r})}).then((function(t){return e._getResponseData(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._url,"cards/").concat(t),{headers:this._headers,method:"DELETE"}).then((function(t){return e._getResponseData(t)}))}},{key:"addCardLike",value:function(t){var e=this;return fetch("".concat(this._url,"cards/").concat(t,"/likes/"),{headers:this._headers,method:"PUT"}).then((function(t){return e._getResponseData(t)}))}},{key:"removeCardLike",value:function(t){var e=this;return fetch("".concat(this._url,"cards/").concat(t,"/likes/"),{headers:this._headers,method:"DELETE"}).then((function(t){return e._getResponseData(t)}))}}])&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({url:"https://mesto.nomoreparties.co/v1/cohort-62/",headers:{authorization:"2490c461-68f2-4278-9a54-44a4e3f310bd","Content-Type":"application/json"}}),Z=new A({usernameSelector:".profile__title",userDescriptionSelector:".profile__subtitle",userAvatarLink:".profile__avatar"}),z=new D("#delete-card",{callbackNotification:function(t){H.deleteCard(t.getId()).then((function(){t.deleteCard(),z.close()})).catch((function(t){console.log("Ошибка при удалении, ".concat(t))}))}});z.setEventListeners();var J=function(t){var e=new r(t,"#template__card",x,{cardId:t._id,authorId:t.owner._id},{handleCardZoom:function(t,e){Q.open(t,e)},handleCardDelete:function(t){z.open(t)},handleCardLike:function(t){H.addCardLike(t).then((function(t){e.renderCardLike(t)})).catch((function(t){console.log("Ошибка при лайке, ".concat(t))}))},handleCardDeleteLike:function(t){H.removeCardLike(t).then((function(t){e.renderCardLike(t)})).catch((function(t){console.log("Ошибка при дизлайке, ".concat(t))}))}});return e.createCard()},M=new f({renderer:function(t){M.addItem(J(t))}},".elements__list");Promise.all([H.getProfile(),H.getCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return F(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];x=o._id,Z.setUserInfo({username:o.name,description:o.about}),M.renderItems(i.reverse()),Z.setUserAvatar(o.avatar)})).catch((function(t){console.log("".concat(t))}));var $=new g("#avatar-popup",{callbackFormSubmit:function(t){$.setLoadingButtonText(),H.patchUserPhoto(t).then((function(t){Z.setUserAvatar(t.avatar),$.close()})).catch((function(t){console.log("При обновлении аватара возникла ошибка, ".concat(t))})).finally((function(){$.resetButtonText()}))}});$.setEventListeners();var G=new g("#edit-profile",{callbackFormSubmit:function(t){G.setLoadingButtonText(),H.patchUserData(t).then((function(t){Z.setUserInfo({username:t.name,description:t.about}),G.close()})).catch((function(t){console.log("Ошибка при редактирование, ".concat(t))})).finally((function(){G.resetButtonText()}))}});G.setEventListeners();var K=new g("#add-card",{callbackFormSubmit:function(t){K.setLoadingButtonText(),H.addNewCard({name:t.name,link:t.link}).then((function(t){M.addItem(J(t)),K.close()})).catch((function(t){console.log("Ошибка при добавлении карточки, ".concat(t))})).finally((function(){K.resetButtonText()}))}});K.setEventListeners(),N.buttonEditProfile.addEventListener("click",(function(){G.open(),W.resetValidate();var t=Z.getUserInfo();N.popupInputName.setAttribute("value",t.username),N.popupInputInfo.setAttribute("value",t.description)})),N.profileAvatarEdit.addEventListener("click",(function(){$.open(),Y.resetValidate()})),N.buttonAddCard.addEventListener("click",(function(){K.open(),X.resetValidate()}));var Q=new O("#fullscreen");Q.setEventListeners();var W=new c(B,N.formEdit);W.enableValidation();var X=new c(B,N.formAdd);X.enableValidation();var Y=new c(B,N.avatarEdit);Y.enableValidation()})();