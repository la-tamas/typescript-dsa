export interface IStackNodeProps<T> {
  value: T;
  next: StackNode<T> | null;
}

export default class StackNode<T> implements IStackNodeProps<T> {
  value: T;
  next: StackNode<T> | null;

  constructor(value: T){
      this.value = value;
      this.next = null;
  }
}