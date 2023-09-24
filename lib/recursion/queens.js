const board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
];

solve(board, 0);
print(board);

function print(board) {
    let output = '';

    for (const row of board) {
        for (const value of row) {
            if (value) {
                output += ' Q';
            } else {
                output += ' .';
            }
        }

        output += '\n';
    }

    console.log(output);
}

function solve(board, col = 0) {
    if (col >= board.length) return true;

    for (let rowToTry = 0; rowToTry < board.length; rowToTry++) {
        if (isSafe(board, rowToTry, col)) {
            board[rowToTry][col] = 1;

            if (solve(board, col + 1)) return true;

            board[rowToTry][col] = 0;
        }
    }

    return false;
}

function isSafe(board, row, col) {
    // check rows
    for (let i = 0; i < board.length; i++) {
        if (i === row) continue;

        if (board[i][col] === 1) return false;
    }

    // check cols
    for (let i = 0; i < board.length; i++) {
        if (i === col) continue;

        if (board[row][i] === 1) return false;
    }

    // check bottom-left diagonal
    for (let i = row, j = col; i < board.length && j >= 0; i++, j--) {
        if (board[i][j] === 1) return false;
    }

    // check top-right diagonal
    for (let i = row, j = col; i >= 0 && j < board.length; i--, j++) {
        if (board[i][j] === 1) return false;
    }

    // check top-left diagonal
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 1) return false;
    }

    // check bottom-right diagonal
    for (let i = row, j = col; i < board.length && j < board.length; i++, j++) {
        if (board[i][j] === 1) return false;
    }

    return true;
}