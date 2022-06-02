import { sumZero, countUniqueValues } from "../../../app/Classes/FrequencyCounter/MultiPointers";

describe('Multi pointers test suite', () => {
    test('Multi pointers with available solution', () => {
        expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toEqual([-3, 3]);
    });

    test('Multi pointers with not available solution', () => {
        expect(sumZero([2, 3, 4])).toBe(null);
    });

    test('Multi pointers with not symetric arrays', () => {
        expect(sumZero([-3, -2, 0, 2, 4, 5])).toEqual([-2, 2]);
    });

    test('Multi pointers with not symetric arrays', () => {
        expect(sumZero([-3, -2, -1, 0, 1, 4])).toEqual([-1, 1]);
    });

    test('CountUniqueValues', () => {
        expect(countUniqueValues([1, 2, 2, 3, 3, 3, 4, 5, 6, 6, 6, 7, 7])).toBe(7);
    });
});