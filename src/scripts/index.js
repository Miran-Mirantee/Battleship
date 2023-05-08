import gameBoardDom from "./gameBoardDom";
import gameBoard from "./gameBoard";
import Player from "./player";
import "../style.css";

const displayArea = document.querySelector(".display-area");
const startBtn = document.querySelector(".start.btn");

const playerBoard = new gameBoard();
const botBoard = new gameBoard();

const gameStart = () => {
  console.log("start the game!");

  const player = new Player(false);
  // for debugging
  // const player = new Player(true);
  const bot = new Player(true);
  const boardDom = new gameBoardDom(displayArea, playerBoard, botBoard, [
    player,
    bot,
  ]);
  boardDom.createBoard();
  playerBoard.placeShip([1, 1], 5);
  playerBoard.placeShip([2, 3], 4);
  playerBoard.placeShip([3, 5], 3);
  playerBoard.placeShip([4, 7], 3);
  playerBoard.placeShip([5, 9], 2);
  botBoard.placeShip([0, 0], 5);
  botBoard.placeShip([2, 2], 4);
  botBoard.placeShip([4, 4], 3);
  botBoard.placeShip([6, 8], 3, true);
  botBoard.placeShip([9, 8], 2, true);
  boardDom.updateBoard();

  // playerBoard.placeShip([1, 1], 5);
  // playerBoard.placeShip([2, 3], 4);
  // playerBoard.placeShip([3, 5], 3);
  // playerBoard.placeShip([4, 7], 3);
  // playerBoard.placeShip([5, 9], 2);
  // playerBoardDom.updateBoard();

  // botBoardDom.updateBoard();
};

startBtn.addEventListener("click", () => {
  gameStart();
});
