document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const turnBoxX = document.querySelector('.turn-boxa');
    const turnBoxO = document.querySelector('.turn-box');
    const winnerDisplay = document.getElementById('winner');
    let currentTurn = 'X';
    let gameActive = true;

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function checkWinner() {
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
                return cells[a].textContent;
            }
        }
        return null;
    }

    function handleClick(cell) {
        if (cell.textContent === '' && gameActive) {
            cell.textContent = currentTurn;
            const winner = checkWinner();
            if (winner) {
                winnerDisplay.textContent = `${winner} wins!`;
                gameActive = false;
            } else {
                currentTurn = currentTurn === 'X' ? 'O' : 'X';
                turnBoxX.classList.toggle('active');
                turnBoxO.classList.toggle('active');
            }
        }
    }

    cells.forEach(cell => {
        cell.addEventListener('click', () => handleClick(cell));
    });
});
