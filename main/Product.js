export default class Product {
  constructor(sellIn, quality) {
    this.sellIn = sellIn;
    this.quality = quality;
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
