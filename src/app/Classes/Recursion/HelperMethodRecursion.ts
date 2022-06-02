export function collectOddValues(array: Array<number>): Array<number> {
    let result: Array<number> = [];

    function helper(input: Array<number>): undefined {
        if (input.length === 0) {
            return;
        }

        if (input[0] % 2 !== 0) {
            result.push(input[0]);
        }

        helper(input.slice(1));
    }

    helper(array);

    return result;
}