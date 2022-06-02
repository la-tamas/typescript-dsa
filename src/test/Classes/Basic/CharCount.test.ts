import { charCount1, charCount2, isAlphaNumeric } from "../../../app/Classes/Basic/CharCount";

describe('CharCount test suite', () => {

    const case1 = 'Hello';
    const case2 = 'Hello there User111!';

    test('CharCount1: Input an alphanumeric string', () => {
        expect(charCount1(case1)).toEqual({
            h: 1,
            e: 1,
            l: 2,
            o: 1,
        });
    });

    test('CharCount1: Input a non alphanumeric string', () => {
        expect(charCount1(case2)).toEqual({
            h: 2,
            e: 4,
            l: 2,
            o: 1,
            t: 1,
            r: 2,
            u: 1,
            s: 1,
            1: 3,
        });
    });

    test('CharCount2: Input an alphanumeric string', () => {
        expect(charCount2(case1)).toEqual({
            h: 1,
            e: 1,
            l: 2,
            o: 1,
        });
    });

    test('CharCount2: Input a non alphanumeric string', () => {
        expect(charCount2(case2)).toEqual({
            h: 2,
            e: 4,
            l: 2,
            o: 1,
            t: 1,
            r: 2,
            u: 1,
            s: 1,
            1: 3,
        });
    });

    test('isAlphaNumeric: Input a non alphanumeric string', () => {
        expect(isAlphaNumeric('!')).toBe(false);
    });

    test('isAlphaNumeric: Input an alphanumeric string', () => {
        expect(isAlphaNumeric('a')).toBe(true);
    });
});