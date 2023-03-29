import { Popup } from "./Popup";

export class popupNotification extends Popup {
    constructor(popupSelector, { callbackNotification }) {
        super(popupSelector);
        this._button = this._popupItem.querySelector('.popup__form');
        console.log(this._button);
        this._callbackNotification = callbackNotification;
    }

    open(cardObj, cardId) {
        this._cardObj = cardObj;
        this._cardId = cardId;
        super.open()
    }

    setEventListeners() {
        this._button.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callbackNotice(this._cardObject, this._cardId);
        })
        super.setEventListeners();
    }
}