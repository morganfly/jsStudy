// 用array实现queue(基本)
class Queue {
  constructor() {
    this.items = [...arguments];
  }
  enqueue(...ele) {
    return this.items.push(...ele);
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  print() {
    console.log(this.items.toString());
  }
}

// 用weakMap实现queue
let Queue_weakMap = (() => {
  let items = new WeakMap();
  class Queue_weakMap {
    constructor() {
      items.set(this, []);
    }

    enqueue(...ele) {
      return items.get(this).push(...ele);
    }

    dequeue() {
      return items.get(this).pop();
    }

    front() {
      return items.get(this)[0];
    }

    isEmpty() {
      return items.get(this).length == 0;
    }

    size() {
      return items.get(this).length;
    }

    clear() {
      items.set(this, []);
    }

    print() {
      console.log(items.get(this).toString());
    }
  }
  return Queue_weakMap;
})();

// 优先队列的实现
class PriorityQueue {
  constructor() {
    this.items = [];
  }

  QueueElement(ele, priority) {
    return {
      ele : ele,
      priority : priority
    }
   
  }

  enqueue(ele, priority) {
    let queueEle = this.QueueElement(ele, priority);
    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (queueEle.priority < this.items[i].priority) {
        this.items.splice(i, 0, queueEle);
        added = true;
        break;
      }
      if (!added) {
        this.items.push(queueEle);
      }
    }
  }

  print() {
    for (let i = 0; i < this.items.length; i++) {
      console.log(`${this.items[i].ele}-${this.items[i].priority}`);
    }
  }
}

// 测试
let test = () => {
  console.log(`---------Queue----------------`);
  let queue = new Queue(1, 2, 3, 4, 5, 6);
  queue.print();
  queue.dequeue();
  queue.print();
  console.log(queue.isEmpty());
  console.log(queue.size());
  queue.clear();
  queue.print();

  console.log(`-------Queue_weakMap-----------`);
  let queue_weakMap = new Queue_weakMap();
  queue_weakMap.enqueue(1, 2, 3, 4);
  queue_weakMap.print();
  queue_weakMap.dequeue();
  queue_weakMap.print();
  console.log(queue_weakMap.isEmpty());
  console.log(queue_weakMap.size());
  queue_weakMap.clear();
  queue_weakMap.print();

  console.log(`---------PriorityQueue----------------`);
  let priorityQueue = new PriorityQueue();
  priorityQueue.enqueue(1, 5);
  priorityQueue.enqueue(2, 15);
  priorityQueue.enqueue(3, 6);
  priorityQueue.enqueue(4, 1);
  priorityQueue.enqueue(5, 33);

  priorityQueue.print();
};

test();

module.exports = {
  Queue,
  Queue_weakMap,
  PriorityQueue,
  test
};
