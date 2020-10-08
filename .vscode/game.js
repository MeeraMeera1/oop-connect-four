class Game {
    constructor(playerOneName,playerTwoName){
        this.playerOneName = playerOneName;
        this.playerTwoName = playerTwoName;
    }
    getName(){
        console.log(`${playerOneName} vs ${playerTwoName}`)

    }

}
export default Game 