const popupAddCard = document.querySelector('#add-card')
const popupFullscreen = document.querySelector('#fullscreen');
const popupEditProfile = document.querySelector('#edit-profile');
const popupCloseForm = document.querySelector('.close-edit');
const popupCloseAdd = document.querySelector('.close-add');
const popupCloseImage = document.querySelector('.close-image');
const formEdit = document.querySelector('.edit-form');
const formAdd = document.querySelector('.add-form');
const profileTitle = document.querySelector('.profile__title')
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupInputName = document.querySelector('.popup__input-name');
const popupInputInfo = document.querySelector('.popup__input-info');
const popupInputPlace = document.querySelector('.popup__input-place')
const popupInputLink = document.querySelector('.popup__input-link')
const popupSubmitEdit = document.querySelector('.send-edit')
const cardsContainer = document.querySelector('.elements__list')
const templateCard = document.querySelector('#template__card').content;
const popupImage = document.querySelector('.popup__image')
const popupSubtitle = document.querySelector('.popup__subtitle')
const elementsPhoto = templateCard.querySelector('.elements__photo')
const elementsSubtitle = templateCard.querySelector('.elements__subtitle')
const buttonAddCard = document.querySelector('.profile__button-add')
const ButtonEditProfile = document.querySelector('.profile__button-edit');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

for (let i = 0; i < initialCards.length; i++) {
    appendCard(createCard(initialCards[i].link, initialCards[i].name), cardsContainer)
}

function openPopup(popup) {
    popup.classList.add('popup_opened')
}

function closePopup(popup) {
    popup.classList.remove('popup_opened')
}

function openEditProfilePopup() {
    openPopup(popupEditProfile);
    popupInputName.value = profileTitle.textContent;
    popupInputInfo.value = profileSubtitle.textContent;
    formEdit.addEventListener('submit', profileEdit);
    popupCloseForm.addEventListener('click', () => closePopup(popupEditProfile));
}

function profileEdit(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupInputName.value;
    profileSubtitle.textContent = popupInputInfo.value;
    popupSubmitEdit.addEventListener('click', closePopup(popupEditProfile));
}

function createCard(link, text) {
    const cardElement = templateCard.querySelector('.elements__element').cloneNode(true);
    cardElement.querySelector('.elements__photo').src = link;
    cardElement.querySelector('.elements__photo').alt = `Фотография: ${text}`;
    cardElement.querySelector('.elements__subtitle').textContent = text;
    cardElement.querySelector('.elements__photo').addEventListener('click', function () {
        popupImage.src = cardElement.querySelector('.elements__photo').src;
        popupSubtitle.textContent = cardElement.querySelector('.elements__subtitle').textContent;
        openPopup(popupFullscreen);
        popupCloseImage.addEventListener('click', () => { closePopup(popupFullscreen) })
    });
    cardElement.querySelector('.elements__delete').addEventListener('click', () => cardElement.querySelector('.elements__delete').parentElement.remove());
    cardElement.querySelector('.elements__button').addEventListener('click', (e) => e.target.classList.toggle('elements__button-active'));
    return cardElement;
}

function appendCard(card, place) {
    place.insertBefore(card, place.children[0])
}

function addNewCard() {
    openPopup(popupAddCard)
    popupInputLink.value = ''
    popupInputPlace.value = ''
    popupCloseAdd.addEventListener('click', () => closePopup(popupAddCard));
}

ButtonEditProfile.addEventListener('click', openEditProfilePopup);
buttonAddCard.addEventListener('click', addNewCard)
formAdd.addEventListener('submit', e => {
    e.preventDefault(); appendCard(createCard(popupInputLink.value, popupInputPlace.value), cardsContainer); closePopup(popupAddCard)
})

