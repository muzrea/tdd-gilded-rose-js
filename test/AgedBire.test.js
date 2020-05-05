import AgedBire from '../main/AgedBrie';

describe('AgedBrie', () => {
  it('should quality increase when time goes by when days more than sellIn', () => {
    const agedBire = new AgedBire(3, 12);
    expect(agedBire.getPrice(5)).toEqual(17);
  });
  it('should quality increase when time goes by when days less than sellIn', () => {
    const agedBire = new AgedBire(3, 12);
    expect(agedBire.getPrice(2)).toEqual(14);
  });
});
