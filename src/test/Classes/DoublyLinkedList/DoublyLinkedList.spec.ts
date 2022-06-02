import DoublyLinkedList from "../../../app/Classes/DoublyLinkedList/DoublyLinkedList";

describe('Singly Linked List test suite', () => {
  test('Push method', () => {
    let sll = new DoublyLinkedList();
    expect(sll.head).toBe(null);
    expect(sll.tail).toBe(null);
    expect(sll.length).toBe(0);

    sll.push(1);

    expect(sll.head?.value).toBe(1);
    expect(sll.head?.next).toBe(null);
    expect(sll.tail?.value).toBe(1);
    expect(sll.tail?.next).toBe(null);
    expect(sll.length).toBe(1);

    sll.push(2);

    expect(sll.head?.value).toBe(1);
    expect(sll.head?.next).toBe(sll.tail);
    expect(sll.tail?.value).toBe(2);
    expect(sll.tail?.next).toBe(null);
    expect(sll.length).toBe(2);
  });

  test('Pop method', () => {
    let sll = new DoublyLinkedList();
    sll.push(1);
    sll.push(2);
    sll.push(3);

    expect(sll.head?.value).toBe(1);
    expect(sll.head?.next?.value).toBe(2);
    expect(sll.tail?.value).toBe(3);
    expect(sll.tail?.next).toBe(null);
    expect(sll.length).toBe(3);

    let result = sll.pop();
    expect(sll.tail?.value).toBe(2);
    expect(sll.tail?.next).toBe(null);
    expect(sll.length).toBe(2);
    expect(result?.value).toBe(3);

    sll.pop();
    sll.pop();

    expect(sll.head).toBe(null);
    expect(sll.tail).toBe(null);

    result = sll.pop();

    expect(result).toBe(null);
  });

  test('Shift method', () => {
    let sll = new DoublyLinkedList();
    sll.push(1);
    sll.push(2);
    sll.push(3);

    expect(sll.head?.value).toBe(1);
    expect(sll.head?.next?.value).toBe(2);
    expect(sll.tail?.value).toBe(3);
    expect(sll.tail?.next).toBe(null);
    expect(sll.length).toBe(3);

    sll.shift();

    expect(sll.head?.value).toBe(2);
    expect(sll.head?.next?.value).toBe(3);
    expect(sll.tail?.value).toBe(3);
    expect(sll.tail?.next).toBe(null);
    expect(sll.length).toBe(2);

    sll.shift();
    sll.shift();

    expect(sll.head).toBe(null);
    expect(sll.tail).toBe(null);

    let result = sll.shift();

    expect(result).toBe(null);
  });

  test('Unshift method', () => {
    let sll = new DoublyLinkedList();
    expect(sll.head).toBe(null);
    expect(sll.tail).toBe(null);
    expect(sll.length).toBe(0);

    sll.unshift(1);

    expect(sll.head?.value).toBe(1);
    expect(sll.head?.next).toBe(null);
    expect(sll.tail?.value).toBe(1);
    expect(sll.tail?.next).toBe(null);
    expect(sll.length).toBe(1);

    sll.unshift(2);

    expect(sll.head?.value).toBe(2);
    expect(sll.head?.next).toBe(sll.tail);
    expect(sll.tail?.value).toBe(1);
    expect(sll.tail?.next).toBe(null);
    expect(sll.length).toBe(2);
  });

  test('Get method', () => {
    let sll = new DoublyLinkedList();
    sll.push(1);
    sll.push(2);
    sll.push(3);
    sll.push(4);
    sll.push(5);

    let result = sll.get(3);

    expect(result?.value).toBe(4);

    result = sll.get(1);

    expect(result?.value).toBe(2);

    result = sll.get(6);

    expect(result).toBe(null);
  });

  test('Set method', () => {
    let sll = new DoublyLinkedList();
    sll.push(1);
    sll.push(2);
    sll.push(3);
    sll.push(4);
    sll.push(5);

    let result = sll.set(3, 1);

    expect(result).toBe(true);

    result = sll.set(6, 12);

    expect(result).toBe(false);
  });

  test('Insert method', () => {
    let sll = new DoublyLinkedList();
    sll.push(1);
    sll.push(2);
    sll.push(3);
    sll.push(4);
    sll.push(5);

    sll.insert(0, 0);

    expect(sll.head?.value).toBe(0);
    expect(sll.head?.next?.value).toBe(1);

    sll.insert(6, 6);
    expect(sll.tail?.value).toBe(6);

    sll.insert(3, 100);
    expect(sll.head?.next?.next?.next?.value).toBe(100);

    sll.insert(100, 3);
    expect(sll.head?.value).toBe(0);
    expect(sll.head?.next?.value).toBe(1);
    expect(sll.tail?.value).toBe(6);
    expect(sll.head?.next?.next?.next?.value).toBe(100);
  });

  test('Remove method', () => {
    let sll = new DoublyLinkedList();
    sll.push(1);
    sll.push(2);
    sll.push(3);
    sll.push(4);
    sll.push(5);

    let result = sll.remove(4);
    expect(result?.value).toBe(5);

    result = sll.remove(2);
    expect(result?.value).toBe(3);

    result = sll.remove(0);
    expect(result?.value).toBe(1);

    result = sll.remove(100);
    expect(result).toBe(null);
  });

  test('toArray method', () => {
    let sll = new DoublyLinkedList();
    sll.push(1);
    sll.push(2);
    sll.push(3);
    sll.push(4);
    sll.push(5);

    expect(sll.toArray()).toEqual([1, 2, 3, 4, 5]);
  });
});