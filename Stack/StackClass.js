class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        let newNode = new Node(data);

        newNode.next = this.top;
        this.top = newNode;
    }

    tos() {
        return this.top.data;
    }

    pop() {
        if (this.top != null) {
            this.top = this.top.next;
        }
    }

    isEmpty() {
        return this.top == null;
    }
}

let stack = new Stack();

stack.push(3);
stack.push(5);
stack.push(7);
stack.pop();
stack.pop();

console.log(stack.tos());