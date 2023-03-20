import { initialCards } from "../components/utils/cards.js";
import { Card } from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import { cardSelectors, settings } from "../components/utils/cardSelectors.js";
import './index.css';


const formEdit = document.querySelector('.edit-form');
const formAdd = document.querySelector('.add-form');
const popupInputName = document.querySelector('.popup__input-name');
const popupInputInfo = document.querySelector('.popup__input-info');
const popupInputPlace = document.querySelector('.popup__input-place');
const popupInputLink = document.querySelector('.popup__input-link');
const buttonAddCard = document.querySelector('.profile__button-add');
const buttonEditProfile = document.querySelector('.profile__button-edit');

// Всплывающего изображения
const popupImageZoom = new PopupWithImage('#fullscreen');
popupImageZoom.setEventListeners();
const handleCardClick = function (name, image) {
    popupImageZoom.open(name, image);
}

// данные пользователя
const userInfo = new UserInfo({
    usernameSelector: '.profile__title',
    userDescriptionSelector: '.profile__subtitle'
});

// Профиль
const popupEdit = new PopupWithForm('#edit-profile', {
    callbackFormSubmit: (inputValues) => {
        userInfo.setUserInfo(
            inputValues
        );
        popupEdit.close();
    }
})
popupEdit.setEventListeners();

// Добавление карточек
const addCard = new PopupWithForm('#add-card', {
    callbackFormSubmit: () => {
        renderInitialCards.addItem(
            createCard(
                {
                    ...addCard._getInputValues(),
                    ...cardSelectors
                },)
        )
        addCard.close();
    }
});
addCard.setEventListeners();

// Новые карточки
const createCard = (data, cardSelectors) => {
    const card = new Card({ ...data, ...cardSelectors }, handleCardClick)
    return card.createCard()
}

// Начальные карточки
const renderInitialCards = new Section({
    items: initialCards,
    renderer: (data) => {
        renderInitialCards.addItem(createCard(data, cardSelectors))
    }
}, '.elements__list');
renderInitialCards.renderItems();

// Валидация 
const profileForm = new FormValidator(settings, formEdit)
profileForm.enableValidation();
const addCardForm = new FormValidator(settings, formAdd);
addCardForm.enableValidation();

//Редактировать профиль
buttonEditProfile.addEventListener('click', function () {
    const userData = userInfo.getUserInfo()
    popupEdit.open();
    popupInputName.value = userData.username;
    popupInputInfo.value = userData.description;
    profileForm.enableValidation();
});

// Добавление карточки
buttonAddCard.addEventListener('click', function () {
    addCard.open();
    addCardForm.resetValidate();
});





