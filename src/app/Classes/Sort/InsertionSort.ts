export function insertionSort<T>(array: Array<T>, callback: (a: T, b: T) => boolean): Array<T> {
  for (let i = 1; i < array.length; i++) {
    let currentValue = array[i];
    let j = 0;
    for (j = i - 1; j >= 0 && callback(array[j], currentValue); j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentValue;
  }
  return array;
}
