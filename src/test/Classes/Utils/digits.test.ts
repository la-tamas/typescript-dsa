import { mostDigits, getDigit } from '../../../app/Classes/Utils/digits';

describe('Digits test suite', () => {
  test('Should return the length of the longest number', () => {
    expect(mostDigits([0, 23, 567, 89, 12234324, 90])).toBe(8);
  });

  test('Should return digit at given position', () => {
    expect(getDigit(1234567, 6)).toBe(1);
  })
});
