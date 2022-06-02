export function binarySearch(array: Array<number>, target: number): number {
    if (array.length === 0) return -1;

    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);

        if (array[middle] < target) {
            min = middle + 1;
        } else if (array[middle] > target) {
            max = middle - 1;
        } else {
            return middle;
        }
    }

    return -1;
}