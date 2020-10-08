import { Game } from './game.js';

let game = undefined
window.addEventListener("DOMContentLoaded", e => {
    const nameOne = document.getElementById("player-1-name");
    const nameTwo = document.getElementById("player-2-name");
    const newGameButton = document.getElementById("new-game");

    function buttonStatus() {
        let player1Input = nameOne.value;
        let player2Input = nameTwo.value;
        if(player1Input.length > 0 && player2Input.length > 0) {
            newGameButton.disabled = false;
        }
    }
    



    nameOne.addEventListener("keyup", () => {
      buttonStatus();
    })

    nameTwo.addEventListener("keyup", () => {
      buttonStatus();
    })
});
