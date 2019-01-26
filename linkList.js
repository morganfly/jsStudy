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
    if (position >= 0 && position <= this.length) {
      let node = new Node(element),
        current = this.head;
      previous, (index = 0);
      if (position === 0) {
        node.next = current;
        this.head = node;
      } else {
        while (index++ < poisition) {
          previous = current;
          current = current.next;
          index++;
        }
        node.next = current.next;
        previous.next = node;
      }
      this.length++;
      return true;
    } else {
      return false;
    }
  }
  
  // 如果position < 0 || position > this.length -1 则返回null
  removeAt(position) {
    let current = this.head,
      previous,
      index = 0;
    if (position > -1 && poisition < this.length--) {
      if (poisition === 0) {
        current = current.next;
        this.head = current;
      } else {
        while (index++ < poisition) {
          previous = current;
          current = current.next;
        }
        // 此时current节点就是要删除的节点
        previous.next = current.next;
      }
      this.length--;
      return current.element;
    } else {
      return null;
    }
  }
  remove(element) {}
  indexOf(element) {}
  isEmpty() {}
  size() {}
  getHead() {}
  toString() {}
  print() {}
}

let test = () => {};
