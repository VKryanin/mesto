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
    callbackFormSubmit: () => {
        userInfo.setUserInfo(
            popupEdit._getInputValues()
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
                    name: popupInputPlace.value,
                    link: popupInputLink.value,
                    ...cardSelectors
                }, addCard._getInputValues())
        )
        addCard.close();
    }
});
addCard.setEventListeners();


// Начальные карточки
const renderInitialCards = new Section({
    items: initialCards,
    renderer: (data) => {
        const card = new Card(data, handleCardClick);
        renderInitialCards.addItem(card.createCard());
        // renderInitialCards.addItem(createCard(data))
    }
}, '.elements__list');
renderInitialCards.renderItems();

// Новые карточки
const createCard = (data) => {
    const card = new Card(data, handleCardClick)
    return card.createCard()
}

// Валидация 
const profileForm = new FormValidator(settings, formEdit)
profileForm.enableValidation();
const addCardForm = new FormValidator(settings, formAdd);
addCardForm.enableValidation();

//Редактировать профиль
buttonEditProfile.addEventListener('click', function () {
    popupEdit.open();
    popupInputName.setAttribute('value', userInfo.getUserInfo().username);
    popupInputInfo.setAttribute('value', userInfo.getUserInfo().description);
    profileForm.enableValidation();
});

// Добавление карточки
buttonAddCard.addEventListener('click', function () {
    addCard.open();
    addCardForm.resetValidate();
});





