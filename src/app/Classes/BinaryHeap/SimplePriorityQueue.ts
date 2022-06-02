export type QueueProps<T> = {
  value: T;
  priority: number
}

export default class PriorityQueue<T> {
  values: QueueProps<T>[] = [];

  constructor() {
    this.values = [];
  }

  enqueue(value: T, priority: number): void {
    this.values.push({ value, priority });
    this.sort();
  }

  dequeue(): QueueProps<T> | undefined {
    return this.values.shift();
  }

  sort(): void {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}