// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

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
            let poppedData = this.top.data;
            this.top = this.top.next;
            return poppedData;
        }
    }

    isEmpty() {
        return this.top == null;
    }
}

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

    let expression = userInput[0];

    // create a stack
    let stack = new Stack();

    // traverse through the expression
    for (let index = 0; index < expression.length; index++) {
        if (expression[index] == '(') {
            // if true, push the index of the '(' to the stack
            stack.push(index);
        } else if (expression[index] == ')') {
            // check if the stack is empty
            if (stack.isEmpty()) {
                // remove the character ')' at the index -> index
                expression = expression.slice(0, index) + expression.slice(index + 1,);
                index--;
            } else {
                // stack has some indexes of the opening bracket
                // remove the index in the top of the stack
                stack.pop();
            }
        }
    }

    while (!stack.isEmpty()) {
        let index = stack.pop();
        expression = expression.slice(0, index) + expression.slice(index + 1,);
    }

    console.log(expression);
  //end-here
});

/*
    traverse through the expression
        for every char:
            if char is a '(':
                push(index of char)
            else if char is a ')':
                if stack not empty:
                    pop()
                else:
                    remove the char at the index location

    while stack not empty:
        pop the index from the stack
        and delete the char at the index

*/