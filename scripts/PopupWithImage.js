import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupDescription = document.querySelector('.elements__subtitle');
        this._popupImage = document.querySelector('.popup__image');
    }

    open(description, image) {
        this._popupDescription.textContent = description;
        this._popupImage.src = image;
        this._popupImage.alt = description;
        super.open();
    }
}
