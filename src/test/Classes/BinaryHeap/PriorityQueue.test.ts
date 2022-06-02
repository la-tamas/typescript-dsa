import PriorityQueue from "../../../app/Classes/BinaryHeap/PriorityQueue";
import Node from '../../../app/Classes/BinaryHeap/Node';

describe('Priority Queue test suite', () => {
  it('Should add to priority queue', () => {
    const ER = new PriorityQueue<string>();
    ER.enqueue("common cold",5)
    ER.enqueue("gunshot wound", 1)
    ER.enqueue("high fever",4)
    ER.enqueue("broken arm",2)
    ER.enqueue("glass in foot",3)

    expect(ER.values.map(
      (item, index, array) => (index < (array.length - 2)) ? item.priority < array[index + 1].priority : true
    )).toEqual([true, true, true, true, true]);
  })

  it('Should remove from priority queue', () => {
    const ER = new PriorityQueue<string>();
    ER.enqueue("common cold",5)
    ER.enqueue("gunshot wound", 1)
    ER.enqueue("high fever",4)
    ER.enqueue("broken arm",2)
    ER.enqueue("glass in foot",3)

    expect(ER.values.map(
      (item, index, array) => (index < (array.length - 2)) ? item.priority < array[index + 1].priority : true
    )).toEqual([true, true, true, true, true]);

    let removed = ER.dequeue();
    expect(removed!.value).toEqual('gunshot wound');

    ER.dequeue();
    ER.dequeue();
    ER.dequeue();
    ER.dequeue();
    ER.dequeue();

    removed = ER.dequeue();
    expect(removed).toBe(undefined);
  })
})
