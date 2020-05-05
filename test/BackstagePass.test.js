import BackstagePass from '../main/BackstagePass';

describe('BackstagePass', () => {
  it('should Quality be 0 when set Quality less than 0', () => {
    const agedBrie = new BackstagePass(13, -1);
    agedBrie.getPriceByday(10);
    expect(agedBrie.getPrice()).toEqual(0);
  });
  it('should Quality be 50 when set Quality more than 50', () => {
    const agedBrie = new BackstagePass(13, 60);
    agedBrie.getPriceByday(1);
    expect(agedBrie.getPrice()).toEqual(50);
  });
  it('should quality increase 2 point when days in 5 to 10', () => {
    const agedBrie = new BackstagePass(13, 30);
    agedBrie.getPriceByday(10);
    expect(agedBrie.getPrice()).toEqual(10);
  });
});
