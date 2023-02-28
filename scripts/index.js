import { initialCards } from "./cards.js";
import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js'

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
export const fullscreen = document.querySelector('#fullscreen');
export const fullscreenImage = fullscreen.querySelector('.popup__image');
export const fullscreenSubtitle = fullscreen.querySelector('.popup__subtitle');

// Спасибо)
// А допустим передавать через cardSelectors: fullscreen, fullscreenImage, fullscreenSubtitle допустимо?

const cardSelectors = {
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
}

function openAddCardPopup() {
    openPopup(popupAddCard);
}

function editProfile(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupInputName.value;
    profileSubtitle.textContent = popupInputInfo.value;
    closePopup(popupEditProfile)
}

const createCard = (data) => {
    const card = new Card(data)
    return card.createCard()
}

formEdit.addEventListener('submit', editProfile);
popupCloseForm.addEventListener('click', () => closePopup(popupEditProfile));
buttonEditProfile.addEventListener('click', () => {
    profileForm.resetValidate();
    openEditProfilePopup();
});
buttonAddCard.addEventListener('click', () => {
    addCardForm.resetValidate();
    openAddCardPopup();
});
popupCloseAdd.addEventListener('click', () => closePopup(popupAddCard));
formAdd.addEventListener('submit', e => {
    e.preventDefault();
    const data = {
        name: popupInputPlace.value,
        link: popupInputLink.value,
        ...cardSelectors
    };
    cardsContainer.prepend(createCard(data))
    closePopup(popupAddCard)
})
initialCards.reverse().forEach(element => {
    const data = {
        name: element.name,
        link: element.link,
        ...cardSelectors
    };
    cardsContainer.append(createCard(data))
});
popupCloseImage.addEventListener('click', () => { closePopup(popupFullscreen) });
popupEditProfile.addEventListener('click', () => closeToClick(event, popupEditProfile))
popupAddCard.addEventListener('click', () => closeToClick(event, popupAddCard))
popupFullscreen.addEventListener('click', () => closeToClick(event, popupFullscreen)
)
const profileForm = new FormValidator(settings, formEdit)
profileForm.enableValidation();
const addCardForm = new FormValidator(settings, formAdd);
addCardForm.enableValidation();



