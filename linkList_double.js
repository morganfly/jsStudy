class Node {
  constructor(element, next, prev) {
    this.element = element;
    this.next = next;
    this.prev = prev;
  }
}

class linkList_double {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(element) {
    let current,
      node = new Node(element),
      previous;

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      current = this.head;
      while (current) {
        previous = current;
        current = current.next;
      }
      previous.next = node;
      node.prev = previous;
      this.tail = node;
    }
    this.length++;
  }

  insert(position, element) {
    let current = this.head,
      previous,
      node = new Node(element),
      index = 0;
    if (position >= 0 || position <= this.length) {
      if (position === 0) {
        this.head = node;
        node.next = current;
        current.prev = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = node;
        node.prev = previous;
        node.next = current;
        current.prev = node;
      }
      this.length++;
      return true;
    } else {
      return false;
    }
  }

  removeAt(position) {}

  remove(element) {}

  indexOf(element) {}

  isEmpty() {}

  size() {}

  getHead() {}

  toString() {}
}

let test = () => {};

test();
