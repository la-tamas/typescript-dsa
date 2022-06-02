import QueueNode from './QueueItem';

interface IQueueProps<T> {
  first: QueueNode<T> | null;
  last: QueueNode<T> | null;
  size: number;
  add: (value: T) => Queue<T>;
  remove: () => T | null;
}

export default class Queue<T> implements IQueueProps<T> {
  first: QueueNode<T> | null = null;
  last: QueueNode<T> | null = null;
  size: number = 0;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  add(value: T): Queue<T> {
    var newNode = new QueueNode<T>(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }

  remove(): T | null {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}