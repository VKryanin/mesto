import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, { callbackFormSubmit }) {
        super(popupSelector);
        this._callbackFormSubmit = callbackFormSubmit;
        this._popupFormItem = this._popupItem.querySelector('.popup__form');
    }

    _getInputValues() {
        this._inputList = Array.from(this._popupFormItem.querySelectorAll('.popup__input'));
        this._formValues = {};
        this._inputList.forEach(inputItem => {
            this._formValues[inputItem.name] = inputItem.value;
        });
        return this._formValues;
    }
    
    setEventListeners() {
        super.setEventListeners();
        this._popupFormItem.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callbackFormSubmit(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._popupFormItem.reset();
    }
}