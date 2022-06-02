import { maxSubArraySum } from "../../../app/Classes/FrequencyCounter/SlidingWindow";

describe('SlidingWindow', () => {
    test('Valid input', () => {
        expect(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)).toBe(19);
    });

    test('Invalid input', () => {
        expect(maxSubArraySum([], 3)).toBe(null);
    });

    test('Invalid input', () => {
        expect(maxSubArraySum([], 0)).toBe(null);
    });
});