import { collectPureOddValues, power, fibonacci, someRecursive } from "../../../app/Classes/Recursion/PureRecursion";

describe('Pure Recursion test suite', () => {
    test('Should return [1, 3, 5] for [1, 2, 3, 4, 5]', () => {
        expect(collectPureOddValues([1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
    });

    test('Power should return 1 for 2^0', () => {
        expect(power(2, 0)).toBe(1);
    });

    test('Power should return 4 for 2^2', () => {
        expect(power(2, 2)).toBe(4);
    });

    test('Power should return -27 for -3^3', () => {
        expect(power(-3, 3)).toBe(-27);
    });

    test('Fibonacci should return 55 for 10', () => {
        expect(fibonacci(10)).toBe(55);
    });

    test('Should return false for empty array', () => {
      expect(someRecursive([], () => {})).toBe(false);
    });

    test('Should return true', () => {
      expect(someRecursive([1, 2, 3, 4], (arg: number) => {
        return arg % 2 === 0;
      })).toBe(true);
    });
});