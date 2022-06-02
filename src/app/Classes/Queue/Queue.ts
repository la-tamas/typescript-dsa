import SinglyLinkedList from "../SinglyLinkedList/SinglyLinkedList";

interface IQueueProps<T> {
  queue: SinglyLinkedList<T>;
  add: (value: T) => Queue<T>;
  remove: () => T | null;
}

export default class Queue<T> implements IQueueProps<T> {
  queue: SinglyLinkedList<T> = new SinglyLinkedList<T>();

  constructor(queue: SinglyLinkedList<T> = new SinglyLinkedList<T>()) {
    this.queue = queue;
  }

  add(value: T): Queue<T> {
    this.queue.push(value);
    return this;
  }

  remove(): T | null {
    const item = this.queue.shift();
    return item ? item.value : null;
  }
}