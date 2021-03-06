import { Game } from "./game.js";

let game = undefined;

function updateUI() {
  let board = document.getElementById("board-holder");
  let gameName = document.getElementById("game-name");
  if (game === undefined) {
    board.classList.add("is-invisible");
  } else {
    board.classList.remove("is-invisible");
    gameName.innerHTML = game.getName();
  }

    for (let rowIndex = 0; rowIndex <= 5; rowIndex++) {
      for (let columnIndex = 0; columnIndex <= 6; columnIndex++) {
        let square = document.getElementById(
          `square-${rowIndex}-${columnIndex}`
        );
        square.innerHTML = "";

        const numOfPlayer = game.getTokenAt(rowIndex, columnIndex);
        if (numOfPlayer === 1) {
          const token = document.createElement("div");
          token.classList.add("token");
          token.classList.add("black");
          square.appendChild(token);
        } else if (numOfPlayer === 2){
          const token = document.createElement("div");
          token.classList.add("token");
          token.classList.add("red")
          square.appendChild(token)
        }
      }
    }

    for(let i=0; i<=6; i++) {
      let fullColumn = game.isColumnFull(i);
      let element = document.getElementById(`column-${i}`)
      if(fullColumn) {
        element.classList.add("full");
      } else {
        element.classList.remove("full");
      }
    }

    const player = game.currentPlayer;
    const playerClick = document.getElementById("click-targets");
    if (player === 1) {
      playerClick.classList.add("black");
      playerClick.classList.remove("red");
    } else {
      playerClick.classList.add("red");
      playerClick.classList.remove("black");
    }
  }


window.addEventListener("DOMContentLoaded", (e) => {
  const nameOne = document.getElementById("player-1-name");
  const nameTwo = document.getElementById("player-2-name");
  const newGameButton = document.getElementById("new-game");

  function buttonStatus() {
    let player1Input = nameOne.value;
    let player2Input = nameTwo.value;
    if (player1Input.length > 0 && player2Input.length > 0) {
      newGameButton.disabled = false;
    } else {
      newGameButton.disabled = true;
    }
  }

  nameOne.addEventListener("keyup", () => {
    buttonStatus();
  });

  nameTwo.addEventListener("keyup", () => {
    buttonStatus();
  });

  newGameButton.addEventListener("click", () => {
    game = new Game(nameOne.value, nameTwo.value);
    nameOne.value = "";
    nameTwo.value = "";
    buttonStatus();
    updateUI();
  });

  document
    .getElementById("click-targets")
    .addEventListener("click", (event) => {
      const id = event.target.id;
      if (!id.includes("column-")) return;
      const char = Number.parseInt(id[id.length - 1]);
      game.playInColumn(char);
      updateUI();
    });
});

//  let column = new Column();
//  console.log(column.add(5));
//  console.log(column.column)
// column.add(4)
// console.log(column.column)
