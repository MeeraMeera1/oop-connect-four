import {Game} from "./game.js";
import Column from './column.js'

let game = undefined;

function updateUI() {
  let board = document.getElementById("board-holder");
  let gameName = document.getElementById("game-name");
  if (game === undefined) {
    board.classList.add("is-invisible");
  } else {
    board.classList.remove("is-invisible");
    gameName.innerHTML = game.getName();
    const player = game.currentPlayer
    const playerClick = document.getElementById("click-targets");
        if(player === 1) {
            playerClick.classList.add("black")
            playerClick.classList.remove("red")
        } else {
            playerClick.classList.add("red");
            playerClick.classList.remove("black");
        };
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
    .addEventListener("click", () => {
        game.playInColumn();
        updateUI();
    })
});


 let column = new Column();
 console.log(column.add(5));
 console.log(column.column)
column.add(4)
console.log(column.column)