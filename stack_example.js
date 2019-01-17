let stack = require("./stack");

// 十进制 => 二进制
let divideBy2 = decNum => {
  let remStack = new stack.Stack_symbol(),
    rem,
    binaryString = "";

  while (decNum > 0) {
    rem = Math.floor(decNum % 2);
    remStack.push(rem);
    decNum = Math.floor(decNum / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  return binaryString;
};

// 十进制转化为n进制
let divideByN = (decNum, n) => {
  let remStack = new stack.Stack_weakMap(),
    rem,
    binaryString = "";
  digits = "0123456789ABCDEF";

  while (decNum > 0) {
    rem = Math.floor(decNum % n);
    remStack.push(rem);
    decNum = Math.floor(decNum / n);
  }

  while (!remStack.isEmpty()) {
    binaryString += digits[remStack.pop()];
  }
  return binaryString;
};


// -----------------------------test-------------------------------------------------

console.log(`十进制88=>二进制${divideBy2(88)}`);

console.log(`十进制88=>十六进制${divideByN(88, 16)}`);
