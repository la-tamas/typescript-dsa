import { addTwoNumbers } from '../../../app/Classes/Basic/Addition';

describe('Addition test suite', () => {
    test('Valid numeric inputs', () => {
        expect(addTwoNumbers(1, 1)).toBe(2);
    });
});
