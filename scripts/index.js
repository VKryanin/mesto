import { initialCards } from "./cards.js";
import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js'
// import {enableValidator} from './validate.js'

const popupAddCard = document.querySelector('#add-card');
const popupFullscreen = document.querySelector('#fullscreen');
const popupEditProfile = document.querySelector('#edit-profile');
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

const settings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}

initialCards.reverse().forEach(item => {
    const card = new Card(item, '#template__card');
    const cardNew = card.generate();
    cardsContainer.append(cardNew)
});

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape)
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
}

function closeToClick(event, popup) {
    if (Array.from(event.target.classList).includes('popup_opened')) {
        closePopup(popup)
    }
}

function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened')
        closePopup(openedPopup)
    }
}

function openEditProfilePopup() {
    openPopup(popupEditProfile);
    popupInputName.value = profileTitle.textContent;
    popupInputInfo.value = profileSubtitle.textContent;
    resetStyle(settings);
}

function openAddCardPopup() {
    openPopup(popupAddCard);
    formAdd.reset();
    resetStyle(settings);
}

function editProfile(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupInputName.value;
    profileSubtitle.textContent = popupInputInfo.value;
    closePopup(popupEditProfile)
}

function resetStyle(settings) {
    const inputList = document.querySelectorAll(settings.inputSelector)
    const buttonForm = document.querySelectorAll(settings.submitButtonSelector)
    inputList.forEach(item => {
        item.nextElementSibling.classList.remove(settings.errorClass);
        item.nextElementSibling.textContent = '';
        item.classList.remove(settings.inputErrorClass)
    })
    buttonForm.forEach(button => {
        button.setAttribute('disabled', '');
        button.classList.add(settings.inactiveButtonClass)
    });
}

formEdit.addEventListener('submit', editProfile);
popupCloseForm.addEventListener('click', () => closePopup(popupEditProfile));
buttonEditProfile.addEventListener('click', openEditProfilePopup);
buttonAddCard.addEventListener('click', openAddCardPopup);
popupCloseAdd.addEventListener('click', () => closePopup(popupAddCard));
formAdd.addEventListener('submit', e => {
    e.preventDefault();
    const data = { name: popupInputPlace.value, link: popupInputLink.value };
    const card = new Card(data, '#template__card')
    cardsContainer.prepend(card.generate());
    closePopup(popupAddCard)
})
popupCloseImage.addEventListener('click', () => { closePopup(popupFullscreen) });
popupEditProfile.addEventListener('click', () => closeToClick(event, popupEditProfile))
popupAddCard.addEventListener('click', () => closeToClick(event, popupAddCard))
popupFullscreen.addEventListener('click', () => closeToClick(event, popupFullscreen))
const profileForm = new FormValidator(settings, formEdit)
profileForm.enableValidation();
const addCardForm = new FormValidator(settings, formAdd);
addCardForm.enableValidation();




