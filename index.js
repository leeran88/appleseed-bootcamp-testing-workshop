const board = [];

function ticTacToe() {
    for (let i = 0; i < 3; i++) {
        const newRow = [];
        
        newRow.push(null);
        newRow.push(null);
        newRow.push(null);
        
        board.push(newRow);
    }
}

function markCell(rowIndex, columnIndex, sign) {
    if (isGameOver()) {
        throw new Error('game is over!');
    }

    if (board[rowIndex][columnIndex] !== null) {
        throw new Error('cell is already taken!');
    }
    
    board[rowIndex][columnIndex] = sign;
    
    return getWinner();
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
    return getWinner() !== null;
}

function test1() {
    console.log('Running test #1...');
    
    let winner;

    ticTacToe();
    
    winner = markCell(1, 1, 'X')
    console.log(`winner: ${winner}`);
    
    winner = markCell(0, 0, 'O')
    console.log(`winner: ${winner}`);
    
    winner = markCell(0, 1, 'X')
    console.log(`winner: ${winner}`);
    
    winner = markCell(2, 2, 'O')
    console.log(`winner: ${winner}`);
    
    winner = markCell(2, 1, 'X')
    console.log(`winner: ${winner}`);
    
    if (winner === 'X') {
        console.log('\x1b[32m', 'Test passed! :-)');
    } else {
        console.log('\x1b[31m', 'Test failed! :-(');
    }
}


test1();
