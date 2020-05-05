import AgedBrie from '../main/AgedBrie';

describe('AgedBrie', () => {
  it('should quality increase when time goes by when days more than sellIn', () => {
    const agedBrie = new AgedBrie(3, 12);
    expect(agedBrie.getPriceByday(5)).toEqual(17);
    expect(agedBrie.getPrice()).toEqual(17);
  });
  it('should quality increase when time goes by when days less than sellIn', () => {
    const agedBrie = new AgedBrie(3, 12);
    expect(agedBrie.getPriceByday(2)).toEqual(14);
    expect(agedBrie.getPrice()).toEqual(14);
  });
  it('should quality be 50 when increase more than 50', () => {
    const agedBrie = new AgedBrie(3, 40);
    agedBrie.getPriceByday(13);
    expect(agedBrie.getPrice()).toEqual(50);
  });
});
