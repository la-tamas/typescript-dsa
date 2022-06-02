export function reverse(str: string): string {
  if (str.length === 0) return '';
  return reverse(str.substring(1)) + str[0]
}

export function isPalindrome(str: string): boolean {
  const len = str.length;
  if (len === 0 || len === 1) return true;
  return str[0] === str[len - 1] && isPalindrome(str.substring(1, len - 1));
}

export function someRecursive(array: Array<any>, callback: Function): boolean {
  if (array.length === 0) return false;
  return callback(array[0]) || someRecursive(array.slice(1), callback);
}

export function flatten(array: Array<any>): Array<number> {
  if (typeof array === 'number') return [array];
  if (array.length === 0) return [];
  return [...flatten(array[0]), ...flatten(array.slice(1))];
}

export function capitalizeFirst(stringArray: Array<string>): Array<string> {
  if (stringArray.length === 0) return [];
  const upperCaseItem = stringArray[0].charAt(0).toUpperCase() + stringArray[0].substring(1);
  return [upperCaseItem, ...capitalizeFirst(stringArray.slice(1))];
}

export function nestedEvenSum(obj: object): number {
  if (!obj) return 0;
  let sum = 0;
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'number' && value % 2 === 0) {
      sum += value
    }
    if (typeof value === 'object') {
      sum += nestedEvenSum(value);
    }
  }
  return sum;
}

export function capitalizeWords(array: Array<string>): Array<string> {
  if (array.length === 0) return [];
  return [array[0].toUpperCase(), ...capitalizeWords(array.slice(1))]
}

