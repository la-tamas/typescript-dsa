export interface IQueueNodeProps<T> {
  value: T;
  next: QueueNode<T> | null;
}

export default class QueueNode<T> implements IQueueNodeProps<T> {
  value: T;
  next: QueueNode<T> | null;

  constructor(value: T){
      this.value = value;
      this.next = null;
  }
}