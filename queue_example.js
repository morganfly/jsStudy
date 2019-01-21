let Queue = require("./queue");

// 用queue实现击鼓传花
function hotPotato(nameList, num) {
  let queue = new Queue.Queue_weakMap();
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  // 设定淘汰者
  let eliminated = "";
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
      queue.print();
    }
    eliminated = queue.dequeue();
    console.log(`${eliminated}在击鼓传花中被淘汰`);
  }
  return queue.dequeue();
}

function test() {
  let nameList = [`a`, `b`, `c`, `d`, `e`, `f`];
  let winner = hotPotato(nameList, 4);
  console.log(`这次击鼓传花游戏的获胜者是${winner}`);
}
