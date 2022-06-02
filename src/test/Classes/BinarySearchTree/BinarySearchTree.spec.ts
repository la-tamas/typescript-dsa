import BinarySearchTree from "../../../app/Classes/BinarySearchTree/BinarySearchTree";

describe('Binary Search Tree test suite', () => {
  test('Should behave as expected', () => {
    const tree = new BinarySearchTree<number>();

    expect(tree.find(40)).toBe(null);

    tree.insert(10).insert(4).insert(1).insert(6).insert(34).insert(3).insert(11).insert(20).insert(6);

    expect(tree.find(10)).toBe(10);
    expect(tree.find(34)).toBe(34);
    expect(tree.find(3)).toBe(3);
    expect(tree.find(100)).toBe(null);
  });
});