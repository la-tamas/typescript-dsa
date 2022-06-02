import { newSwap } from "../Utils/swap";

export function selectionSort<T>(array: Array<T>, callback: (a: T, b: T) => boolean): Array<T> {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (callback(array[min], array[j])) min = j;
    }
    if (min !== i) newSwap(array, min, i);
  }
  return array;
}