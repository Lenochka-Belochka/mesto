export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer; 
    this._container = document.querySelector(containerSelector);
  }

  addItem(item) {
    const card = this._renderer(item);
    this._container.prepend(card);
  }

  setCardItems(arr) {
    this._renderedItems = Array.from(arr);
   }
  renderItems() {
    this._renderedItems.forEach(item => this.addItem(item));
 }
  }



