import MaxBinaryHeap from '../../../app/Classes/BinaryHeap/BinaryHeap';

describe('Binary Heap test suite!', () => {
  it('Should add to heap', () => {
    let heap = new MaxBinaryHeap<number>();
    heap.insert(41).insert(39).insert(33).insert(18).insert(27).insert(12).insert(55);

    expect(heap.values).toEqual([55, 39, 41, 18, 27, 12, 33]);
  });

  it('Should remove from heap', () => {
    let heap = new MaxBinaryHeap<number>();
    heap.insert(41).insert(39).insert(33).insert(18).insert(27).insert(12).insert(55);

    expect(heap.values).toEqual([55, 39, 41, 18, 27, 12, 33]);

    let remove = heap.remove();
    expect(remove).toBe(55);

    heap.remove();
    heap.remove();
    heap.remove();
    heap.remove();
    heap.remove();
    heap.remove();

    remove = heap.remove();
    expect(remove).toBe(undefined);
  });
});