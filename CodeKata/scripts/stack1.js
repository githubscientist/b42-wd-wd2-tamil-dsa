// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

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

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

    let words = userInput[0].split(' ');

    let stack = new Stack();

    for (let i = 0; i < words.length; i++){
        if (stack.isEmpty()) {
            stack.push(words[i]);
        } else {
            if (words[i] == stack.tos()) {
                stack.pop();
            } else {
                stack.push(words[i]);
            }
        }
    }

    console.log(stack.data.join(' '));

  //end-here
});