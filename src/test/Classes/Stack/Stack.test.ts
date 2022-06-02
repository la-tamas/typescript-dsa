import Stack from "../../../app/Classes/Stack/Stack";

describe('Stack test suite', () => {
  test('Should work as stack!', () => {
    const stack = new Stack();

    stack.add(1).add(2).add(3);
  
    expect(stack.remove()).toBe(3);
    expect(stack.remove()).toBe(2);
    expect(stack.remove()).toBe(1);
    expect(stack.remove()).toBe(null);
  });
});