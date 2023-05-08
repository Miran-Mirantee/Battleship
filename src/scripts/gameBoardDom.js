const gameBoardDom = function (
  displayArea,
  playerBoard,
  player2Board,
  players
) {
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

      // error
      const shipTile = boardDom.querySelector(query);
      shipTile.classList.add("ship");

      shipTile.addEventListener("click", () => {
        gameBoard.receiveAttack([x - 1, y - 1]);
        console.log("hitted");
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

      for (let y = 0; y < 10; y++) {
        const row = document.createElement("div");
        row.classList.add("board-row");
        board.append(row);

        for (let x = 0; x < 10; x++) {
          const tile = document.createElement("div");
          tile.classList.add("tile");
          row.append(tile);

          // if (!players[i].isBot) {
          //   continue;
          // }

          tile.addEventListener("click", () => {
            if (!players[i].playerturn) {
              this.updateBoard();
              tile.style.pointerEvents = "none";
            }
          });
        }
      }
      displayArea.append(board);
    }
  };

  this.updateBoard = () => {
    const boards = document.querySelectorAll(".board");
    boards.forEach((board) => board.classList.remove("active"));

    if (players[0].playerturn) boards[0].classList.add("active");
    else boards[1].classList.add("active");

    players.forEach((player) => {
      player.playerturn = !player.playerturn;
    });
    for (let y = 1; y <= 10; y++) {
      for (let x = 1; x <= 10; x++) {
        this.placeShip(x, y, playerBoard, boards[0]);
        this.placeShip(x, y, player2Board, boards[1]);
      }
    }
  };
};

export default gameBoardDom;
