import { sameArrays } from "../../../app/Classes/FrequencyCounter/FrequencyCounter";

describe('FrequencyCounter test suite', () => {
    test('Should return true for: [1, 2, 3], [4, 1, 9]', () => {
        expect(sameArrays([1, 2, 3], [4, 1, 9])).toBe(true);
    });

    test('Should return false for: [1, 2, 3], [1, 9]', () => {
        expect(sameArrays([1, 2, 3], [1, 9])).toBe(false);
    });

    test('Should return false for: [1, 2, 1], [4, 4, 1]', () => {
        expect(sameArrays([1, 2, 1], [4, 4, 1])).toBe(false);
    });

    test('Should return true for: [1, 2, 3, 5, 2], [9, 1, 4, 4, 25]', () => {
        expect(sameArrays([1, 2, 3, 5, 2], [9, 1, 4, 4, 25])).toBe(true);
    });

    test('Should return true for: cinema, iceman', () => {
        expect(sameArrays('cinema', 'iceman')).toBe(true);
    });

    test('Should return false for: apple, mappl', () => {
        expect(sameArrays('apple', 'mappl')).toBe(false);
    });

    test('Should return true for: [], []', () => {
        expect(sameArrays([], [])).toBe(true);
    });

    test('Should return true for: "", ""', () => {
        expect(sameArrays('', '')).toBe(true);
    });
});