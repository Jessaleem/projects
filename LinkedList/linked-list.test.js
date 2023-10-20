const LinkedList = require('./linked-list');

test('getElement', () => {
  const linkedList = new LinkedList();

  linkedList.pushFront('a');
  linkedList.pushFront('b');
  linkedList.pushFront('c');

  expect(linkedList.getElement(0)).toBe('c');
  expect(linkedList.getElement(1)).toBe('b');
  expect(linkedList.getElement(2)).toBe('a');

  expect(linkedList.getElement(-1)).toBe(null);
  expect(linkedList.getElement(100)).toBe(null);
});

test('getElementByIndex', () => {
  const linkedList = new LinkedList();

  linkedList.pushFront('a');
  linkedList.pushFront('b');
  linkedList.pushFront('c');

  expect(linkedList.count()).toBe(3);
});

test('popFront', () => {
  const linkedList = new LinkedList();

  linkedList.pushFront('a');
  linkedList.pushFront('b');
  linkedList.pushFront('c');

  expect(linkedList.popFront()).toBe('c');
  expect(linkedList.count()).toBe(2);
  expect(linkedList.popFront()).toBe('b');
  expect(linkedList.count()).toBe(1);
  expect(linkedList.popFront()).toBe('a');
});

test('insertAfter', () => {
  const linkedList = new LinkedList();

  linkedList.pushFront('a');
  linkedList.pushFront('b');
  linkedList.pushFront('c');
  linkedList.insertAfter(1, 'h');

  expect(linkedList.getElement(2)).toBe('h');
  expect(linkedList.count()).toBe(4);
});

test('removeElement', () => {
  const linkedList = new LinkedList();

  linkedList.pushFront('a');
  linkedList.pushFront('b');
  linkedList.pushFront('c');
  linkedList.removeElement(1);

  expect(linkedList.getElement(1)).toBe('b');
  expect(linkedList.count()).toBe(2);
});

test('reverse', () => {
  const linkedList = new LinkedList();

  linkedList.pushFront('a');
  linkedList.pushFront('b');
  linkedList.pushFront('c');

  expect(linkedList.reverse()).toBe('a');
});
