export default class Product {
  constructor(sellIn, quality) {
    this.sellIn = sellIn;
    this.quality = quality;
  }

  getPriceByday(days) {
    if (days <= this.sellIn) {
      this.quality = this.quality - days;
    } else {
      this.quality = this.quality - this.sellIn - (days - this.sellIn) * 2;
    }
    return this.quality;
  }

  getPrice() {
    if (this.quality < 0) {
      return 0;
    }
    if (this.quality > 50) {
      return 50;
    }
    return this.quality;
  }
}
