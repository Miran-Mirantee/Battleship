const gameBoardDom = function (displayArea, gameBoard) {
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
        if (gameBoard.board[x - 1][y - 1]) {
          const ship = document.querySelector(
            `.board .board-row:nth-child(${11 - y}) :nth-child(${x})`
          );
          ship.classList.add("ship");
          console.log(board);
        }
      }
    }
  };
};

export default gameBoardDom;
