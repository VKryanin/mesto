export class Section {
    constructor({ renderer }, selector) {
        // this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(selector);
    }

    renderItems(items) {
        items.forEach(this._renderer);
    }

    addItem(element) {
        this._container.prepend(element);
    }
}
