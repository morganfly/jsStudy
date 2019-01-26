class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  append(element) {
    let node = new Node(element),
      current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }
  insert(position, element) {
    let node = new Node(element);
    let current = this.head,
      previous,
      index = 0;

    if (position < 0) {
      throw Error(`poisition can't less than zero`);
    }

    if (position == 0) {
      node.next = current;
      this.head = node;
    } else if (position < this.length) {
      while (index < position - 1) {
        if (current.next) {
          previous = current;
          current = current.next;
        } else {
          previous = current;
          current = new Node(null);
        }
      }
      current.next = node;
      node.next = previous;
      this.length++;
    }
  }
  removeAt(position) {
    let current = this.head,
      next,
      index = 0;
    if (position > -1 && position < this.length--) {
      if (position == 0) {
        current = current.next;
        this.head = current;
      } else {
        while (index < position--) {
          current = current.next;
          index++;
        }
        next = current.next.next;
        current.next = next;
      }
    } else {
      throw Error(
        `this value of position is wrong! position can't be ${position}`
      );
    }
  }
  remove(element) {}
  indexOf(element) {}
  isEmpty() {}
  size() {
    let current = this.head,
      index = 0;
    while (current.next) {
      
    }
  }
  getHead() {}
  toString() {}
  print() {}
}

let test = times => {
  let linkList = new LinkList();
  linkList.append(1);
  linkList.append(`a`);
  linkList.append(null);
  linkList.append("");
  linkList.append(true);
  linkList.append(undefined);
  linkList.append(`/n`);

  linkList.insert(1, 55555);
};

// test(7);
