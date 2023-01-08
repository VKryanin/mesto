import { initialCards } from "./cards.js";

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
const popupImage = document.querySelector('.popup__image');
const popupSubtitle = document.querySelector('.popup__subtitle');
const buttonAddCard = document.querySelector('.profile__button-add');
const ButtonEditProfile = document.querySelector('.profile__button-edit');
const templateCard = document.querySelector('#template__card').content;
const cardElement = templateCard.querySelector('.elements__element')

initialCards.reverse().forEach(item => appendCard(createCard(item.link, item.name), cardsContainer));

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
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
    let newCard = cardElement.cloneNode(true);
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

