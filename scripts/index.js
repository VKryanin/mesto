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
const profileButtonEdit = document.querySelector('.profile__button-edit');
const profileSubtitle = document.querySelector('.profile__subtitle');
const profileButtonAdd = document.querySelector('.profile__button-add')
const popupInputName = document.querySelector('.popup__input-name');
const popupInputInfo = document.querySelector('.popup__input-info');
const popupInputPlace = document.querySelector('.popup__input-place')
const popupInputLink = document.querySelector('.popup__input-link')
const popupSubmitEdit = document.querySelector('.send-edit')
const cardsContainer = document.querySelector('.elements__list')
const popupFullscreen = document.querySelector('.popup__fullscreen')
const popupImage = document.querySelector('.popup__image')
const popupSubtitle = document.querySelector('.popup__subtitle')

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
    appendCard(createCard(initialCards[i].name, initialCards[i].link), cardsContainer)
}

function openEditProfilePopup() {
    openForm(idEditProfile, popupEditProfile, 'popup__edit-profile-opened');
    formEdit.addEventListener('submit', profileEdit);
    popupCloseForm.addEventListener('click', () => closeForm(idEditProfile, popupEditProfile, 'popup__edit-profile-opened'));
}

function profileEdit(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupInputName.value;
    profileSubtitle.textContent = popupInputInfo.value;
    popupSubmitEdit.addEventListener('click', closeForm(idEditProfile, popupEditProfile, 'popup__edit-profile-opened'));
}

formAdd.addEventListener('submit', e => {
    e.preventDefault();
    appendCard(createCard(popupInputPlace.value, popupInputLink.value), cardsContainer);
    popupInputPlace.value = '', popupInputLink.value = ''; closeForm(idAddCard, popupAddCard, 'popup__add-card-opened')
});

function addCard() {
    openForm(idAddCard, popupAddCard, 'popup__add-card-opened');
}

function createCard(place, link) {
    const elementsElement = document.createElement('li');
    elementsElement.className = ('elements__element');
    const elementsPhoto = document.createElement('img');
    elementsPhoto.className = ('elements__photo');
    elementsPhoto.src = link;
    elementsPhoto.alt = 'Фотография называется: ' + place;
    elementsPhoto.addEventListener('click', function () {
        popupImage.src = elementsPhoto.src;
        popupSubtitle.textContent = elementsPhoto.nextElementSibling.textContent;
        openForm(idFullscreen, popupFullscreen, 'popup__fullscreen_opened');
        popupCloseImage.addEventListener('click', () => { closeForm(idFullscreen, popupFullscreen, 'popup__fullscreen_opened') })
    })

    const elementsInfo = document.createElement('div');
    elementsInfo.className = ('elements__info');
    const elementsSubtitle = document.createElement('p');
    elementsSubtitle.className = ('elements__subtitle');
    elementsSubtitle.textContent = place;
    const elementsButton = document.createElement('button');
    elementsButton.className = ('elements__button');
    elementsButton.addEventListener('click', (e) => e.target.classList.toggle('elements__button-active'))
    const elementsDelete = document.createElement('button');
    elementsDelete.className = ('elements__delete');
    elementsDelete.addEventListener('click', () => elementsDelete.parentElement.remove())
    elementsInfo.append(elementsSubtitle, elementsButton);
    elementsElement.append(elementsPhoto, elementsInfo, elementsDelete);
    return elementsElement;
}

function appendCard(card, list) {
    list.insertBefore(card, list.children[0]);
}

function closeForm(popup, block, active) {
    block.classList.remove(active);
    popup.classList.remove('popup_opened');
};

function openForm(popup, module, modified) {
    popup.classList.add('popup_opened')
    module.classList.add(modified);
}


popupCloseAdd.addEventListener('click', () => closeForm(idAddCard, popupAddCard, 'popup__add-card-opened'));
profileButtonEdit.addEventListener('click', openEditProfilePopup);
profileButtonAdd.addEventListener('click', addCard)