function isEndState(currentState, destination) {
    if (currentState[0] == destination[0] && currentState[1] == destination[1]) return true;
    if (currentState[0] == destination[0] - 1 && currentState[1] == destination[1]) return true;
    if (currentState[0] == destination[0] && currentState[1] == destination[1] - 1) return true;
    return false;
}

function findNextState(currentState, maze) {
    let [x, y] = [currentState[0], currentState[1]];

    let downValue = maze[x + 1][y];
    let rightValue = maze[x][y + 1];

    if (rightValue < downValue) {
        return [x,y + 1];
    } else {
        return [x + 1, y];
    }
}

let maze = [
    [2, 1, 3],
    [4, 0, 7],
    [8, 2, 4]
];

let source = [0, 0];
let destination = [2, 2];
let currentState = source;
let path = [];

// include the source to the path
path.push(maze[source[0]][source[1]]);

while (!isEndState(currentState, destination)) {
    currentState = findNextState(currentState, maze); 
    path.push(maze[currentState[0]][currentState[1]]);
}

path.push(maze[destination[0]][destination[1]]);

console.log(path);