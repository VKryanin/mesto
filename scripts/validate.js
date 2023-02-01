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
        formSelector.addEventListener('click', () => setListenerForm(settings, formSelector))
    )
}


function setListenerForm(settings, formElement) {
    const inputList = formElement.querySelectorAll(settings.inputSelector);
    isValidInput(inputList, settings, formElement)
}

function isValidInput(inputList, settings, formElement) {
    inputList.forEach(inputActive => inputActive.addEventListener('input', () => {
    if (!inputActive.validity.valid) {
        toggleButton(inputActive, formElement, settings)
    }
    else {
        toggleButton(inputActive, formElement, settings)
    }}
    ))

}

function toggleButton(inputActive, formElement, settings) {
    const button = formElement.querySelector(settings.submitButtonSelector);
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    if (inputList.some(el => !el.validity.valid)) {
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
    const spanError = inputActive.nextElementSibling
    spanError.classList.add(settings.errorClass)
    spanError.textContent = inputActive.validationMessage;
    console.log(spanError.textContent.lenght);
    if (spanError.textContent.length > 2) {
        inputActive.classList.add(settings.inputErrorClass);
    }
}

function hideError(inputActive, settings) {
    const spanError = inputActive.nextElementSibling;
    spanError.classList.remove(settings.errorClass);
    spanError.textContent = '';
    if (!spanError.textContent.length < 2) {
        inputActive.classList.remove(settings.inputErrorClass);
    }
}

