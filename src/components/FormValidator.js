
class FormValidator {
    constructor(settings, form) {
        this._formElement = form;
        this._settings = settings;
        this._btn = this._formElement.querySelector(this._settings.submitButtonSelector)
        this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector))
    }

    _isValidInput = (input) => {
        if (!input.validity.valid) {
            this._showError(input);
        }
        else {
            this._hideError(input);
        }
    }

    _showError = (input) => {
        const error = this._formElement.querySelector(`.${input.id}-error`);
        error.textContent = input.validationMessage;
        error.classList.add(this._settings.errorClass);
    };

    _hideError = (input) => {
        const error = this._formElement.querySelector(`.${input.id}-error`);
        error.classList.remove(input.errorClass);
        error.textContent = "";
    }

    toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._btn.disabled = true;
            this._btn.classList.add(this._settings.inactiveButtonClass);
        } else {
            this._btn.disabled = false
            this._btn.classList.remove(this._settings.inactiveButtonClass);
        }
    }

    _hasInvalidInput = () => {
        return this._inputList.some((input) => {
            return !input.validity.valid;
        });
    };

    _setEventListeners() {
        this._inputList.forEach((input) => {
            input.addEventListener("input", () => {
                this.toggleButtonState(this._inputList, this._buttonElement);
                this._isValidInput(input);
            });
        });
    }

    enableValidation() {
        this.toggleButtonState();
        this._inputList.forEach((input) => {
            this._isValidInput(input)
        })
        this._setEventListeners();
    }

    resetValidate() {
        this._inputList.forEach((inputItem) => {
            this._hideError(inputItem);
        })
        this.toggleButtonState();
    }
}

export { FormValidator } 