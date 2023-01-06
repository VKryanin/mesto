let popupCloseForm = document.querySelector('.close-edit');
let popupCloseAdd = document.querySelector('.close-add');
let popupCloseImage = document.querySelector('.close-image');
let popup = document.querySelector('.popup');
let editForm = document.querySelector('.edit-form');
let addForm = document.querySelector('.add-form');
let popupEditProfile = document.querySelector('.popup__edit-profile');
let popupAddCard = document.querySelector('.popup__add-card')
let profileButtonEdit = document.querySelector('.profile__button-edit');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let profileButtonAdd = document.querySelector('.profile__button-add')
let popupInputName = document.querySelector('.popup__input-name');
let popupInputInfo = document.querySelector('.popup__input-info');
let popupInputPlace = document.querySelector('.popup__input-place')
let popupInputLink = document.querySelector('.popup__input-link')
let popupSubmitEdit = document.querySelector('.send-edit')
let popupSubmitAdd = document.querySelector('.send-add')
let elementsList = document.querySelector('.elements__list')
// let elementsDelete = document.querySelectorAll('.elements__delete')
// let elementsButton = document.querySelectorAll('.elements__button');
// let elementsPhoto = document.querySelectorAll('.elements__photo')
let popupFullscreen = document.querySelector('.popup__fullscreen')
let popupImage = document.querySelector('.popup__image')
let popupSubtitle = document.querySelector('.popup__subtitle')

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

// for (let i = 0; i < elementsPhoto.length; i++) {
//     elementsPhoto[i].addEventListener('click', function () {
//         popupImage.src = elementsPhoto[i].src;
//         popupSubtitle.textContent = elementsPhoto[i].nextElementSibling.textContent;
//         openForm(popupFullscreen, 'popup__fullscreen_opened');
//         popupCloseImage.addEventListener('click', () => { closeForm(popupFullscreen, 'popup__fullscreen_opened') })
//     })
// }

for (let i = 0; i < initialCards.length; i++) {
    appendCard(createCard(initialCards[i].name, initialCards[i].link), elementsList)
}

function EditProfile() {
    openForm(popupEditProfile, 'popup__edit-profile-opened');
    editForm.addEventListener('submit', handleFormSubmit);
    popupCloseForm.addEventListener('click', () => closeForm(popupEditProfile, 'popup__edit-profile-opened'));
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupInputName.value;
    profileSubtitle.textContent = popupInputInfo.value;
    popupSubmitEdit.addEventListener('click', closeForm(popupEditProfile, 'popup__edit-profile-opened'));
}


addForm.addEventListener('submit', e => {
    e.preventDefault();
    appendCard(createCard(popupInputPlace.value, popupInputLink.value), elementsList);
    popupInputPlace.value = '', popupInputLink.value = ''; closeForm(popupAddCard, 'popup__add-card-opened')
});

function addCard() {
    openForm(popupAddCard, 'popup__add-card-opened');
}

function createCard(place, link) {
    const elementsElement = document.createElement('li');
    elementsElement.className = ('elements__element');
    const elementsPhoto = document.createElement('img');
    elementsPhoto.className = ('elements__photo');
    elementsPhoto.src = link;
    elementsPhoto.addEventListener('click', function () {
        popupImage.src = elementsPhoto.src;
        popupSubtitle.textContent = elementsPhoto.nextElementSibling.textContent;
        openForm(popupFullscreen, 'popup__fullscreen_opened');
        popupCloseImage.addEventListener('click', () => { closeForm(popupFullscreen, 'popup__fullscreen_opened') })
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

function closeForm(block, active) {
    block.classList.remove(active);
    popup.classList.remove('popup_opened');
};

function openForm(module, modified) {
    popup.classList.add('popup_opened')
    module.classList.add(modified);
}


popupCloseAdd.addEventListener('click', () => closeForm(popupAddCard, 'popup__add-card-opened'));
profileButtonEdit.addEventListener('click', EditProfile);
profileButtonAdd.addEventListener('click', addCard)