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
        this._fullscreen = data.fullscreen;
        this._fullscreenSubtitle = data.fullscreenSubtitle;
        this._fullscreenImage = data.fullscreenImage
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
        this._element.querySelector(this._imageCard).alt = this._name;
        this._element.querySelector(this._subCard).textContent = this._name;
        this._setListener()
        console.log(this._element);
        return this._element;
    }

    _setListener() {
        this._like = this._element.querySelector(this._likeCard);
        this._like.addEventListener('click', () => this._toggleButton());
        this._delete = this._element.querySelector(this._deleteCard);
        this._delete.addEventListener('click', () => this._deleteElement());
        this._fullScreenOpen = this._element.querySelector(this._imageCard);
        this._fullScreenOpen.addEventListener('click', () => this._handleCardClick(this._name, this._link))
    }

    _deleteElement() {
        this._element.remove()
    }

    _toggleButton() {
        this._like.classList.toggle('elements__button-active')
    }
}

export { Card }