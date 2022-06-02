import BinarySearchTree from './BinarySearchTree';
import BSTNode from './BSTNode';

export default function BFS<T>(tree: BinarySearchTree<T>): T[] {
  let data: T[] = [];
  let queue = [];
  let node: BSTNode<T> | null | undefined = tree.root;
  queue.push(tree.root);
  while(queue.length) {
    node = queue.shift();
    data.push(node!.value!);
    if (node?.left) queue.push(node.left);
    if (node?.right) queue.push(node.right);
  }
  return data
}