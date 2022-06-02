import { binarySearch } from '../../../app/Classes/Search/BinarySearch';

describe('BinarySearch', () => {
    test('should find index on sorted array', () => {
        expect(binarySearch([-15, -1, 1, 3, 4, 5, 12, 12, 14, 15, 20], 15)).toBe(9);
    });

    test('should not find index on unsorted array', () => {
        expect(binarySearch([2, 1, 4, 5, 3], 3)).toBe(-1);
    });

    test('should not find index on empty array', () => {
        expect(binarySearch([], 1)).toBe(-1);
    });
});
