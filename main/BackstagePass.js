import Product from './Product';

export default class Sulfuras extends Product {
  getPriceByday(days) {
    if (super.getPrice() === 0 || super.getPrice() === 50) {
      return super.getPrice();
    }
    const countDownTime = this.sellIn - days;
    if (countDownTime <= 10 && countDownTime > 5) {
      this.quality = this.quality + (days - (this.sellIn - 10)) * 2;
    }
    if (countDownTime <= 5 && countDownTime > 0) {
      this.quality = this.quality + 10 + (days - (this.sellIn - 5)) * 3;
    }
    return this.quality;
  }

  getPrice() {
    return super.getPrice();
  }
}
