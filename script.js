const board = document.getElementById("board");
    const area = document.querySelectorAll("[area]");
    const message = document.getElementById("message");
    let currentPlayer = "X";
    let gameActive = true;
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

board.addEventListener("click", (e) => {
            const area = e.target;
            const index = cell.getAttribute("area");
});
