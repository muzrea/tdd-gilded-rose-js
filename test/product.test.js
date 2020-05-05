import Product from '../main/Product';

describe('Product', () => {
  it('Product class should have SellIn and Quality properties', () => {
    const product = new Product(3, 12);
    expect(product.sellIn).toEqual(3);
    expect(product.quality).toEqual(12);
  });
  it('should Quality be 0 when set Quality less than 0', () => {
    const product = new Product(3, -1);
    expect(product.getPrice()).toEqual(0);
  });
  it('should Quality be 50 when set Quality more than 50', () => {
    const product = new Product(3, 51);
    expect(product.getPrice()).toEqual(50);
  });
});
