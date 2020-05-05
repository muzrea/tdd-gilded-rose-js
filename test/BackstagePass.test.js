import BackstagePass from '../main/BackstagePass';

describe('BackstagePass', () => {
  it('should Quality be 0 when set Quality less than 0', () => {
    const backstagePass = new BackstagePass(13, -1);
    backstagePass.getPriceByday(10);
    expect(backstagePass.getPrice()).toEqual(0);
  });
  it('should Quality be 50 when set Quality more than 50', () => {
    const backstagePass = new BackstagePass(13, 60);
    backstagePass.getPriceByday(1);
    expect(backstagePass.getPrice()).toEqual(50);
  });
  it('should quality increase 2 point when days in 5 to 10', () => {
    const backstagePass = new BackstagePass(13, 10);
    backstagePass.getPriceByday(4);
    expect(backstagePass.getPrice()).toEqual(12);
  });
  it('should quality increase 3 point when days in 0 to 5', () => {
    const backstagePass = new BackstagePass(13, 10);
    backstagePass.getPriceByday(12);
    expect(backstagePass.getPrice()).toEqual(32);
  });
});
