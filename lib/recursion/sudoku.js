function solveSudoku(grid) {
    let { row, col } = findUnassignedLocation(grid);

    if (!row || !col) return true; // all locations successfully assigned

    for (let num = 1; num <= 9; num++) { // options are 1-9
        if (noConflicts(grid, row, col, num)) { // if # looks ok
            grid[row][col] = num; // try assign #
            if (solveSudoku(grid)) return true; // recur if succeed stop
            grid[row][col] = undefined; // undo & try again
        }
    }

    return false; // this triggers backtracking from early decisions
}

function findUnassignedLocation(grid, row, col) {

}

function noConflicts(grid, row, col) {

}

const board = [

];