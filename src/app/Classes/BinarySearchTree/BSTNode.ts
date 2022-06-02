export interface IBSTNodeProps<T> {
  value: T,
  left: BSTNode<T>,
  right: BSTNode<T>
}

export default class BSTNode<T> {
  value: T | null = null;
  left: BSTNode<T> | null = null;
  right: BSTNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
