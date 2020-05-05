import Sulfuras from '../main/Sulfuras';

describe('Sulfuras', () => {
  it('should quality stay same when time goes by when days more than sellIn', () => {
    const sulfuras = new Sulfuras(3, 12);
    expect(sulfuras.getPriceByday(5)).toEqual(12);
  });
  it('should quality stay same when time goes by when days less than sellIn', () => {
    const sulfuras = new Sulfuras(3, 12);
    expect(sulfuras.getPriceByday(2)).toEqual(12);
  });
  it('should quality be 0 when increase more than 50 and the initial quality is 0', () => {
    const sulfuras = new Sulfuras(3, 0);
    sulfuras.getPriceByday(52);
    expect(sulfuras.getPrice()).toEqual(0);
  });
  it('should quality be 50 when increase more than 50 and the initial quality is 50', () => {
    const sulfuras = new Sulfuras(3, 50);
    sulfuras.getPriceByday(52);
    expect(sulfuras.getPrice()).toEqual(50);
  });
});
