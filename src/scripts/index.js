import gameBoardDom from "./gameBoardDom";
import gameBoard from "./gameBoard";
import Player from "./player";
import "../style.css";

const displayArea = document.querySelector(".display-area");
const startBtn = document.querySelector(".start.btn");

const board = new gameBoard();
const boardDom = new gameBoardDom(displayArea, board);

const gameStart = () => {
  console.log("start the game!");
  const player = new Player(false);
  const bot = new Player(true);
  board.placeShip([1, 1], 5);
  board.placeShip([2, 3], 4);
  board.placeShip([3, 5], 3);
  board.placeShip([4, 7], 3);
  board.placeShip([5, 9], 2);
  boardDom.updateBoard();
};

boardDom.createBoard();
boardDom.createBoard();

startBtn.addEventListener("click", () => {
  gameStart();
});
