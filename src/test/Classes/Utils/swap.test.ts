import { swap, newSwap } from "../../../app/Classes/Utils/swap";

describe('Swap functions test suite', () => {
  const array = [1, 2, 3, 4];
  test('Swap two values', () => {
    swap(array, 1, 2);
    expect(array).toEqual([1, 3, 2, 4]);
  });

  test('Swap two values', () => {
    const array = [1, 2, 3, 4];
    newSwap(array, 0, 1);
    expect(array).toEqual([2, 1, 3, 4]);
  });
});