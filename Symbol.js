let ruan = Symbol("qianjun");
console.log(ruan);
console.log(Symbol.keyFor(ruan));

class Obj {
  constructor(x) {
    this.x = x;
  }

  console() {
    console.log(this);
  }
}

let obj = new Obj(3);

