import { merge } from "../../../app/Classes/Utils/mergeArrays";

const callback = (a: number, b: number) => a > b;

describe('Merge Arrays test suite', () => {
  test('Merge two arrays', () => {
    expect(merge([9, 100, 200, 300], [1, 2, 3, 5, 6, 8, 400], callback)).toEqual([1, 2, 3, 5, 6, 8, 9, 100, 200, 300, 400]);
  });

  test('Merge two arrays', () => {
    expect(merge([1, 2, 3, 5, 6, 8, 400], [9, 100, 200, 300], callback)).toEqual([1, 2, 3, 5, 6, 8, 9, 100, 200, 300, 400]);
  });
});