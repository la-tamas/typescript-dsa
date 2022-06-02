import { pivot } from '../../../app/Classes/Utils/pivot';

const callback = (a: number, b: number) => a > b;

describe('pivot test suite', () => {
  test('Should return ', () => {
    expect(pivot([4,8,2,1,5,7,6,3], callback)).toBe(3);
  });
});