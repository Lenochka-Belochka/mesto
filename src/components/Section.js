export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items; //свойство = массив данных, которые нужно добавить на страницу при инициализации класса
    this._renderer = renderer; // Свойство = функция, которая отвечает за создание и отрисовку данных на странице
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    const renderedItem = this._renderer(element);
    this._container.prepend(renderedItem);
  }

  renderItems() {
    this._items.forEach((item) => this.addItem(item));
  }
}
