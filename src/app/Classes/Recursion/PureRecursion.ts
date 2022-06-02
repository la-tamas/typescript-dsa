export function collectPureOddValues(array: Array<number>): Array<number> {
  let result: Array<number> = [];

  if (array.length === 0) {
    return result;
  }

  if (array[0] % 2 !== 0) {
    result.push(array[0]);
  }

  return [...result, ...collectPureOddValues(array.slice(1))];
}

export function power(base: number, exponent: number): number {
  if (exponent === 0) return 1;
  if (exponent === 1) return base;
  return base * power(base, exponent - 1);
}

export function fibonacci(n: number): number {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export function someRecursive(array: Array<number>, callback: Function): boolean {
  if (array.length === 0) return false;
  return callback(array[0]) || someRecursive(array.splice(1), callback);
}