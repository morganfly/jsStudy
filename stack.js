// 用array实现stack(基本)
class Stack {
  constructor() {
    this.items = [];
  }

  push(...ele) {
    this.items.push(...ele);
    return this.items;
  }

  pop() {
    this.items.pop();
  }

  peek() {
    return this.items[this.item.length - 1];
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  print() {
    console.log(this.items.toString());
  }
}

// 用symbol实现stack(实现了stack属性的继承,不容易直接访问到stack的属性)
let Stack_symbol = (res => {
  const _items = Symbol();
  class Stack_symbol {
    constructor() {
      this[_items] = [];
    }

    push(...ele) {
      this[_items].push(...ele);
      return this[_items];
    }

    pop() {
      this[_items].pop();
    }

    peek() {
      return this[_items][this[_items].length - 1];
    }

    size() {
      return this[_items].length;
    }

    clear() {
      this[_items] = [];
    }

    isEmpty() {
      return this[_items].length == 0;
    }

    print() {
      console.log(this[_items].toString());
    }
  }
  return Stack_symbol;
})();

// 用weakMap实现stack(实现了stack属性的私有化,但是其属性无法继承)
let Stack_weakMap = (res => {
  let items = new WeakMap();
  class Stack_weakMap {
    constructor() {
      items.set(this, []);
    }
    push(...ele) {
      items.get(this).push(...ele);
    }

    pop() {
      items.get(this).pop();
    }

    peek() {
      return items.get(this)[items.get(this).length - 1];
    }

    size() {
      return items.get(this).length;
    }

    clear() {
      items.set(this, []);
    }

    isEmpty() {
      return items.get(this).length == 0;
    }

    print() {
      console.log(items.get(this).toString());
    }
  }
  return Stack_weakMap;
})();

class ExtendClass_symbol extends Stack_symbol {
  constructor() {
    super();
  }
}

class ExtendClass_weakMap extends Stack_weakMap {
  constructor() {
    super();
  }
}

// --------------------------------test-------------------------------------------------
let test_stack_symbol = res => {
  let stack_symbol = new Stack_symbol();
  stack_symbol.push(5, 5, 6, 9, 7, 56, 8);
  stack_symbol.pop();
  console.log(stack_symbol.peek());
  stack_symbol.print();
  console.log(stack_symbol.isEmpty());
  console.log(stack_symbol.size());
  stack_symbol.clear();
  console.log(stack_symbol.isEmpty());

  let extendClass_symbol = new ExtendClass_symbol();
  extendClass_symbol.push(1, 2, 3, 4);
  extendClass_symbol.print();
};

let test_stack_weakMap = res => {
  let stack_weakMap = new Stack_weakMap();
  stack_weakMap.push(5, 5, 6, 9, 7, 56, 8);
  stack_weakMap.pop();
  console.log(stack_weakMap.peek());
  stack_weakMap.print();
  console.log(stack_weakMap.isEmpty());
  console.log(stack_weakMap.size());
  stack_weakMap.clear();
  console.log(stack_weakMap.isEmpty());

  let extendClass_weakMap = new ExtendClass_weakMap();
  extendClass_weakMap.push(4, 5, 6, 7);
  extendClass_weakMap.print();
};

test_stack_weakMap()