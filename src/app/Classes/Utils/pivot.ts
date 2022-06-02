import { newSwap } from './swap';

export function pivot<T>(
  array: Array<T>,
  callback: (a: T, b: T) => boolean,
  start: number = 0,
  end: number = array.length - 1
): number {
  let pivot = array[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (callback(pivot, array[i])) {
      swapIdx++;
      newSwap(array, swapIdx, i);
    }
  }

  newSwap(array, start, swapIdx);
  return swapIdx;
}
