import {openPopup} from './index.js'

class Card {
    constructor(data, element) {
        this._text = data.name;
        this._link = data.link;
        this._cardTemplate = element
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
        this._element.querySelector('.elements__photo').src = this._link;
        this._element.querySelector('.elements__photo').alt = this._text;
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
        this._element.querySelector('.elements__photo')
        .addEventListener('click', () => {
            document.querySelector('.popup__image').src = this._link;
            document.querySelector('.popup__image').alt = this._text;
            document.querySelector('.popup__subtitle').textContent = this._text;
            openPopup(document.querySelector('#fullscreen'))
        })
    }
}


export { Card }