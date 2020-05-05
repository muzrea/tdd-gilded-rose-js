import Product from './Product';

export default class AgedBrie extends Product {
  getPrice(days) {
    return this.quality + days;
  }
}
