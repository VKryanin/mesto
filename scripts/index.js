import { initialCards } from "./cards.js";
import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js'
import { Section } from './Section.js';
import { Popup } from "./Popup.js";
import { PopupWithForm } from './PopupWithForm.js';
import { PopupWithImage } from './PopupWithImage.js'
import { UserInfo } from './UserInfo.js'

const popupAddCard = document.querySelector('#add-card');
const popupFullscreen = document.querySelector('#fullscreen');
const popupEditProfile = document.querySelector('#edit-profile');
const elementsList = document.querySelector('.elements__list')
const popupCloseForm = document.querySelector('.close-edit');
const popupCloseAdd = document.querySelector('.close-add');
const popupCloseImage = document.querySelector('.close-image');
const formEdit = document.querySelector('.edit-form');
const formAdd = document.querySelector('.add-form');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupInputName = document.querySelector('.popup__input-name');
const popupInputInfo = document.querySelector('.popup__input-info');
const popupInputPlace = document.querySelector('.popup__input-place');
const popupInputLink = document.querySelector('.popup__input-link');
const cardsContainer = document.querySelector('.elements__list');
const buttonAddCard = document.querySelector('.profile__button-add');
const buttonEditProfile = document.querySelector('.profile__button-edit');
const profileName = document.querySelector('.profile__name');
export const fullscreen = document.querySelector('#fullscreen');
export const fullscreenImage = fullscreen.querySelector('.popup__image');
export const fullscreenSubtitle = fullscreen.querySelector('.popup__subtitle');

export const cardSelectors = {
    template: '#template__card',
    like: '.elements__button',
    delete: '.elements__delete',
    photo: '.elements__photo',
    subtitle: '.elements__subtitle'
}

const settings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}

// Всплывающего изображения
const popupImageZoom = new PopupWithImage(popupFullscreen);
popupImageZoom.setEventListeners();

// Увеличение картинки
const handleCardClick = function (name, image) {
    popupImageZoom.open(name, image);
}

// Получение данных пользователя
const userInfo = new UserInfo({
    usernameSelector: profileTitle,
    userDescriptionSelector: profileSubtitle
});

// Редактирования профиля
const popupEdit = new PopupWithForm(popupEditProfile, {
    callbackFormSubmit: () => {
        userInfo.setUserInfo({
            username: popupInputName.value,
            description: popupInputInfo.value
        });
        popupEdit.close();
    }
})
popupEdit.setEventListeners();

// Отрисовка начальных карточек
const renderInitialCards = new Section({
    items: initialCards,
    renderer: (data) => {
        const card = new Card(data, handleCardClick);
        renderInitialCards.addItem(card.createCard());
    }
}, '.elements__list');
renderInitialCards.renderItems();

// Функция обавления карточек
const createCard = (data) => {
    const card = new Card(data, handleCardClick)
    return card.createCard()
}

// Объявление popup добавления новой карточки
const addCard = new PopupWithForm(popupAddCard, {
    callbackFormSubmit: () => {
        renderInitialCards.addItem(createCard({
            name: popupInputPlace.value,
            link: popupInputLink.value,
            ...cardSelectors
        }, handleCardClick));
        addCard.close();
    }
});
addCard.setEventListeners();

// Валидация 
const profileForm = new FormValidator(settings, formEdit)
profileForm.enableValidation();
const addCardForm = new FormValidator(settings, formAdd);
addCardForm.enableValidation();

//Событие редактирования профиля
buttonEditProfile.addEventListener('click', function () {
    popupEdit.open();
    popupInputName.setAttribute('value', userInfo.getUserInfo().username);
    popupInputInfo.setAttribute('value', userInfo.getUserInfo().description);
    profileForm.enableValidation();
});

// Событие добавления карточки
buttonAddCard.addEventListener('click', function () {
    addCard.open();
    addCardForm.resetValidate();
});





