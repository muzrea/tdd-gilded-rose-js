import Product from './Product';

export default class Sulfuras extends Product {
  getPriceByday() {
    return this.quality;
  }

  getPrice() {
    return super.getPrice();
  }
}
