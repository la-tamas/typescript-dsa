export function swap(array: Array<any>, index1: number, index2: number): boolean {
  let tmp = array[index1];
  array[index1] = array[index2];
  array[index2] = tmp;
  return false;
}

export function newSwap(array: Array<any>, index1: number, index2: number): boolean {
  [array[index1], array[index2]] = [array[index2], array[index1]];
  return false;
}