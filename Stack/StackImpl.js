class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(data) {
        let newNode = new Node(data);

        newNode.next = this.top;
        this.top = newNode;
        this.length++;
    }

    tos() {
        return this.top.data;
    }

    pop() {
        if (this.top != null) {
            this.top = this.top.next;
            this.length--;
        }
    }

    isEmpty() {
        return this.top == null;
    }
}

let expression = '(((';

// create a new stack
let stack = new Stack();

// traverse the expression
for (let bracket of expression) {
    if (bracket == '(') {
        stack.push(bracket);
    } else if (bracket == ')' && stack.tos() == '(') {
        stack.pop();
    }
}

// find the size of the stack
console.log(stack.length);