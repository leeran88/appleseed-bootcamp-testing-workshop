const ticTacToe = require('./tic-tac-toe');

console.log('Running test #1...');

let winner;

ticTacToe.init();

winner = ticTacToe.markCell(1, 1, 'X')
console.log(`winner: ${winner}`);

winner = ticTacToe.markCell(0, 0, 'O')
console.log(`winner: ${winner}`);

winner = ticTacToe.markCell(0, 1, 'X')
console.log(`winner: ${winner}`);

winner = ticTacToe.markCell(2, 2, 'O')
console.log(`winner: ${winner}`);

winner = ticTacToe.markCell(2, 1, 'X')
console.log(`winner: ${winner}`);

if (winner === 'X') {
    console.log('\x1b[32m', 'Test passed! :-)');
} else {
    console.log('\x1b[31m', 'Test failed! :-(');
}