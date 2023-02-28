import { openPopup } from './index.js'

class Card {
    // constructor(data, cardTemplate, likeCard, deleteCard, imageCard, subCard) {
    //     this._name = data.name;
    //     this._link = data.link;
    //     this._cardTemplate = cardTemplate;
    //     this._imageCard = imageCard;
    //     this._deleteCard = deleteCard;
    //     this._likeCard = likeCard;
    //     this._subCard = subCard;
    //     console.log(this._imageCard);
    //     console.log(this._deleteCard);
    // }
    constructor(data) {
        this._name = data.name;
        this._link = data.link;
        this._cardTemplate = data.template;
        this._imageCard = data.photo;
        this._deleteCard = data.delete;
        this._likeCard = data.like;
        this._subCard = data.subtitle;
        this._fullscreen = fullscreen;
    }

    _getTemplate() {
        const newCard = document
            .querySelector(this._cardTemplate)
            .content.querySelector('.elements__element')
            .cloneNode(true);
        return newCard
    }

    createCard() {
        this._element = this._getTemplate();
        this._element.querySelector(this._imageCard).src = this._link;
        this._element.querySelector(this._imageCard).alt = this._link;
        this._element.querySelector(this._subCard).textContent = this._name;
        this._setListener()
        return this._element;
    }

    _setListener() {
        this._like = this._element.querySelector(this._likeCard);
        this._like.addEventListener('click', () => this._like.classList.toggle('elements__button-active'));
        this._delete = this._element.querySelector(this._deleteCard);
        this._delete.addEventListener('click', () => this._element.remove());
        this._openFullScreen = this._element.querySelector(this._imageCard);
        this._openFullScreen.addEventListener('click', () => {
            this._openCard()
        })
    }
    _openCard() {
        openPopup(this._fullscreen);
        const fullscreen = document.querySelector('.popup__fullscreen');
        fullscreen.querySelector('.popup__image').src = this._link
        fullscreen.querySelector('.popup__image').alt = this._name
        fullscreen.querySelector('.popup__subtitle').textContent = this._name
    }
}

export { Card }