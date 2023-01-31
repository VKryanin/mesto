import { initialCards } from "./cards.js";
import { enableValidator } from './validate.js'

const popupAddCard = document.querySelector('#add-card');
const popupFullscreen = document.querySelector('#fullscreen');
const popupEditProfile = document.querySelector('#edit-profile');
const popupCloseForm = document.querySelector('.close-edit');
const popupCloseAdd = document.querySelector('.close-add');
const popupCloseImage = document.querySelector('.close-image');
// const closeButtons = document.querySelectorAll('.popup__close');
const formEdit = document.querySelector('.edit-form');
const formAdd = document.querySelector('.add-form');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupInputName = document.querySelector('.popup__input-name');
const popupInputInfo = document.querySelector('.popup__input-info');
const popupInputPlace = document.querySelector('.popup__input-place');
const popupInputLink = document.querySelector('.popup__input-link');
const cardsContainer = document.querySelector('.elements__list');
const popupImage = document.querySelector('.popup__image');
const popupSubtitle = document.querySelector('.popup__subtitle');
const buttonAddCard = document.querySelector('.profile__button-add');
const ButtonEditProfile = document.querySelector('.profile__button-edit');
const templateCard = document.querySelector('#template__card').content;
const cardElement = templateCard.querySelector('.elements__element')
const settings = {
    form: '.popup__form',
    input: '.popup__input',
    textError: '.popup__text-error',
    inputInfo: '.popup__input-info',
    submit: '.popup__submit-button'
}


initialCards.reverse().forEach(item => appendCard(createCard(item.link, item.name), cardsContainer));

function openPopup(popup) {
    popup.classList.add('popup_opened');
    enableValidator(settings);
    resetStyle(popup);
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

function editProfile(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupInputName.value;
    profileSubtitle.textContent = popupInputInfo.value;
    closePopup(popupEditProfile)
}

function createCard(link, text) {
    const newCard = cardElement.cloneNode(true);
    newCard.querySelector('.elements__photo').src = link;
    newCard.querySelector('.elements__photo').alt = `Фотография: ${text}`;
    newCard.querySelector('.elements__subtitle').textContent = text;
    newCard.querySelector('.elements__photo').addEventListener('click', function () {
        popupImage.src = newCard.querySelector('.elements__photo').src;
        popupSubtitle.textContent = newCard.querySelector('.elements__subtitle').textContent;
        popupImage.alt = popupSubtitle.textContent;
        openPopup(popupFullscreen);
    });
    newCard.querySelector('.elements__delete').addEventListener('click', () => newCard.remove());
    newCard.querySelector('.elements__button').addEventListener('click', (e) => e.target.classList.toggle('elements__button-active'));
    return newCard;
}

function appendCard(card, place) {
    place.prepend(card)
}

function openAddCardPopup() {
    openPopup(popupAddCard);
    formAdd.reset()
}

function resetStyle(popup) {
    const buttonSubmit = popup.querySelector('.popup__submit-button');
    Array.from(popup.querySelectorAll('.popup__input')).forEach((el) => {
        el.classList.remove('popup__input-error')
    })
    Array.from(popup.querySelectorAll('.popup__span')).forEach((el) => {
        el.classList.remove('popup__text-error-active')
    })
    buttonSubmit.classList.add('dissable')
    buttonSubmit.disabled = true;
}

formEdit.addEventListener('submit', editProfile);
popupCloseForm.addEventListener('click', () => closePopup(popupEditProfile));
ButtonEditProfile.addEventListener('click', openEditProfilePopup);
buttonAddCard.addEventListener('click', openAddCardPopup);
popupCloseAdd.addEventListener('click', () => closePopup(popupAddCard));
formAdd.addEventListener('submit', e => {
    e.preventDefault();
    appendCard(createCard(popupInputLink.value, popupInputPlace.value), cardsContainer);
    closePopup(popupAddCard)
})
popupCloseImage.addEventListener('click', () => { closePopup(popupFullscreen) });
popupEditProfile.addEventListener('click', () => closeToClick(event, popupEditProfile))
popupAddCard.addEventListener('click', () => closeToClick(event, popupAddCard))
popupFullscreen.addEventListener('click', () => closeToClick(event, popupFullscreen))
document.addEventListener('keydown', (evt) => closeByEscape(evt))




