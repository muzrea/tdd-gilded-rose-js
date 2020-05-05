import Product from './Product';

export default class Sulfuras extends Product {
  getPriceByday(days) {
    const countDownTime = this.sellIn - days;
    if (countDownTime <= 10 && countDownTime > 5) {
      this.quality = this.quality + (days - (this.sellIn - 10)) * 2;
    }
    return this.quality;
  }

  getPrice() {
    return super.getPrice();
  }
}
