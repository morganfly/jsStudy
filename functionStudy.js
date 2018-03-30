function myFunc() {
    if (myFunc.caller == null) {
        return ("该函数在全局作用域内被调用!");
    } else
        return ("调用我的是函数是" + myFunc.caller);
}

console.log(myFunc())
// myFunc()