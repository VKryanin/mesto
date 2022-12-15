let root = document.querySelector('.root')
let popup__closeForm = document.querySelector('.popup__close-form');
let popup = document.querySelector('.popup');
let profile__buttonEdit = document.querySelector('.profile__button-edit');
let profile__title = document.querySelector('.profile__title');
let profile__subtitle = document.querySelector('.profile__subtitle')
let popup__inputInfo = document.querySelector('.popup__input-info')
let popup__inputName = document.querySelector('.popup__input-name')
let popup__sumbitButton = document.querySelector('.popup__sumbit-button')

function render() {
    profile__title.textContent = popup__inputName.value;
    profile__subtitle.textContent = popup__inputInfo.value;
    popup.classList.toggle('hidden');
    root.classList.toggle('block');
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

