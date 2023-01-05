let popupCloseForm = document.querySelector('.popup__close-form');
let popup = document.querySelector('.popup');
let popupForm = document.querySelector('.popup__form');
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
let popupSubmitButton = document.querySelector('.popup__submit-button')
let elementsList = document.querySelector('.elements__list')
let elementsElement = document.querySelector('.elements__element')
let elementsDelete = document.querySelectorAll('.elements__delete')
let elementsButton = document.querySelectorAll('.elements__button');
let elementsPhoto = document.querySelectorAll('.elements__photo')
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

for (let i = 0; i < elementsDelete.length; i++) {
    elementsDelete[i].onclick = () => { elementsDelete[i].parentElement.remove() }
}

for (let i = 0; i < elementsButton.length; i++) {
    elementsButton[i].addEventListener('click', function () {
        this.classList.toggle('elements__button-active')
    })
}

for (let i = 0; i < elementsPhoto.length; i++) {
    elementsPhoto[i].addEventListener('click', function () {
        popupImage.src = elementsPhoto[i].src;
        popupSubtitle.textContent = elementsPhoto[i].nextElementSibling.textContent;
        openForm(popupFullscreen, 'popup__fullscreen_opened');
    })
}

for (let i = 0; i < elementsList.children.length; i++) {
    elementsList.children[i].querySelector('p').textContent = initialCards[i].name;
    elementsList.children[i].querySelector('img').src = initialCards[i].link;
}

function EditProfile() {
    openForm(popupEditProfile, 'popup__edit-profile-opened');
    popupForm.addEventListener('submit', handleFormSubmit);
    popupCloseForm.addEventListener('click', ()=>closeForm(popupEditProfile, 'popup__edit-profile-opened'));
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupInputName.value;
    profileSubtitle.textContent = popupInputInfo.value;
    popupSubmitButton.addEventListener('click', closeForm(popupEditProfile, 'popup__edit-profile-opened'));
}

function addCard() {
    openForm(popupAddCard, 'popup__add-card-opened');
    popupForm.addEventListener('submit', addNewCard);
    popupCloseForm.addEventListener('click', ()=>closeForm(popupAddCard, 'popup__add-card-opened'));
}

function addNewCard(evt) {
    evt.preventDefault();
    const elementCopy = elementsElement.cloneNode(true);
    console.log(elementsList.length)
    elementsList.children[0].querySelector('p').textContent = popupInputPlace.value;
    elementsList.children[0].querySelector('img').src = popupInputLink.value;
    elementsList.append(elementCopy);
    popupSubmitButton.addEventListener('click', closeForm(popupAddCard, 'popup__add-card-opened'));
}

function closeForm(block, active) {
    block.classList.remove(active);
    popup.classList.remove('popup_opened');
    console.log('test')
};

function openForm(module, modified) {
    popup.classList.add('popup_opened')
    module.classList.add(modified);
}

profileButtonEdit.addEventListener('click', EditProfile);
profileButtonAdd.addEventListener('click', addCard)
popupCloseForm.addEventListener('click', () => (console.log('q')))