// const settings = {
//     formSelector: '.popup__form', форма
//     inputSelector: '.popup__input', инпут
//     submitButtonSelector: '.popup__submit-button', кнопка
//     inactiveButtonClass: 'popup__button_disabled', кнопка не активна
//     inputErrorClass: 'popup__input_type_error', ошибка в инпут
//     errorClass: 'popup__error_visible' показ спан?
// }

export function enableValidator(settings) {
    document.querySelectorAll(settings.formSelector).forEach(formSelector =>
        formSelector.addEventListener('input', () => setListenerForm(settings, formSelector))
    )
}

function setListenerForm(settings, formElement) {
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector))
    inputList.forEach(inputActive => inputActive.addEventListener('input', isValidInput(inputActive, settings, formElement)))
}
function isValidInput(inputActive, settings, formElement) {
    if (!inputActive.validity.valid) {
        showError(inputActive, settings)
        toggleButton(inputActive ,formElement, settings)
    }
    else {
        hideError(inputActive, settings)
        toggleButton(inputActive ,formElement, settings)
    }
}

function toggleButton(inputActive ,formElement, settings) {
    const button = formElement.querySelector(settings.submitButtonSelector);
    if (!inputActive.validity.valid) {
        button.classList.add(settings.inactiveButtonClass)
        showError(inputActive, settings)
    }
    else {
        button.classList.remove(settings.inactiveButtonClass)
        button.removeAttribute("disabled")
        hideError(inputActive, settings)
    }
}

function showError(inputActive, settings) {
    inputActive.classList.add(settings.inputErrorClass);
    const spanError = inputActive.nextElementSibling
    spanError.classList.add(settings.errorClass)
    spanError.textContent = inputActive.validationMessage
}

function hideError(inputActive, settings) {
    inputActive.classList.remove(settings.inputErrorClass);
    const spanError = inputActive.nextElementSibling
    spanError.classList.remove(settings.errorClass)
    spanError.textContent = ''
}

// function showInputError(popupForm, inputElement, message) {
//     const textError = popupForm.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.add('popup__input-error')
//     textError.classList.add('popup__text-error-active')
//     textError.textContent = message
// }

// function hideInputError(popupForm, inputElement) {
//     const textError = popupForm.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.remove('popup__input-error')
//     textError.classList.remove('popup__text-error-active')
//     textError.textContent = ''
// }

// function hasInvalidInput(inputList) {
//     return inputList.some((inputElement) => {
//         return !inputElement.validity.valid;
//     });
// }

// function toggleButton(buttonElement, inputList) {
//     if (hasInvalidInput(inputList)) {
//         buttonElement.classList.add('dissable');
//         buttonElement.setAttribute('disabled', true);
//     }
//     else {
//         buttonElement.classList.remove('dissable');
//         buttonElement.removeAttribute('disabled');
//     }
// }
