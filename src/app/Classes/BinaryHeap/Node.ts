export default class Node<T> {
  value: T | null = null;
  priority: number = 0;

  constructor(value: T, priority: number){
      this.value = value;
      this.priority = priority;
  }
}