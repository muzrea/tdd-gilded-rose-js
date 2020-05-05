import Product from './Product';

export default class Sulfuras extends Product {
  getPrice() {
    return this.quality;
  }
}
