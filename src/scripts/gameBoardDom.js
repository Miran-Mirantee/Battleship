const gameBoardDom = function (displayArea, gameBoard, isBot) {
  const board = document.createElement("div");
  this.createBoard = () => {
    board.classList.add("board");
    for (let x = 0; x < 10; x++) {
      const row = document.createElement("div");
      row.classList.add("board-row");
      for (let y = 0; y < 10; y++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        row.append(tile);
      }
      board.append(row);
    }
    displayArea.append(board);
  };

  this.updateBoard = () => {
    // const board = document.querySelector(".board");
    for (let y = 1; y <= 10; y++) {
      for (let x = 1; x <= 10; x++) {
        const ship = gameBoard.board[x - 1][y - 1];
        if (!ship) {
          continue;
        }
        for (let i = 0; i < ship.length; i++) {
          let query = `.board-row:nth-child(${11 - y}) :nth-child(${x + i})`;
          if (ship.isVertical === true)
            query = `.board-row:nth-child(${11 - y + i}) :nth-child(${x})`;

          const shipTile = board.querySelector(query);
          shipTile.classList.add("ship");

          if (isBot) {
            shipTile.addEventListener("click", () => {
              ship.hit();
              console.log("hitted");
              shipTile.style.pointerEvents = "none";
              if (ship.isSunk()) console.log("ship is down!");
              // console.log(ship);
            });
          }
        }
        // console.log(ship);
      }
    }
  };
};

export default gameBoardDom;
