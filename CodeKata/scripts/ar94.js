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

    // handle the inputs
    let n = parseInt(userInput[0]);
    let array = userInput[1].split(' ').map(item => parseInt(item));
    let weights = userInput[2].split(' ').map(item => parseInt(item));

    let arrayWeights = [];

    for (let index = 0; index < n; index++){
        arrayWeights.push([array[index], weights[index]]);
    }

    // arrayWeights.sort((a, b) => a[1] - b[1]);
    // [ [ 1, 5 ], [ 2, 4 ], [ 3, 3 ], [ 4, 2 ], [ 5, 1 ] ]
    for (let i = 0; i < n; i++){
        for (let j = i + 1; j < n; j++){
            if (arrayWeights[i][1] > arrayWeights[j][1]) {
                let temp = arrayWeights[i];
                arrayWeights[i] = arrayWeights[j];
                arrayWeights[j] = temp;
            }
        }
    }


    console.log(arrayWeights.map((item) => item[0]).join(' '));

  //end-here
});