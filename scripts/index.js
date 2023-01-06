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

// for (let i = 0; i < elementsDelete.length; i++) {
//     elementsDelete[i].onclick = () => { elementsDelete[i].parentElement.remove() }
// }

// for (let i = 0; i < elementsButton.length; i++) {
//     elementsButton[i].addEventListener('click', function () {
//         this.classList.toggle('elements__button-active')
//     })
// }

// for (let i = 0; i < elementsPhoto.length; i++) {
//     elementsPhoto[i].addEventListener('click', function () {
//         popupImage.src = elementsPhoto[i].src;
//         popupSubtitle.textContent = elementsPhoto[i].nextElementSibling.textContent;
//         openForm(popupFullscreen, 'popup__fullscreen_opened');
//         popupCloseImage.addEventListener('click', () => { closeForm(popupFullscreen, 'popup__fullscreen_opened') })
//     })
// }

for (let i = 0; i < initialCards.length; i++) {
    const elementsElement = document.createElement('li');
    elementsElement.className = ('elements__element');
    const elementsPhoto = document.createElement('img');
    elementsPhoto.className = ('elements__photo');
    const elementsInfo = document.createElement('div');
    elementsInfo.className = ('elements__info');
    const elementsSubtitle = document.createElement('p');
    elementsSubtitle.className = ('elements__subtitle');
    const elementsButton = document.createElement('button');
    elementsButton.className = ('elements__button');
    const elementsDelete = document.createElement('button');
    elementsDelete.className = ('elements__delete');
    elementsElement.append(elementsPhoto, elementsInfo, elementsDelete)
    elementsInfo.append(elementsSubtitle, elementsButton)
    elementsList.append(elementsElement)
    elementsList.children[i].querySelector('p').textContent = initialCards[i].name;
    elementsList.children[i].querySelector('img').src = initialCards[i].link;
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

function addCard() {
    openForm(popupAddCard, 'popup__add-card-opened');
    addForm.addEventListener('submit', e => {e.preventDefault(); addNewCard(popupInputPlace.value, popupInputLink.value)});
    popupCloseAdd.addEventListener('click', () => closeForm(popupAddCard, 'popup__add-card-opened'));
}

function addNewCard( place, link) {
    const elementsElement = document.createElement('li').className = ('elements__element');
    const elementsPhoto = document.createElement('img').className = ('elements__photo');
    elementsPhoto.src = link;
    const elementsInfo = document.createElement('div').className = ('elements__info');
    const elementsSubtitle = document.createElement('p').className = ('elements__subtitle');
    elementsSubtitle.textContent = place;
    const elementsButton = document.createElement('button').className = ('elements__button');
    const elementsDelete = document.createElement('button').className = ('elements__delete');
    elementsList.append(elementsElement);
    elementsInfo.append(elementsSubtitle, elementsButton);
    elementsElement.append(elementsPhoto, elementsInfo, elementsDelete);
    
    
}


{/* function addNewCard(evt) {
    evt.preventDefault();
    const elementCopy = elementsElement.cloneNode(true);
    elementCopy.querySelector('.elements__subtitle').textContent = popupInputPlace.value;
    elementCopy.querySelector('.elements__photo').src = popupInputLink.value;
    elementCopy.querySelector('.elements__button').classList.remove('elements__button-active');
    elementCopy.querySelector('.elements__delete').addEventListener('click', (item) => { item.target.parentElement.remove() });
    elementCopy.querySelector('.elements__button').addEventListener('click', (item) => { item.target.classList.toggle('elements__button-active') });
    elementsList.insertBefore(elementCopy, elementsList.children[0]);
    popupSubmitAdd.addEventListener('click', closeForm(popupAddCard, 'popup__add-card-opened'));
} */}

function closeForm(block, active) {
    block.classList.remove(active);
    popup.classList.remove('popup_opened');
};

function openForm(module, modified) {
    popup.classList.add('popup_opened')
    module.classList.add(modified);
}

profileButtonEdit.addEventListener('click', EditProfile);
profileButtonAdd.addEventListener('click', addCard)