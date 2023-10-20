class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.counter = 0;
  }

  /**
   * Add a new element to the front of the linked list. O(1)
   */
  pushFront(val) {
    const newNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.counter += 1;
  }

  /**
   * Returns the value of the element at the provided index. O(n)
   */
  getElement(index) {
    let currentNode = this.head;
    let count2 = 0;
    if (index < 0 || index >= this.counter) {
      return null;
    }
    while (currentNode) {
      if (count2 === index) {
        return currentNode.data;
      }
      count2++;
      currentNode = currentNode.next;
    }
  }

  /**
   * Returns the number of elements in the list. O(1)
   */
  count() {
    return this.counter;
  }

  /**
   * Removes the val from the front of the list and returns the value of that val. O(1)
   */
  popFront() {
    if (this.counter < 1) {
      return this.head;
    }

    let oldHead = this.head.data;
    this.head = this.head.next;
    this.counter -= 1;
    return oldHead;
  }

  /**
   * Inserts an val in the list after the provided index. O(n)
   */
  insertAfter(index, val) {
    let currentNode = this.head;
    let count2 = 0;
    if (index < 0 || index >= this.counter) {
      return null;
    }
    while (currentNode) {
      if (count2 === index) {
        const newNode = new ListNode(val);
        newNode.next = currentNode.next;
        currentNode.next = newNode;

        this.counter += 1;
        return;
      }
      count2++;
      currentNode = currentNode.next;
    }
  }

  /**
   * Removes element at the provided index. Returns the removed element. O(n)
   */
  removeElement(index) {
    let currentNode = this.head;
    let count2 = 0;
    if (index < 0 || index >= this.counter) {
      return null;
    }
    while (currentNode) {
      if (count2 === index) {
        currentNode = currentNode.next;

        this.counter -= 1;
        return;
      }
      count2++;
      currentNode = currentNode.next;
    }
  }

  /**
   * Reverses the direction of the linked list. O(n)
   */
  reverse() {
    let currentNode = this.head.next.next.data;
    return currentNode;
  }
}

module.exports = LinkedList;
