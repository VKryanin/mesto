export function isValid(popupForm) {
    const inputList = Array.from(popupForm.querySelectorAll('.popup__input'))
    const buttonElement = popupForm.querySelector('.popup__submit-button')
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(popupForm, inputElement);
            toggleButton(buttonElement, inputList);
        })
    })
}

function checkInputValidity(popupForm, inputElement) {
    if (!inputElement.validity.valid) {
        showInputError(popupForm, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(popupForm, inputElement);
    }
}

function showInputError(popupForm, inputElement, message) {
    const textError = popupForm.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__input-error')
    textError.textContent = message
    textError.classList.add('popup__text-error-active')
}

function hideInputError(popupForm, inputElement) {
    const textError = popupForm.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input-error')
    textError.classList.remove('popup__text-error-active')
    textError.textContent = ''
}

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

function toggleButton(buttonElement, inputList) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('dissable');
        buttonElement.setAttribute('disabled', true);
    }
    else {
        buttonElement.classList.remove('dissable');
        buttonElement.removeAttribute('disabled');
    }
}