class Stack {
    constructor() {
        this.items = []
    }

    push(...ele){
        this.items.push(...ele)
        return this.items
    }
}


let _stack = new Stack();
console.log(_stack.push(1,3,5))
console.log(_stack.push(2,4,6))