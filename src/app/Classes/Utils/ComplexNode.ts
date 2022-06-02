export interface IComplexNode<T> {
  value: T | null;
  next: IComplexNode<T> | null;
  prev: IComplexNode<T> | null;
}

export default class ComplexNode<T> implements IComplexNode<T> {
  value: T | null = null;
  next: IComplexNode<T> | null = null;
  prev: IComplexNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}