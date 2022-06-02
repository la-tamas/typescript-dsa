import { newSwap } from "../Utils/swap";

export function bubbleSort<T>(array: Array<T>, callback: (a: T, b: T) => boolean): Array<T> {
  for (let i = array.length - 1; i > 0; i--) {
    let noSwap = true;
    for (let j = 0; j < i; j++) {
      if (callback(array[j], array[j + 1])) noSwap = newSwap(array, j, j + 1);
    }
    if (noSwap) break;
  }
  return array;
}