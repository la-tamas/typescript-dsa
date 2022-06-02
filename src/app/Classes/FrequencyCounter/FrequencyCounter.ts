interface ControlObjectProps {
    [key: number | string]: number;
}

type InputProps = 
    | Array<number>
    | string;

/**
 * CASE of numeric arrays
 * Check if the first array contains each value squared in the second array with the same frequency
 * CASE of strings
 * Check if two strings are anagrams
 * O(n)
 * @param baseArray 
 * @param expArray 
 * @returns Boolean
 */
export function sameArrays(baseArray: InputProps, expArray: InputProps): boolean {
    if (baseArray.length !== expArray.length) return false;
    if (baseArray.length === expArray.length && baseArray.length === 0) return true;

    const baseFrequency: ControlObjectProps = {};
    for (const base of baseArray) {
        baseFrequency[base] = ++baseFrequency[base] || 1;
    }

    const expFrequency: ControlObjectProps = {};
    for (const exp of expArray) {
        expFrequency[exp] = ++expFrequency[exp] || 1;
    }

    for (const [key, value] of Object.entries(baseFrequency)) {
        const reference = Number(key);
        const controlKey = Number.isNaN(reference) ? key : Math.pow(Number(key), 2);
        if (!expFrequency[controlKey] || expFrequency[controlKey] !== value) return false;
    }
    return true;
}