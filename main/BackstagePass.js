import Product from './Product';

export default class Sulfuras extends Product {
  getPriceByday(days) {
    if (days <= 10 && days > 5) {
      this.quality = this.quality - days * 2;
    }
    return this.quality;
  }

  getPrice() {
    return super.getPrice();
  }
}
