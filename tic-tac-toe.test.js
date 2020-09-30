const ticTacToe = require('./tic-tac-toe');

describe('tic-tac-toe', () => {
    describe('markCell', () => {
        it('should set the given cell to the given sign', () => {
            ticTacToe.newGame();

            ticTacToe.markCell(0, 1, 'X');

            const result = ticTacToe.getBoard();

            const expected = [
                [null, 'X', null],
                [null, null, null],
                [null, null, null],
            ];

            expect(result).toEqual(expected);
        });

        it('should throw error when cell is already marked', () => {
            ticTacToe.newGame();

            ticTacToe.markCell(1, 0, 'X');

            expect(() => {
                ticTacToe.markCell(1, 0, 'O');
            }).toThrow('cell is already taken!');
        });
    });
});