export function fibMemo(n: number, memo: Array<number> = [0, 1, 1]): number {
  if (memo[n] !== undefined) return memo[n];
  let res = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  memo[n] = res;
  return res;
}

export function fibTab(n: number): number {
  if (n === 0) return 0;
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}