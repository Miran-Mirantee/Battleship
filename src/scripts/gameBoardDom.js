import gameBoard from "./gameBoard";

const gameBoardDom = function (displayArea, gameBoards, players) {
  // always let player1 start first
  players[1].playerturn = true;

  this.changeTurn = () => {
    players.forEach((player) => {
      player.playerturn = !player.playerturn;
    });
  };

  this.placeShip = (x, y, gameBoard, boardDom) => {
    const ship = gameBoard.board[x - 1][y - 1];
    if (!ship) return;

    for (let i = 0; i < ship.length; i++) {
      let query = `.board-row:nth-child(${11 - y}) :nth-child(${x + i})`;
      if (ship.isVertical)
        query = `.board-row:nth-child(${11 - y + i}) :nth-child(${x})`;

      const shipTile = boardDom.querySelector(query);
      shipTile.classList.add("ship");

      shipTile.addEventListener("click", () => {
        // skip the first tile of ship
        if (i > 0) gameBoard.receiveAttack([x - 1, y - 1]);
        console.log("hitted");
        console.log(ship);

        if (ship.isSunk()) console.log("ship is down!");
      });
    }
    // console.log(ship);
  };

  this.createBoard = () => {
    for (let i = 0; i < 2; i++) {
      const board = document.createElement("div");
      board.classList.add("board");
      if (i == 0) board.classList.add("player1");
      else board.classList.add("player2");

      for (let y = 9; y >= 0; y--) {
        const row = document.createElement("div");
        row.classList.add("board-row");
        board.append(row);

        for (let x = 0; x <= 9; x++) {
          const tile = document.createElement("div");
          tile.classList.add("tile");
          row.append(tile);

          tile.addEventListener("click", () => {
            gameBoards[i].receiveAttack([x, y]);
            // console.log(gameBoards[i].missedCord);
            this.updateBoard();
            tile.style.pointerEvents = "none";
            tile.classList.add("shot");

            if (players[i].isBot) {
              const enemyBoard = gameBoards.slice();
              enemyBoard.splice(i, 1);
              const cord = players[i].randHit(enemyBoard[0].missedCord);
              console.log(cord);
              // enemyBoard[0].receiveAttack(cord);
              // console.log(enemyBoard[0].missedCord);
              // continue;
            }
          });
        }
      }
      displayArea.append(board);
    }
    console.log(players);
  };

  this.updateBoard = () => {
    const boards = document.querySelectorAll(".board");
    boards.forEach((board) => board.classList.remove("active"));

    if (players[0].playerturn) boards[0].classList.add("active");
    else boards[1].classList.add("active");

    players.forEach((player) => {
      player.playerturn = !player.playerturn;
    });
  };

  this.placeAllShip = () => {
    const boards = document.querySelectorAll(".board");
    for (let y = 1; y <= 10; y++) {
      for (let x = 1; x <= 10; x++) {
        this.placeShip(x, y, gameBoards[0], boards[0]);
        this.placeShip(x, y, gameBoards[1], boards[1]);
      }
    }
  };
};

export default gameBoardDom;
