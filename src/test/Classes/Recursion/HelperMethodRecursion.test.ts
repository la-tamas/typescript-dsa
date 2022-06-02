import { collectOddValues } from "../../../app/Classes/Recursion/HelperMethodRecursion";

describe("HelperMethodRecursion test suite", () => {
    test('Should return [1, 3, 5] for [1, 2, 3, 4, 5]', () => {
        expect(collectOddValues([1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
    });
});