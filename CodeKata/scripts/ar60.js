// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

function findIndex(books, noOfBooks, book) {
    for (let index = 0; index < noOfBooks; index++) {
        if (book >= books[index]) {
            return index+1;
        }
    }
    return noOfBooks+1;
}

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

    // handle the input
    let noOfBooks = parseInt(userInput[0]);
    let books = userInput[1].split(' ').map((item) => parseInt(item));
    let noOfNewBooks = parseInt(userInput[2]);
    let newBooks = userInput[3].split(' ').map((item) => parseInt(item));

    let output = [];

    newBooks.forEach(book => {
        let index = findIndex(books, noOfBooks, book);
        output.push(index);
    });

    console.log(output.join(' '));

  //end-here
});