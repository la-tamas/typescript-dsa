import { radixSort } from "../../../app/Classes/Sort/RadixSort";

describe('Quick sort test suite', () => {
  test('Should return sorted array', () => {
    const array = [4, 6, 3, 7, 10, 5, 1, 2, 8, 9, 0];

    expect(radixSort(array)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('Should return sorted array', () => {
    const array = [1, 2, 3, 4];

    expect(radixSort(array)).toEqual([1, 2, 3, 4]);
  });

  test('Should return sorted array', () => {
    const array = [23, 345, 5467, 12, 2345, 9852];

    expect(radixSort(array)).toEqual([12, 23, 345, 2345, 5467, 9852]);
  })
});
