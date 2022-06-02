export interface ICustomNode<T> {
  value: T | null;
  next: ICustomNode<T> | null;
}

export default class CustomNode<T> implements ICustomNode<T> {
  value: T | null = null;
  next: ICustomNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}