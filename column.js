export default class Column {
  constructor() {
    this.column = [null, null, null, null, null, null];
  }

  add(currentPlayer) {
    for (let i = 5; i >= 0; i--) {
      if (this.column[i] === null) {
        this.column[i] = currentPlayer;
        break;
      }
    }
  }

  getTokenAt(rowIndex){
      return this.column[rowIndex]

  }
  isFull() {
    if(this.column[0] !== null) {
      return true;
    }
  }
}

