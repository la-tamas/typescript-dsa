export function merge<T>(array1: Array<T>, array2: Array<T>, callback: (a: T, b: T) => boolean): Array<T> {
  let results = [];
  let i = 0;
  let j = 0;
  while(i < array1.length && j < array2.length){
    if(callback(array2[j], array1[i])){
      results.push(array1[i]);
      i++;
    } else {
      results.push(array2[j])
      j++;
    }
  }
  while(i < array1.length) {
    results.push(array1[i])
    i++;
  }
  while(j < array2.length) {
    results.push(array2[j])
    j++;
  }
  return results;
}