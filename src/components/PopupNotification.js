import { Popup } from "./Popup";

export class PopupNotification extends Popup {
    constructor(popupSelector, { callbackNotification }) {
        super(popupSelector);
        this._submitButton = this._popupItem.querySelector('.popup__form');
        this._callbackNotification = callbackNotification;
    }

    // open(el, cardData, cardId) {
    //     this._cardData = cardData;
    //     this._cardId = cardId;
    //     this.parentCard = el;

    //     super.open()
    // }

    open(card) {
        this._card = card;
        super.open()
    }

    setEventListeners() {
        this._submitButton.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callbackNotification(this._card);
        })
        super.setEventListeners();
    }
}