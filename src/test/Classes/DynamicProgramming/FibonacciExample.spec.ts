import { fibMemo, fibTab } from "../../../app/Classes/DynamicProgramming/FibonacciExample";

describe("FibonacciExample test suite", () => {
  it("should calculate fibonacci of n", () => {
    expect(fibMemo(0)).toBe(0);
    expect(fibMemo(1)).toBe(1);
    expect(fibMemo(2)).toBe(1);
    expect(fibMemo(3)).toBe(2);
    expect(fibMemo(4)).toBe(3);
  })

  it("should calculate fibonacci of n", () => {
    expect(fibTab(0)).toBe(0);
    expect(fibTab(1)).toBe(1);
    expect(fibTab(2)).toBe(1);
    expect(fibTab(3)).toBe(2);
    expect(fibTab(4)).toBe(3);
  })
})