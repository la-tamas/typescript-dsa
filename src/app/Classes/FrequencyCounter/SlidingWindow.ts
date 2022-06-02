export function maxSubArraySum(array: Array<number>, neighbors: number): number | null {
    if (neighbors > array.length) return null;
    if (array.length === 0) return null;

    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < neighbors; i++) {
        maxSum += array[i];
    }
    tempSum += maxSum;
    for (let i = neighbors; i < array.length; i++) {
        tempSum = tempSum - array[i - neighbors] + array[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}