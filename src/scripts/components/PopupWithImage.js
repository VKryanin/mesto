import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupDescription = popupSelector.querySelector('.popup__subtitle');
        this._popupImage = popupSelector.querySelector('.popup__image');
    }

    open(description, image) {
        this._popupDescription.textContent = description;
        this._popupImage.src = image;
        this._popupImage.alt = description;
        super.open();
    }
}
