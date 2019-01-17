var b = require("./moduleStudy_module");
console.log(b.foo);
setTimeout(() => {
  console.log(b.foo);
  console.log(require("./moduleStudy_module").foo);
}, 1000);
