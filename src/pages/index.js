import { Card } from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { popupNotification } from '../components/PopupNotification.js';
import { UserInfo } from '../components/UserInfo.js';
import { cardSelectors, settings } from "../components/utils/cardSelectors.js";
import { config } from '../components/utils/apiConfig.js';
import { Api } from "../components/Api.js";
import './index.css';

const formEdit = document.querySelector('.edit-form');
const avatarEdit = document.querySelector('.edit-avatar')
const formAdd = document.querySelector('.add-form');
const popupInputName = document.querySelector('.popup__input-name');
const popupInputInfo = document.querySelector('.popup__input-info');
const buttonEditProfile = document.querySelector('.profile__button-edit');
const profileAvatarEdit = document.querySelector('.profile__avatar-edit');
const buttonAddCard = document.querySelector('.profile__button-add');

let userId;

//Подключение к API
const api = new Api(config)

//Данные пользователя
const userInfo = new UserInfo({
    usernameSelector: '.profile__title',
    userDescriptionSelector: '.profile__subtitle'
});

//Добавление карточки
const renderCard = function (CardObj) {
    const renderCardItem = new Card(CardObj, '#template__card', userId, { cardId: CardObj._id, authorId: CardObj.owner._id, },
        {
            handleCardZoom: (name, image) => { popupImageZoom.open(name, image) },
            handleCardDelete: (CardObj, cardId) => { popupNotificationDelete.open(CardObj, cardId) },
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
const renderInitialCards = new Section({
    renderer: (CardObj) => {
        renderInitialCards.addItem(renderCard(CardObj))
    }
}, '.elements__list');

//Общий промис
Promise.all([api.getProfile(), api.getCards()])
    .then(([userProfileData, CardObj]) => {
        userId = userProfileData._id;
        userInfo.setUserInfo({ username: userProfileData.name, description: userProfileData.about })
        renderInitialCards.renderItems(CardObj.reverse())
        userInfo.setUserAvatar(userProfileData.avatar)
    })
    .catch((err) => { console.log(`${err}`) })

//Изменение аватара
const popupEditeAvatar = new PopupWithForm('#avatar-popup', {
    callbackFormSubmit: (userProfileData) => {
        popupEditeAvatar.savingProgress(); api.patchUserPhoto(userProfileData)
            .then((res) => {
                userInfo.setUserAvatar(res.avatar);
            })
            .catch((err) => {
                console.log(`При обновлении аватара возникла ошибка, ${err}`)
            })
            .finally(() => {
                popupEditeAvatar.saveText(); popupEditeAvatar.close()
            })
    }
});
popupEditeAvatar.setEventListeners();

//Изменение пользователя
const popupEditeProfile = new PopupWithForm('#edit-profile', {
    callbackFormSubmit: (userProfileData) => {
        popupEditeProfile.savingProgress();
        api.patchUserData(userProfileData)
            .then((res) => { userInfo.setUserInfo({ username: res.name, description: res.about }) })
            .catch((err) => { console.log(`Ошибка при редактирование, ${err}`) })
            .finally(() => {
                popupEditeProfile.saveText();
                popupEditeProfile.close()
            })
    }
});
popupEditeProfile.setEventListeners();

popupEditeProfile.setEventListeners();
//Добавления новой карточки
const popupAddCard = new PopupWithForm('#add-card', {
    callbackFormSubmit: (formValues) => {
        popupAddCard.savingProgress();
        api.addNewCard({ name: formValues.name, link: formValues.link })
            .then((card) => { renderInitialCards.addItem(renderCard(card)) })
            .catch((err) => { console.log(`Ошибка при добавлении карточки, ${err}`) })
            .finally(() => {
                popupAddCard.saveText();
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
                cardElement.remove();
                popupNotificationDelete.close();
                
            })
            .catch((err) => { console.log(`Ошибка при удалении, ${err}`) })
    }
});
popupNotificationDelete.setEventListeners();

// Слушатель на иконку редактирования профиля
buttonEditProfile.addEventListener('click', function () {
    popupEditeProfile.open();
    profileForm.resetValidate();
    const actualUserInfo = userInfo.getUserInfo();
    popupInputName.setAttribute('value', actualUserInfo.username);
    popupInputInfo.setAttribute('value', actualUserInfo.description);
});
// Слушатель на иконку изменения аватара
profileAvatarEdit.addEventListener('click', function () {
    popupEditeAvatar.open();
    editAvatarForm.resetValidate();
});
// Слушатель на иконку добавления карточки
buttonAddCard.addEventListener('click', function () {
    popupAddCard.open();
    addCardForm.resetValidate();
});

// Всплывающего изображения
const popupImageZoom = new PopupWithImage('#fullscreen');
popupImageZoom.setEventListeners();

// Валидация 
const profileForm = new FormValidator(settings, formEdit)
profileForm.enableValidation();
const addCardForm = new FormValidator(settings, formAdd);
addCardForm.enableValidation();
const editAvatarForm = new FormValidator(settings, avatarEdit);
editAvatarForm.enableValidation();




