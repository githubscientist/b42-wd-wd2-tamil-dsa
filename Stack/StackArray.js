class Stack {
    constructor() {
        this.data = [];
    }

    push(value) {
        this.data.push(value);
    }

    tos() {
        return this.data[this.data.length - 1];
    }

    pop() {
        this.data.pop();
    }

    isEmpty() {
        return this.data.length == 0;
    }
}

let stack = new Stack();

stack.push(3);
stack.push(5);
stack.push(7);
stack.pop();
stack.pop();
// stack.pop();
// console.log(stack.isEmpty());

console.log(stack.tos());