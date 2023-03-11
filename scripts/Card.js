// import { openPopup, fullscreen, fullscreenSubtitle, fullscreenImage } from './index.js'
import { fullscreen, fullscreenSubtitle, fullscreenImage } from './index.js'



class Card {
    constructor(data, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardTemplate = data.template;
        this._imageCard = data.photo;
        this._deleteCard = data.delete;
        this._likeCard = data.like;
        this._subCard = data.subtitle;
        this._handleCardClick = handleCardClick;
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
        this._openFullScreen.addEventListener('click', () => this._handleCardClick(this._name, this._link))
    }
    _openCard() {
        openPopup(fullscreen);
        fullscreenImage.src = this._link
        fullscreenImage.alt = this._name
        fullscreenSubtitle.textContent = this._name
    }
}

export { Card }