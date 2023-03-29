class Card {
    constructor(cardObject, template, userId, authorData, handleActions) {
        this._card = cardObject;
        this._cardName = this._card.name;
        this._cardImage = this._card.link;
        this._cardTemplate = template;
        this._userId = userId;
        this._cardId = authorData.cardId;
        this._authorId = authorData.authorId;
        this._cardZoom = handleActions.handleCardZoom;
        this._cardDelete = handleActions.handleCardDelete;
        this._putLike = handleActions.handleCardLike;
        this._removeLike = handleActions.handleCardDeleteLike;
        
    }

    _deleteCard() {
        this._element.remove()
    }

    renderCardLike(card) {
        this._likeArea = card.likes;
        if (this._likeArea.length === 0) {
            this.likeSelector.textContent = '';
        } else {
            this.likeSelector.textContent = this._likeArea.length;
        }
        if (this._likedCard()) {
            this._likeIcon.classList.add('elements__button-active');
        } else {
            this._likeIcon.classList.remove('elements__button-active');
        }
    }

    _likedCard() {
        const userLike = this._likeArea.find((userLike) => userLike._id === this._userId);
        return userLike
    }

    _toggleLike() {
        if (this._likedCard()) {
            this._removeLike(this._cardId);
        } else {
            this._putLike(this._cardId);
        }
    }

    createCard() {
        this._cardElement = this._getTemplate();
        this._elementImages = this._cardElement.querySelector('.elements__photo');
        this._elementName = this._cardElement.querySelector('.elements__subtitle');
        this._likeIcon = this._cardElement.querySelector('.elements__button');
        this._deleteIcon = this._cardElement.querySelector('.elements__delete');
        this.likeSelector = this._cardElement.querySelector('.cards__like-count');
        this._elementName.textContent = this._cardName;
        this._elementImages.src = this._cardImage;
        this._elementImages.alt = this._cardName;
        this.renderCardLike(this._card);
        this._addEventHandlers();
        return this._cardElement;
    }

    _getTemplate() {
        const newCard = document
            .querySelector(this._cardTemplate)
            .content.querySelector('.elements__element')
            .cloneNode(true);
        return newCard
    }

    _addEventHandlers = () => {
        this._likeIcon.addEventListener('click', () => this._toggleLike())
        this._elementImages.addEventListener('click', () => this._cardZoom(this._cardName, this._cardImage));
        if (this._userId === this._authorId) {
            this._deleteIcon.addEventListener('click', () => this._cardDelete(this._cardElement, this._cardId, this._deleteCard));
        } else {
            this._deleteIcon.remove();
        }
    }
}

export { Card }