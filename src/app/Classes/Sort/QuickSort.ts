import { pivot } from '../Utils/pivot';

export function quickSort<T>(
  array: Array<T>,
  callback: (a: T, b: T) => boolean,
  left: number = 0,
  right: number = array.length - 1
): Array<T> {
  if (left < right) {
    let pivotIndex = pivot(array, callback, left, right);
    quickSort(array, callback, left, pivotIndex - 1);
    quickSort(array, callback, pivotIndex + 1, right);
  }
  return array;
}
