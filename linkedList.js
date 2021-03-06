class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  insertBefore(key, item) {
    let currNode = this.head;
    let previousNode = this.head;
    while (currNode !== null && currNode.value !== key) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    previousNode.next = new _Node(item, currNode);
  }
  insertAfter(key, item) {
    let currNode = this.head;
    let nextNode = this.head;
    while (currNode !== null && currNode.value !== key) {
      currNode = currNode.next;
      nextNode = currNode.next;
    }
    currNode.next = new _Node(item, nextNode);
  }
  insertAt(index, item) {
    let counter = 0;
    let currNode = this.head;
    let nextNode = this.head;
    while (currNode !== null && counter !== index) {
      currNode = currNode.next;
      nextNode = currNode.next;
      counter++;
    }
    currNode.next = new _Node(item, nextNode);
  }
  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      return;
    }
    previousNode.next = currNode.next;
  }
}
module.exports = LinkedList;
