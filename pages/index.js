let root = document.querySelector('.root')
let popup__closeForm = document.querySelector('.popup__close-form');
let popup = document.querySelector('.popup');
let profile__buttonEdit = document.querySelector('.profile__button-edit');
let profile__title = document.querySelector('.profile__title');
let popup__inputName = document.querySelector('.popup__input-name')
let popup__sumbitButton = document.querySelector('.popup__sumbit-button')

function render() {
    profile__title.textContent = popup__inputName.value;
}

function closeForm () {
    popup.classList.add('hidden');
    root.classList.remove('block');
};

function openForm () {
    popup.classList.remove('hidden');
    root.classList.add('block');
}



console.log(profile__title)
profile__buttonEdit.addEventListener('click', openForm);
popup__sumbitButton.addEventListener('click', render);
popup__closeForm.addEventListener('click', closeForm);

