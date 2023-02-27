import {openPopup} from './index.js'

class Card {
    constructor(data, element, popupImage) {
        this._text = data.name;
        this._link = data.link;
        this._cardTemplate = element
        this._popupImage = popupImage
    }
    
    _getElement() {
        const cardElement = document
            .querySelector(this._cardTemplate)
            .content.querySelector('.elements__element')
            .cloneNode(true)
        return cardElement
    }

    generate() {
        this._element = this._getElement();
        this._photoElement = this._element.querySelector('.elements__photo')
        this._photoElement.src = this._link;
        this._photoElement.alt = this._text;
        this._element.querySelector('.elements__subtitle').textContent = this._text;
        this._handlerLike();
        this._deleteCard();
        this._openImage();
        return this._element;
    }

    _handlerLike() {
        this._element.querySelector('.elements__button')
            .addEventListener('click', () => this._element
                .querySelector('.elements__button')
                .classList.toggle('elements__button-active'))
    }
    _deleteCard() {
        this._element.querySelector('.elements__delete')
            .addEventListener('click', () => this._element.remove())
    }
    _openImage() {
        this._photoElement
        .addEventListener('click', () => {
            this._popupImage.src = this._link;
            this._popupImage.alt = this._text;
            document.querySelector('.popup__subtitle').textContent = this._text;
            openPopup(document.querySelector('#fullscreen'))
        })
    }
}


export { Card }