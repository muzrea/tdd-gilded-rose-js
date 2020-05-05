import AgedBrie from '../main/AgedBrie';

describe('AgedBrie', () => {
  it('should quality increase when time goes by when days more than sellIn', () => {
    const agedBrie = new AgedBrie(3, 12);
    expect(agedBrie.getPrice(5)).toEqual(17);
  });
  it('should quality increase when time goes by when days less than sellIn', () => {
    const agedBrie = new AgedBrie(3, 12);
    expect(agedBrie.getPrice(2)).toEqual(14);
  });
});
