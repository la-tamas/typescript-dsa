import BinarySearchTree from './BinarySearchTree';
import BSTNode from './BSTNode';

export type DFSOptionsTypes = 'in' | 'post' | 'pre';

const DFSMap = {
  'in': InOrder,
  'post': PostOrder,
  'pre': PreOrder
}

export default function DFS<T>(tree: BinarySearchTree<T>, type: DFSOptionsTypes = 'in'): T[] {
  return DFSMap[type](tree);
}

function PreOrder<T>(tree: BinarySearchTree<T>): T[] {
  let data: T[] = [];
  function traverse(node: BSTNode<T> | null) {
    data.push(node!.value!);
    if (node!.left) traverse(node!.left);
    if (node!.right) traverse(node!.right);
  }
  traverse(tree.root);
  return data;
}

function PostOrder<T>(tree: BinarySearchTree<T>): T[] {
  let data: T[] = [];
  function traverse(node: BSTNode<T> | null) {
    if (node!.left) traverse(node!.left);
    if (node!.right) traverse(node!.right);
    data.push(node!.value!);
  }
  traverse(tree.root);
  return data;
}

function InOrder<T>(tree: BinarySearchTree<T>): T[] {
  let data: T[] = [];
  function traverse(node: BSTNode<T> | null) {
    if (node!.left) traverse(node!.left);
    data.push(node!.value!);
    if (node!.right) traverse(node!.right);
  }
  traverse(tree.root);
  return data;
}