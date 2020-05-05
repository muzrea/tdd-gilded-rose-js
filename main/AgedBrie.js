import Product from './Product';

export default class AgedBrie extends Product {
  getPriceByday(days) {
    this.quality = this.quality + days;
    return this.quality;
  }

  getPrice() {
    return super.getPrice();
  }
}
