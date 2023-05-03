import ship from "./ship";

const gameBoard = function () {
  this.board = new Array(10);
  for (let i = 0; i < 10; i++) {
    this.board[i] = new Array(10);
  }
  this.missedCord = new Array();
  this.placeShip = (cord, length, isVertical) => {
    this.board[cord[0]][cord[1]] = new ship(length, isVertical);
  };
  this.receiveAttack = (cord) => {
    if (this.board[cord[0]][cord[1]] === undefined) {
      this.missedCord.push(cord);
      return false;
    }
    this.board[cord[0]][cord[1]].hit();
    return true;
  };
  this.checkShipNum = () => {
    let availableShip = 0;
    for (let i = 0; i < 10; i++) {
      this.board[i].forEach((ship) => {
        if (ship.isSunk() === false) {
          availableShip++;
        }
      });
    }
    return availableShip;
  };
};

export default gameBoard;
