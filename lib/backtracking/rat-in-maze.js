export function ratInAMaze(maze) {
    const solution = [];

    for (let i = 0; i < maze.length; i++) { // {1}
        solution[i] = [];

        for (let j = 0; j < maze[i].length; j++) {
            solution[i][j] = 0;
        }
    }

    if (findPath(maze, 0, 0, solution) === true) { // {2}
        return solution;
    }

    return 'NO PATH FOUND'; // {3}
}

function findPath(maze, x, y, solution) {
    const n = maze.length;

    if (x === n - 1 && y === n - 1) { // {4}
        solution[x][y] = 1;
        return true;
    }

    if (isSafe(maze, x, y)) { // {5}
        solution[x][y] = 1; // {6}
        if (findPath(maze, x + 1, y, solution)) { // {7}
            return true;
        }
        if (findPath(maze, x, y + 1, solution)) { // {8}
            return true;
        }
        solution[x][y] = 0; // {9}
        return false;
    }

    return false; // {10}
}

function isSafe(maze, x, y) {
    const n = maze.length;

    if (x >= 0 && y >= 0 && x < n && y < n && maze[x][y] !== 0) {
        return true; // {11}
    }

    return false;
}

const maze = [
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
    [0, 1, 1, 1]
];

console.log(ratInAMaze(maze));

/**
 * [[1, 0, 0, 0],
[1, 1, 1, 0],
[0, 0, 1, 0],
[0, 0, 1, 1]]
 */