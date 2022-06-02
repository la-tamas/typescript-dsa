import ComplexNode, { IComplexNode } from "../Utils/ComplexNode";

export interface IDoublyLinkedList<T> {
  head: IComplexNode<T> | null;
  tail: IComplexNode<T> | null;
  length: number;
  push: (value: T) => IDoublyLinkedList<T>;
  pop: () => IComplexNode<T> | null;
  shift: () => IComplexNode<T> | null;
  unshift: (value: T) => IDoublyLinkedList<T>;
  get: (index: number) => IComplexNode<T> | null;
  set: (index: number, value: T) => boolean;
  insert: (index: number, value: T) => boolean;
  remove: (index: number) => IComplexNode<T> | null;
  toArray: () => Array<T | null>;
}

export default class DoublyLinkedList<T> implements IDoublyLinkedList<T> {
  head: IComplexNode<T> | null = null;
  tail: IComplexNode<T> | null = null;
  length: number = 0;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: T): IDoublyLinkedList<T> {
    const newNode = new ComplexNode<T>(value);
    if (this.length === 0) {
      this.head = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop(): IComplexNode<T> | null {
    if (this.length === 0) return null;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode!.prev;
      this.tail!.next = null;
      poppedNode!.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift(): IComplexNode<T> | null {
    if (this.length === 0) return null;
    const shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode!.next;
      this.head!.prev = null;
    }
    shiftedNode!.next = null;
    this.length--;
    return shiftedNode;
  }

  unshift(value: T): IDoublyLinkedList<T> {
    const newNode = new ComplexNode<T>(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head!.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index: number): IComplexNode<T> | null {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let current = this.head;
    if (index <= this.length / 2) {
      while(count !== index) {
        current = current!.next;
        count++;
      }
      return current;
    } else {
      count = this.length - 1;
      current = this.tail;
      while(count !== index) {
        current = current!.prev;
        count--;
      }
    }
    return current;
  }

  set(index: number, value: T): boolean {
    const foundNode = this.get(index);
    if (!foundNode) return false;
    foundNode.value = value;
    return true;
  }

  insert(index: number, value: T): boolean {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);
    const beforeNode = this.get(index - 1);
    const newNode = new ComplexNode<T>(value);
    const afterNode = beforeNode!.next;
    beforeNode!.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode!.prev = newNode;
    this.length++;
    return true;
  }

  remove(index: number): IComplexNode<T> | null {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const removedNode = this.get(index);
    removedNode!.prev!.next = removedNode!.next;
    removedNode!.next!.prev = removedNode!.prev;
    removedNode!.next = null;
    removedNode!.prev = null;
    this.length--;
    return removedNode;
  }

  toArray(): Array<T | null> {
    let array = [];
    let current = this.head;
    while(current) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  }
}