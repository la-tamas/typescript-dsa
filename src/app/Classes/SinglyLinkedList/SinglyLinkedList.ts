import CustomNode, { ICustomNode } from '../Utils/CustomNode';

export interface ISinglyLinkedList<T> {
  head: ICustomNode<T> | null;
  tail: ICustomNode<T> | null;
  length: number;
  push: (value: T) => ISinglyLinkedList<T>;
  pop: () => ICustomNode<T> | null;
  shift: () => ICustomNode<T> | null;
  unshift: (value: T) => ISinglyLinkedList<T>;
  get: (index: number) => ICustomNode<T> | null;
  set: (index: number, value: T) => boolean;
  insert: (index: number, value: T) => ISinglyLinkedList<T>;
  remove: (index: number) => ICustomNode<T> | null;
  reverse: () => ISinglyLinkedList<T>;
  toArray: () => Array<T | null>
}

export default class SinglyLinkedList<T> implements ISinglyLinkedList<T> {
  head: ICustomNode<T> | null = null;
  tail: ICustomNode<T> | null = null;
  length: number = 0;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: T): ISinglyLinkedList<T> {
    const newNode = new CustomNode<T>(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(): ICustomNode<T> | null {
    if (!this.head) return null;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift(): ICustomNode<T> | null {
    if (!this.head) return null;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(value: T): ISinglyLinkedList<T> {
    let newNode = new CustomNode<T>(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index: number): ICustomNode<T> | null {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (index !== counter) {
      current = current!.next;
      counter++;
    }
    return current;
  }

  set(index: number, value: T): boolean {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  insert(index: number, value: T): ISinglyLinkedList<T> {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return this;
    let prev = this.get(index - 1);
    let newNode = new CustomNode<T>(value);
    let tmp = prev!.next;
    prev!.next = newNode;
    newNode.next = tmp;
    return this;
  }

  remove(index: number): ICustomNode<T> | null {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return null;
    let prev = this.get(index - 1);
    let removed = prev!.next;
    prev!.next = removed!.next;
    return removed;
  }

  reverse(): ISinglyLinkedList<T> {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next = null;
    for (let i = 0; i < this.length; i++) {
      next = node!.next;
      node!.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  toArray(): Array<T | null> {
    let array = [];
    let current = this.head;
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  }
}