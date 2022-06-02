import BinarySearchTree from "../../../app/Classes/BinarySearchTree/BinarySearchTree";
import DFS from "../../../app/Classes/BinarySearchTree/DFS";

describe("DFS test suite", () => {
  it('Should return correct DFS pre order', () => {
    const tree = new BinarySearchTree<number>();
    tree.insert(10).insert(6).insert(15).insert(3).insert(8).insert(20)

    expect(DFS(tree, 'pre')).toEqual([10, 6, 3, 8, 15, 20]);
  });

  it('Should return correct DFS post order', () => {
    const tree = new BinarySearchTree<number>();
    tree.insert(10).insert(6).insert(15).insert(3).insert(8).insert(20)

    expect(DFS(tree, 'post')).toEqual([3, 8, 6, 20, 15, 10]);
  });

  it('Should return correct DFS in order', () => {
    const tree = new BinarySearchTree<number>();
    tree.insert(10).insert(6).insert(15).insert(3).insert(8).insert(20)

    expect(DFS(tree, 'in')).toEqual([3, 6, 8, 10, 15, 20]);
  });
});
