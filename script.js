currentPlayer = 'X';

function makeMove(cell) {
    
    if (cell.innerHTML === '') {
       cell.innerHTML = currentPlayer;
       if (checkWinner()) {
         alert(currentPlayer + ' wins!');
         resetBoard();
       } else {
         currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
       }
    }
    }
    
    function checkWinner() {
    const cells = document.querySelectorAll('.cell');
    const winningCombinations = [
       [0, 1, 2], [3, 4, 5], [6, 7, 8],
       [0, 3, 6], [1, 4, 7], [2, 5, 8],
       [0, 4, 8], [2, 4, 6]
    ];
    
    return winningCombinations.some(combination => {
       return combination.every(index => {
         return cells[index].innerHTML === currentPlayer;
       });
    });
    }
    
    function resetBoard() {
    document.querySelectorAll('.cell').forEach(cell => {
       cell.innerHTML = '';
    });
    currentPlayer = 'X';
    }