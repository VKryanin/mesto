let root = document.querySelector('.root')
let popupCloseForm = document.querySelector('.popup__close-form');
let popup = document.querySelector('.popup');
let profileButtonEdit = document.querySelector('.profile__button-edit');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let popupInputInfo = document.querySelector('.popup__input-info');
let popupInputName = document.querySelector('.popup__input-name');
let popupSumbitButton = document.querySelector('.popup__sumbit-button');
let popupEditProfile = document.querySelector('.popup__edit-profile');
let elementsButton = document.querySelectorAll('.elements__button');

function render() {
    profileTitle.textContent = popupInputName.value;
    profileSubtitle.textContent = popupInputInfo.value;
    popup.classList.toggle('hidden');
    root.classList.toggle('block');
    evt.preventDefault();
}

function closeForm() {
    popup.classList.add('hidden');
    root.classList.remove('block');
    evt.preventDefault();
};

function openForm() {
    popup.classList.remove('hidden');
    root.classList.add('block');
    popupEditProfile.classList.remove('hidden');
    evt.preventDefault();
}

for (let i = 0; i < elementsButton.length; i++) {
    elementsButton[i].addEventListener('click', function(){
        this.classList.toggle('elements__button-active')
    })
}

profileButtonEdit.addEventListener('click', openForm);
popupSumbitButton.addEventListener('click', render);
popupCloseForm.addEventListener('click', closeForm);

