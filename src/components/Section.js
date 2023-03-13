import { cardSelectors } from "./utils/cardSelectors";

export class Section {
    constructor({ items, renderer }, selector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(selector);
    }

    renderItems() {
        this._renderedItems.reverse().forEach(item => {
            const data = {
                name: item.name,
                link: item.link,
                ...cardSelectors
            }
            this._renderer(data);
        });
    }

    addItem(cardElement) {
        this._container.prepend(cardElement);
    }
}

