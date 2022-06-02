type InputProps = Array<number>;
type ResponseProps = [number, number] | null;

export function sumZero(sortedArray: InputProps): ResponseProps {
    let i = 0;
    let j = sortedArray.length - 1;
    while (i < j) {
        let sum = sortedArray[i] + sortedArray[j];
        if (sum === 0) {
            return [sortedArray[i], sortedArray[j]];
        } else if (sum > 0) {
            j--;
        } else {
            i++
        }
    }
    return null;
}

export function countUniqueValues(array: InputProps): number {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
        if (array[i] !== array[j]) {
            i++;
            array[i] = array[j];
        }
    }
    return i + 1;
}