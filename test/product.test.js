import Product from '../main/Product';

describe('Product', () => {
  it('Product class should have SellIn and Quality properties', () => {
    const product = new Product(3, 12);
    expect(product.SellIn).toEqual(3);
    expect(product.Quality).toEqual(12);
  });
});
