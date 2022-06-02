import SinglyLinkedList from "../SinglyLinkedList/SinglyLinkedList";

interface IStackProps<T> {
  stack: SinglyLinkedList<T>;
  add: (value: T) => Stack<T>;
  remove: () => T | null;
}
/**
 * Respecting LIFO rule: 2 methods are needed
 */
export default class Stack<T> implements IStackProps<T> {
  stack: SinglyLinkedList<T> = new SinglyLinkedList<T>();

  constructor(stack: SinglyLinkedList<T> = new SinglyLinkedList<T>()) {
    this.stack = stack;
  }

  add(value: T): Stack<T> {
    this.stack = this.stack.unshift(value);
    return this;
  }

  remove(): T | null {
    const item = this.stack.shift();
    return item ? item.value : null;
  }
}