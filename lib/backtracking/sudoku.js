function sudokuSolver(matrix) {
    if (solveSudoku(matrix)) {
        return matrix;
    }

    return 'NO SOLUTION EXISTS!';
}

const UNASSIGNED = 0;

function solveSudoku(matrix) {
    let row = 0;
    let col = 0;
    let checkBlankSpaces = false;

    for (row = 0; row < matrix.length; row++) { // {1}
        for (col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === UNASSIGNED) {
                checkBlankSpaces = true; // {2}
                break;
            }
        }
        if (checkBlankSpaces === true) { // {3}
            break;
        }
    }

    if (checkBlankSpaces === false) {
        return true; // {4}
    }

    for (let num = 1; num <= 9; num++) { // {5}
        if (isSafe(matrix, row, col, num)) { // {6}
            matrix[row][col] = num; // {7}
            if (solveSudoku(matrix)) { // {8}
                return true;
            }
            matrix[row][col] = UNASSIGNED; // {9}
        }
    }

    return false; // {10}
}

function isSafe(matrix, row, col, num) {
    return (
        !usedInRow(matrix, row, num) &&
        !usedInCol(matrix, col, num) &&
        !usedInBox(matrix, row - (row % 3), col - (col % 3), num)
    );
}

function usedInRow(matrix, row, num) {
    for (let col = 0; col < matrix.length; col++) { // {11}
        if (matrix[row][col] === num) {
            return true;
        }
    }
    return false;
}

function usedInCol(matrix, col, num) {
    for (let row = 0; row < matrix.length; row++) { // {12}
        if (matrix[row][col] === num) {
            return true;
        }
    }
    return false;
}

function usedInBox(matrix, boxStartRow, boxStartCol, num) {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (matrix[row + boxStartRow][col + boxStartCol] === num) { // {13}
                return true;
            }
        }
    }
    return false;
}

const sudokuGrid = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

console.log(sudokuSolver(sudokuGrid));

/*[
[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]
]
*/