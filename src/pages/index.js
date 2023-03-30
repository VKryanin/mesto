import { Card } from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { popupNotification } from '../components/PopupNotification.js';
import { UserInfo } from '../components/UserInfo.js';
import { cardSelectors, validationSettings } from "../components/utils/cardSelectors.js";
import { config } from '../components/utils/apiConfig.js';
import { constants } from '../components/utils/constants.js';
import { Api } from "../components/Api.js";
import './index.css';
let userId;

//Подключение к API
const api = new Api(config)

//Данные пользователя
const userInfo = new UserInfo({
    usernameSelector: '.profile__title',
    userDescriptionSelector: '.profile__subtitle',
    userAvatarLink: '.profile__avatar'
});

//Добавление карточки
const cardCreate = function (cardData) {
    const renderCardItem = new Card(cardData, '#template__card', userId, { cardId: cardData._id, authorId: cardData.owner._id, },
        {
            handleCardZoom: (name, image) => { popupImageZoom.open(name, image) },
            handleCardDelete: (cardData, cardId) => { popupNotificationDelete.open(cardData, cardId) },
            handleCardLike: (cardId) => {
                api.addCardLike(cardId)
                    .then((res) => {
                        renderCardItem.renderCardLike(res)
                    })
                    .catch((err) => {
                        console.log(`Ошибка при лайке, ${err}`)
                    })
            },
            handleCardDeleteLike: (cardId) => {
                api.removeCardLike(cardId)
                    .then((res) => {
                        renderCardItem.renderCardLike(res)
                    })
                    .catch((err) => {
                        console.log(`Ошибка при дизлайке, ${err}`)
                    })
            },
        })
    return renderCardItem.createCard();
}

//Добавление карточек
const cardsInitialRender = new Section({
    renderer: (cardData) => {
        cardsInitialRender.addItem(cardCreate(cardData))
    }
}, '.elements__list');

//Общий промис
Promise.all([api.getProfile(), api.getCards()])
    .then(([userProfileData, cardData]) => {
        userId = userProfileData._id;
        userInfo.setUserInfo({ username: userProfileData.name, description: userProfileData.about })
        cardsInitialRender.renderItems(cardData.reverse())
        userInfo.setUserAvatar(userProfileData.avatar)
    })
    .catch((err) => { console.log(`${err}`) })

//Изменение аватара
const popupEditeAvatar = new PopupWithForm('#avatar-popup', {
    callbackFormSubmit: (userProfileData) => {
        popupEditeAvatar.setLoadingButtonText();
        api.patchUserPhoto(userProfileData)
            .then((res) => {
                userInfo.setUserAvatar(res.avatar);
                popupEditeAvatar.close()
            })
            .catch((err) => {
                console.log(`При обновлении аватара возникла ошибка, ${err}`)
            })
            .finally(() => {
                popupEditeAvatar.resetButtonText(); 
            })
    }
});
popupEditeAvatar.setEventListeners();

//Изменение пользователя
const popupEditeProfile = new PopupWithForm('#edit-profile', {
    callbackFormSubmit: (userProfileData) => {
        popupEditeProfile.setLoadingButtonText();
        api.patchUserData(userProfileData)
            .then((res) => { userInfo.setUserInfo({ username: res.name, description: res.about }) })
            .catch((err) => { console.log(`Ошибка при редактирование, ${err}`) })
            .finally(() => {
                popupEditeProfile.resetButtonText();
                popupEditeProfile.close()
            })
    }
});
popupEditeProfile.setEventListeners();

//Добавления новой карточки
const popupAddCard = new PopupWithForm('#add-card', {
    callbackFormSubmit: (formValues) => {
        popupAddCard.setLoadingButtonText();
        api.addNewCard({ name: formValues.name, link: formValues.link })
            .then((card) => { cardsInitialRender.addItem(cardCreate(card)) })
            .catch((err) => { console.log(`Ошибка при добавлении карточки, ${err}`) })
            .finally(() => {
                popupAddCard.resetButtonText();
                popupAddCard.close()
            })
    }
});
popupAddCard.setEventListeners();
//Удаление карточки
const popupNotificationDelete = new popupNotification("#delete-card", {
    callbackNotification: (cardElement, cardId) => {
        api.deleteCard(cardId)
            .then(() => {
                // debugger;
                cardElement.deleteCard();
                popupNotificationDelete.close();
            })
            .catch((err) => { console.log(`Ошибка при удалении, ${err}`) })
    }
});
popupNotificationDelete.setEventListeners();

// Слушатель на иконку редактирования профиля
constants.buttonEditProfile.addEventListener('click', function () {
    popupEditeProfile.open();
    profileFormValidator.resetValidate();
    const actualUserInfo = userInfo.getUserInfo();
    constants.popupInputName.setAttribute('value', actualUserInfo.username);
    constants.popupInputInfo.setAttribute('value', actualUserInfo.description);
});
// Слушатель на иконку изменения аватара
constants.profileAvatarEdit.addEventListener('click', function () {
    popupEditeAvatar.open();
    editAvatarFormValidator.resetValidate();
});
// Слушатель на иконку добавления карточки
constants.buttonAddCard.addEventListener('click', function () {
    popupAddCard.open();
    addCardFormValidator.resetValidate();
});

// Всплывающего изображения
const popupImageZoom = new PopupWithImage('#fullscreen');
popupImageZoom.setEventListeners();

// Валидация 
const profileFormValidator = new FormValidator(validationSettings, constants.formEdit)
profileFormValidator.enableValidation();
const addCardFormValidator = new FormValidator(validationSettings, constants.formAdd);
addCardFormValidator.enableValidation();
const editAvatarFormValidator = new FormValidator(validationSettings, constants.avatarEdit);
editAvatarFormValidator.enableValidation();




