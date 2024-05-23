let cells = Array.from(document.querySelectorAll(".js-cell"));
let reset = document.querySelector(".js-reset-button");
let message = document.querySelector(".js-result-message");
let title = document.querySelector(".js-title");

let currentPlayer = "X";

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (currentPlayer === "X" && cell.innerHTML === "") {
      cell.innerHTML = "X";
      currentPlayer = "O";
      title.innerHTML = `Turn: ${currentPlayer}`;
    }
    if (currentPlayer === "O" && cell.innerHTML === "") {
      cell.innerHTML = "O";
      currentPlayer = "X";
      title.innerHTML = `Turn: ${currentPlayer}`;
    }
    checkWinner();
  });
});

function checkWinner() {
  let winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i of winning) {
    const cell1 = cells[i[0]].innerHTML;
    const cell2 = cells[i[1]].innerHTML;
    const cell3 = cells[i[2]].innerHTML;

    if (cell1 === cell2 && cell2 === cell3 && cell1 !== "") {
      message.innerHTML = `Player ${cell1} wins!`;
      title.innerHTML = "";
    }
  }
}

reset.addEventListener("click", () => {
  cells.forEach((cell) => (cell.innerHTML = ""));
  message.innerHTML = "";
  title.innerHTML = "Start Game";
});
