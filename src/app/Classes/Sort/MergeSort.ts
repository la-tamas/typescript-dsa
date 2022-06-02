import { merge } from "../Utils/mergeArrays";

export function mergeSort<T>(array: Array<T>, callback: (a: T, b: T) => boolean): Array<T> {
  if (array.length <= 1) return array;
  let middle = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, middle), callback);
  let right = mergeSort(array.slice(middle), callback);
  return merge(left, right, callback);
}