class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
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
    if (position >= 0 && position <= this.length) {
      if (position === 0) {
        if (!this.head) {
          this.head = node;
          this.tail = node;
        } else {
          this.head = node;
          node.next = current;
          current.prev = node;
        }
      } else if (position === this.length) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
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

  removeAt(position) {
    let current = this.head,
      index,
      previous;
    if (position >= 0 && position <= this.length--) {
      if (position === 0) {
        previous = this.head;
        current = current.next;
        this.head = current.next;
        current.prev = null;
      } else if (position === this.length--) {
        current = this.tail;
        previous = current.prev;
        this.tail = previous;
        previous.next = null;
      } else {
        while (index < postion) {
          previous = current;
          current = current.current;
          index++;
        }
        current.prev = previous;
        previous.next = current;
      }
      this.length--;
      return true;
    } else {
      return false;
    }
  }

  remove(element) {}

  indexOf(element) {}

  isEmpty() {}

  size() {}

  getHead() {}

  toString() {}
}

let test = () => {};

test();
