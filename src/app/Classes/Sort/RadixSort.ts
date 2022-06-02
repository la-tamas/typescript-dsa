import { getDigit, mostDigits } from '../Utils/digits';

type TArrayType = Array<number>;

const EMPTY_ARRAY: TArrayType = [];

export function radixSort(nums: TArrayType): TArrayType {
  let maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets: Array<TArrayType> = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = EMPTY_ARRAY.concat(...digitBuckets);
  }
  return nums;
}







