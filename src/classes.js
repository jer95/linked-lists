class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    if (this.getHead() == null) {
      this.head = node;
    } else {
      let currentNode = this.getHead();
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }

  prepend(value) {
    const node = new Node(value);
    if (this.getHead() !== null) {
      let prevHead = this.getHead();
      this.head = node;
      node.next = prevHead;
    } else {
      this.head = node;
    }
  }

  getSize() {
    let nodes = 0;
    let currentNode = this.getHead();
    if (currentNode == null) {
      return nodes;
    } else {
      while (currentNode !== null) {
        currentNode = currentNode.next;
        nodes++;
      }
      return nodes;
    }
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let currentNode = this.getHead();
    if (currentNode == null) {
      return null;
    } else {
      while (currentNode.next !== null) currentNode = currentNode.next;
      return currentNode;
    }
  }

  getNodeAt(index) {
    let currentNode = this.getHead();
    if (index >= this.size() || index < 0) return null;

    let node = 0;
    while (node < index) {
      currentNode = currentNode.next;
      node++;
    }
    return currentNode;
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
