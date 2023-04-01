import { Card } from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupNotification } from '../components/PopupNotification.js';
import { UserInfo } from '../components/UserInfo.js';
import { validationSettings } from "../components/utils/cardSelectors.js";
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

//Удаление карточки
const popupNotificationDelete = new PopupNotification("#delete-card", {
    // callbackNotification: (cardElement, cardId) => {
    //     api.deleteCard(cardId)
    //         .then(() => {
    //             // debugger;
    //             popupNotificationDelete.parentCard.deleteCard();
    //             popupNotificationDelete.close();
    //         })
    //         .catch((err) => { console.log(`Ошибка при удалении, ${err}`) })
    // }
    callbackNotification: (card) => {
        api.deleteCard(card.getId())
            .then(() => {
                // debugger;
                card.deleteCard();
                popupNotificationDelete.close();
            })
            .catch((err) => { console.log(`Ошибка при удалении, ${err}`) })
    }
});
popupNotificationDelete.setEventListeners();

//Добавление карточки
const createCard = function (cardData) {
    const card = new Card(cardData, '#template__card', userId, { cardId: cardData._id, authorId: cardData.owner._id, },
        {
            handleCardZoom: (name, image) => { popupImageZoom.open(name, image) },
            // handleCardDelete: (cardData, cardId) => { popupNotificationDelete.open(card, cardData, cardId) },
            handleCardDelete: (card) => { popupNotificationDelete.open(card) },
            handleCardLike: (cardId) => {
                api.addCardLike(cardId)
                    .then((res) => {
                        console.log(cardId);
                        card.renderCardLike(res)
                    })
                    .catch((err) => {
                        console.log(`Ошибка при лайке, ${err}`)
                    })
            },
            handleCardDeleteLike: (cardId) => {
                api.removeCardLike(cardId)
                    .then((res) => {
                        card.renderCardLike(res)
                    })
                    .catch((err) => {
                        console.log(`Ошибка при дизлайке, ${err}`)
                    })
            },
        })
    return card.createCard();
}

//Добавление карточек
const cardsSection = new Section({
    renderer: (cardData) => {
        cardsSection.addItem(createCard(cardData))
    }
}, '.elements__list');

//Общий промис
Promise.all([api.getProfile(), api.getCards()])
    .then(([userProfileData, cardData]) => {
        userId = userProfileData._id;
        userInfo.setUserInfo({ username: userProfileData.name, description: userProfileData.about })
        cardsSection.renderItems(cardData.reverse())
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
            .then((res) => {
                userInfo.setUserInfo({ username: res.name, description: res.about })
                popupEditeProfile.close()
            })
            .catch((err) => { console.log(`Ошибка при редактирование, ${err}`) })
            .finally(() => {
                popupEditeProfile.resetButtonText();
            })
    }
});
popupEditeProfile.setEventListeners();

//Добавления новой карточки
const popupAddCard = new PopupWithForm('#add-card', {
    callbackFormSubmit: (formValues) => {
        popupAddCard.setLoadingButtonText();
        api.addNewCard({ name: formValues.name, link: formValues.link })
            .then((card) => {
                cardsSection.addItem(createCard(card))
                popupAddCard.close()
            })
            .catch((err) => { console.log(`Ошибка при добавлении карточки, ${err}`) })
            .finally(() => {
                popupAddCard.resetButtonText();
            })
    }
});
popupAddCard.setEventListeners();

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
    avatarFormValidator.resetValidate();
});
// Слушатель на иконку добавления карточки
constants.buttonAddCard.addEventListener('click', function () {
    popupAddCard.open();
    cardFormValidator.resetValidate();
});

// Всплывающего изображения
const popupImageZoom = new PopupWithImage('#fullscreen');
popupImageZoom.setEventListeners();

// Валидация 
const profileFormValidator = new FormValidator(validationSettings, constants.formEdit)
profileFormValidator.enableValidation();
const cardFormValidator = new FormValidator(validationSettings, constants.formAdd);
cardFormValidator.enableValidation();
const avatarFormValidator = new FormValidator(validationSettings, constants.avatarEdit);
avatarFormValidator.enableValidation();




