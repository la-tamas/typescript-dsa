import StackNode from "./StackItem";

interface IStackProps<T> {
  first: StackNode<T> | null;
  last: StackNode<T> | null;
  size: number;
  add: (value: T) => Stack<T>;
  remove: () => T | null;
}

export default class Stack<T> implements IStackProps<T> {
  first: StackNode<T> | null;
  last: StackNode<T> | null;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  add(value: T): Stack<T> {
    var newNode = new StackNode<T>(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
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