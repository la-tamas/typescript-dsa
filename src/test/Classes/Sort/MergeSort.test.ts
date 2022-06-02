import { mergeSort } from "../../../app/Classes/Sort/MergeSort";

const callback = (a: number, b: number) => a > b;

describe('Merge Sort test suite', () => {
  test('Should return sorted array', () => {
    const array = [4, 6, 3, 7, 10, 5, 1, 2, 8, 9, 0];

    expect(mergeSort(array, callback)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('Should return sorted array', () => {
    const array = [1, 2, 3, 4];

    expect(mergeSort(array, callback)).toEqual([1, 2, 3, 4]);
  });

  test('Should return sorted array', () => {
    type TTest = { id: number }
    const array: TTest[] = [{
      id: 1
    }, {
      id: 4,
    }, {
      id: 9,
    }, {
      id: 8
    }, {
      id: 5
    }];


    const expectedResult: TTest[] = [{
      id: 1,
    }, {
      id: 4,
    }, {
      id: 5,
    }, {
      id: 8,
    }, {
      id: 9
    }];

    const newCallback = (a: TTest, b: TTest) => a.id > b.id;

    expect(mergeSort(array, newCallback)).toEqual(expectedResult);
  });
})