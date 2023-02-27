const messageList = [
    {
        image: 'https://code.s3.yandex.net/web-code/card__image.jpg',
        text: 'Привет, нам срочно требуется доработать чат!'
    },
    {
        text: 'Это карточка пользователя',
        isOwner: true
    },
    {
        image: 'https://code.s3.yandex.net/web-code/card__image.jpg',
        text: 'Ответ!'
    },
];

class Message {
    constructor(selector) {
        this._selector = selector;
    }

    _getElement() {
        const messageElement = document
            .querySelector(this._selector)
            .content
            .querySelector('.message')
            .cloneNode(true);

        this._element = messageElement;
    }

    _setEventListeners() {
        this._element.querySelector('.message__text').addEventListener('click', () => {
            this._handleClick();
        });
    }

    _handleClick() {
        this._element.querySelector('.message__text').classList.toggle('message__text_is-active');
    }
}

class UserMessage extends Message {
    constructor(data, selector) {
        super(selector);
        this._text = data.text;
    }

    generate() {
        super._getElement();
        super._setEventListeners();

        this._element.querySelector('.message__paragraph').textContent = this._text;

        return this._element;
    }
};

class DefaultMessage extends Message {
    constructor(data, selector) {
        super(selector);
        this._text = data.text;
        this._image = data.image;
    }

    generate() {
        super._getElement();
        super._setEventListeners();

        this._element.querySelector('.message__avatar').src = this._image;
        this._element.querySelector('.message__paragraph').textContent = this._text;

        return this._element;
    }
}

messageList.forEach((item) => {
    const message = item.isOwner
        ? new UserMessage(item, '.message-template_type_user')
        : new DefaultMessage(item, '.message-template_type_default');

    const messageElement = message.generate();

    document.body.append(messageElement);
});