// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

    let words = userInput[0].split(' ');

    let articles = ['a', 'an', 'the'];
    let result = [];

    for (let index = 0; index < words.length; index++) {
        if (articles.includes(words[index].toLowerCase())) {
            result.push(words[index + 1]);
        }
    }

    console.log(result.join(' '));

  //end-here
});