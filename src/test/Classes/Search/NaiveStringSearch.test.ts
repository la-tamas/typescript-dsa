import { naiveStringSearch } from "../../../app/Classes/Search/NaiveStringSearch";

describe('Naive String Search test suite', () => {
  test('Should return correct count of results', () => {
    expect(naiveStringSearch('lorie loled', 'lol')).toBe(1);
  });

  test('Should return correct count of results', () => {
    expect(naiveStringSearch('Taste the apple at the big apple', 'apple')).toBe(2);
  });

  test('Should return correct count of results', () => {
    expect(naiveStringSearch('Something', 'stmt')).toBe(0);
  });
});
