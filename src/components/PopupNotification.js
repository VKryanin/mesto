import { Popup } from "./Popup";

export class popupNotification extends Popup {
    constructor(popupSelector, { callbackNotification }) {
        super(popupSelector);
        this._submitButton = this._popupItem.querySelector('.popup__form');
        this._callbackNotification = callbackNotification;
    }

    open(cardObj, cardId) {
        this._cardObj = cardObj;
        this._cardId = cardId;
        super.open()
    }

    setEventListeners() {
        this._submitButton.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callbackNotification(this._cardObject, this._cardId);
        })
        super.setEventListeners();
    }
}