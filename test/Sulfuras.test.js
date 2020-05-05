import Sulfuras from '../main/Sulfuras';

describe('Sulfuras', () => {
  it('should quality increase when time goes by when days more than sellIn', () => {
    const agedBrie = new Sulfuras(3, 12);
    expect(agedBrie.getPrice(5)).toEqual(12);
  });
  it('should quality increase when time goes by when days less than sellIn', () => {
    const agedBrie = new Sulfuras(3, 12);
    expect(agedBrie.getPrice(2)).toEqual(12);
  });
});
