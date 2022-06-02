import BSTNode from "./BSTNode";

interface IBinarySearchTreeProps<T> {
  root: BSTNode<T> | null;
  insert: (value: T) => BinarySearchTree<T>;
  find: (value: T) => T | null;
}

export default class BinarySearchTree<T> implements IBinarySearchTreeProps<T> {
  root: BSTNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(value: T) {
    const newNode = new BSTNode<T>(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return this;
      if (current && value < current.value!) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current!.left;
      } 
      if (value > current.value!) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current!.right;
      }
    }
  }

  find(value: T) {
    if (this.root === null) return null;
    let current: BSTNode<T> | null = this.root;
    while (current) {
      if (value < current.value!) {
        current = current.left;
      } else if (value > current.value!) {
        current = current.right;
      } else {
        return current.value;
      }
    }
    return null;
  }
}
