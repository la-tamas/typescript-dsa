import BinarySearchTree from "../../../app/Classes/BinarySearchTree/BinarySearchTree";
import BFS from "../../../app/Classes/BinarySearchTree/BFS";

describe('BFS test suite!', () => {
  it('Should return BFS order', () => {
    const tree = new BinarySearchTree<number>();
    tree.insert(10).insert(6).insert(15).insert(3).insert(8).insert(20).insert(1).insert(7).insert(16);

    expect(BFS(tree)).toEqual([10, 6, 15, 3, 8, 20, 1, 7, 16]);
  });
});
