class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

// 节点的element不能为null
class LinkList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  append(element) {
    let node = new Node(element),
      current;
    if (this.head === null) {
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
        current = this.head,
        previous,
        index = 0;
      if (position === 0) {
        node.next = current;
        this.head = node;
      } else {
        while (index++ < position) {
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

  // 如果po1sition < 0 || position > this.length -1 则返回null
  removeAt(position) {
    let current = this.head,
      previous,
      index = 0;
    if (position > -1 && position < this.length--) {
      if (position === 0) {
        current = current.next;
        this.head = current;
      } else {
        while (index++ < position) {
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

  remove(element) {
    if (this.head == null) {
      return false;
    }
    let current = this.head,
      previous;

    while (current) {
      previous = current;
      current = current.next;
      if (current.element === element) {
        previous.next = current.next;
        this.length--;
        return false;
      }
    }
    return null;
  }

  indexOf(element) {
    let current = this.head,
      index = 0;
    while (current) {
      if (current.element === element) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  getHead() {
    return this.head;
  }

  toString() {
    let current = this.head,
      string = "";
    while (current) {
      string += current.element + (current.next ? "n" : "");
      current = current.next;
    }

    return string;
  }
}

let test = () => {
  let linkList = new LinkList();
  linkList.append(5);
  linkList.append(3254);
  linkList.append(22);
  linkList.append(953);
  console.log(linkList.indexOf(953));
  console.log(linkList.indexOf(666666));
  console.log(linkList.toString());
};

test();
