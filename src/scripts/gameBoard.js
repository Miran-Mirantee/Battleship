import ship from "./ship";

const gameBoard = function () {
  // option 1
  this.board = new Array(10);
  for (let i = 0; i < 10; i++) {
    this.board[i] = new Array(10);
  }
  this.placeShip = (cord, length) => {
    this.board[cord[0]][cord[1]] = new ship(length);
  };
  this.receiveAttack = (cord) => {
    if (this.board[cord[0]][cord[1]] === undefined) return false;
    return true;
  };
};

export default gameBoard;
