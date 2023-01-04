let root = document.querySelector('.root')
let popupCloseForm = document.querySelector('.popup__close-form');
let popup = document.querySelector('.popup');
let popupForm = document.querySelector('.popup__form');
let popupEditProfile = document.querySelector('.popup__container');
let profileButtonEdit = document.querySelector('.profile__button-edit');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let profileButtonAdd = document.querySelector('.profile__button-add')
let popupInputInfo = document.querySelector('.popup__input-info');
let popupInputName = document.querySelector('.popup__input-name');
let elementsButton = document.querySelectorAll('.elements__button');
let elementsList = document.querySelector('.elements__list')
let elementsElement = document.querySelector('.elements__element')
let popupTitle = document.querySelector('.popup__title')
let submitButton = document.querySelector('.popup__submit-button')
let elementsDelete = document.querySelectorAll('.elements__delete')

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

for (let i=0; i < elementsDelete.length; i++) {
    elementsDelete[i].onclick = () => {elementsDelete[i].parentElement.remove()}
}

for (let i = 0; i < elementsButton.length; i++) {
    elementsButton[i].addEventListener('click', function () {
        this.classList.toggle('elements__button-active')
    })
}

function EditProfile() {
    EditFormItems = {
        title: 'Редактировать профиль',
        inputName: popupInputName.value,
        inpupInfo: popupInputInfo.value,
        button: 'Сохранить'
    };
    popupTitle.textContent = EditFormItems.title;
    popupInputName.value = EditFormItems.inputName;
    popupInputInfo.value = EditFormItems.inpupInfo;
    submitButton.textContent = EditFormItems.button
    openForm();
    popupForm.addEventListener('submit', handleFormSubmit);
    popupCloseForm.addEventListener('click', closeForm);
}

function closeForm(evt) {
    popup.classList.remove('popup_opened');
    evt.preventDefault();
};

function openForm(evt) {
    popup.classList.add('popup_opened');
    // evt.preventDefault();
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupInputName.value;
    profileSubtitle.textContent = popupInputInfo.value;
    closeForm();
    return popupInputName.value, popupInputInfo.value

}

function addCard() {
    EditFormItems = {
        title: 'Новое место',
        inputName: 'Название',
        inpupInfo: 'Ссылка на картинку',
        button: 'Создать'
    };
    popupTitle.textContent = EditFormItems.title;
    popupInputName.placeholder = EditFormItems.inputName;
    popupInputInfo.placeholder = EditFormItems.inpupInfo;
    popupInputName.value = '';
    popupInputInfo.value = '';
    submitButton.textContent = EditFormItems.button;
    openForm();
    popupForm.addEventListener('submit', addNewCard);
    popupCloseForm.addEventListener('click', closeForm);
}

function addNewCard(evt) {
    evt.preventDefault();
    const elementCopy = elementsElement.cloneNode(true);
    elementsList.children[0].querySelector('p').textContent = popupInputName.value;
    elementsList.children[0].querySelector('img').src = popupInputInfo.value;
    elementsList.append(elementCopy);
    closeForm();
}

profileButtonEdit.addEventListener('click', EditProfile);
profileButtonAdd.addEventListener('click', addCard)

for (let i = 0; i < elementsList.children.length; i++) {
    elementsList.children[i].querySelector('p').textContent = initialCards[i].name;
    elementsList.children[i].querySelector('img').src = initialCards[i].link;
}

