import Queue from "../../../app/Classes/Queue/OptimizedQueue";

describe('queue test suite', () => {
  test('Should work as queue!', () => {
    const queue = new Queue();

    queue.add(1).add(2).add(3);
  
    expect(queue.remove()).toBe(1);
    expect(queue.remove()).toBe(2);
    expect(queue.remove()).toBe(3);
    expect(queue.remove()).toBe(null);
  });
});