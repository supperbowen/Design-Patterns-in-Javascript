class MenuItem {
  constructor({ name = '', description = '', isVegetarian = false, price = 0 }) {
    this.name = name;
    this.description = description;
    this._isVegetarian = isVegetarian;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getPrice() {
    return this.price;
  }

  isVegetarian() {
    return this._isVegetarian;
  }
}

export default MenuItem;
