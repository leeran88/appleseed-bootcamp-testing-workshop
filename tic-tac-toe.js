const board = [[null, null, null],
               [null, null, null],
               [null, null, null]];

function newGame() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            board[i][j] = null;    
        }
    }
}

function markCell(rowIndex, columnIndex, sign) {
    if (isGameOver()) {
        throw new Error('game is over!');
    }

    if (isCellTaken(rowIndex, columnIndex)) {
        throw new Error('cell is already taken!');
    }
    
    board[rowIndex][columnIndex] = sign;
    
    return getWinner();
}

function isCellTaken(rowIndex, columnIndex) {
    return board[rowIndex][columnIndex] !== null;
}

function areAllCellsTaken() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (!isCellTaken(i, j)) {
                return false;
            }
        }
    }

    return true;
}

function getCell(rowIndex, columnIndex) {
    return board[rowIndex][columnIndex];
}

function getBoard() {
    return board;
}

function getWinner() {
    // check row
    if ((board[0][0] === board[0][1]) && (board[0][0] === board[0][2])) {
        return board[0][0];
    }
    if ((board[1][0] === board[1][1]) && (board[1][0] === board[1][2])) {
        return board[1][0];
    }
    if ((board[2][0] === board[2][1]) && (board[2][0] === board[2][2])) {
        return board[2][0];
    }
    
    // check column
    if ((board[0][0] === board[1][0]) && (board[0][0] === board[2][0])) {
        return board[0][0];
    }
    if ((board[0][1] === board[1][1]) && (board[0][1] === board[2][1])) {
        return board[0][1];
    }
    if ((board[0][2] === board[1][2]) && (board[0][2] === board[2][2])) {
        return board[0][2];
    }
    
    // check diagonal
    if ((board[0][0] === board[1][1]) && (board[0][0] === board[2][2])) {
        return board[0][0];
    }
    if ((board[0][2] === board[1][1]) && (board[2][2] === board[2][0])) {
        return board[0][2];
    }
    
    return null;
}

function isGameOver() {
    return getWinner() !== null || areAllCellsTaken();
}

module.exports = {
    newGame,
    markCell,
    getCell,
    getBoard,
    isGameOver,
};