const popupCloseForm = document.querySelector('.close-edit');
const popupCloseAdd = document.querySelector('.close-add');
const popupCloseImage = document.querySelector('.close-image');
const idEditProfile = document.querySelector('#edit-profile');
const idAddCard = document.querySelector('#add-card');
const idFullscreen = document.querySelector('#fullscreen');
const formEdit = document.querySelector('.edit-form');
const formAdd = document.querySelector('.add-form');
const popupEditProfile = document.querySelector('.popup__edit-profile');
const profileTitle = document.querySelector('.profile__title')
const popupAddCard = document.querySelector('.popup__add-card')
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupInputName = document.querySelector('.popup__input-name');
const popupInputInfo = document.querySelector('.popup__input-info');
const popupInputPlace = document.querySelector('.popup__input-place')
const popupInputLink = document.querySelector('.popup__input-link')
const popupSubmitEdit = document.querySelector('.send-edit')
const cardsContainer = document.querySelector('.elements__list')
const templateCard = document.querySelector('#template__card').content;
const popupFullscreen = document.querySelector('.popup__fullscreen')
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

ButtonEditProfile.addEventListener('click', openEditProfilePopup);

function openEditProfilePopup() {
    const popup = document.querySelector('#edit-profile')
    openPopup(popup);
    formEdit.addEventListener('submit', profileEdit);
    popupCloseForm.addEventListener('click', () => closePopup(popup));
}

function profileEdit(evt) {
    evt.preventDefault();
    const popup = document.querySelector('#edit-profile')
    profileTitle.textContent = popupInputName.value;
    profileSubtitle.textContent = popupInputInfo.value;
    popupSubmitEdit.addEventListener('click', closePopup(popup));
}

buttonAddCard.addEventListener('click', addNewCard)

function createCard(link, text) {
    const popup = document.querySelector('#fullscreen')
    const cardElement = templateCard.querySelector('.elements__element').cloneNode(true);
    cardElement.querySelector('.elements__photo').src = link;
    cardElement.querySelector('.elements__photo').alt = `Фотография: ${text}`;
    cardElement.querySelector('.elements__subtitle').textContent = text;
    cardElement.querySelector('.elements__photo').addEventListener('click', function () {
        popupImage.src = cardElement.querySelector('.elements__photo').src;
        popupSubtitle.textContent = cardElement.querySelector('.elements__subtitle').textContent;
        openPopup(popup);
        popupCloseImage.addEventListener('click', () => { closePopup(popup) })
    });
    cardElement.querySelector('.elements__delete').addEventListener('click', () => cardElement.querySelector('.elements__delete').parentElement.remove());
    cardElement.querySelector('.elements__button').addEventListener('click', (e) => e.target.classList.toggle('elements__button-active'));
    return cardElement;
}

function appendCard(card, place) {
    place.insertBefore(card, place.children[0])
}

function addNewCard() {
    const popup = document.querySelector('#add-card')
    openPopup(popup)
    document.querySelector('.add-form').addEventListener('submit', e => {
        e.preventDefault(); appendCard(createCard(popupInputLink.value, popupInputPlace.value), cardsContainer); closePopup(popup)
    })
    popupCloseAdd.addEventListener('click', () => closePopup(popup));
}





