console.log('Your JS is linked up. Be the person you needed when you were little.');

/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

/*----- app's state (variables) -----*/
let board;
let turn = 'X';
let win;

/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
const messages = document.querySelector('h2');
document.getElementById('reset-button').addEventListener('click', init);

/*----- functions -----*/
function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]]; 
    });
    return winner ? winner : board.includes('') ? null : 'T';
};

function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    board[idx] = turn;
    //console.log(board);
    turn = turn === 'X' ? 'O' : 'X';
    win = getWinner();
    render();
};

function init() {
    board = [
        '', '', '',
        '', '', '',
        '', '', '',
    ];
    render();
};
//be sure to call the init function!

function render() {
    board.forEach(function(mark, index) {
        squares[index].textContent = mark;
        //console.log(mark, index);
    });
    messages.textContent = win === 'T' ? `It's a tie!` : win ? `Player ${win} wins the game!` : `Player's ${turn} turn!`;
};

init();
