const gameBoardDom = function (displayArea) {
  this.createBoard = () => {
    const board = document.createElement("div");
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
};

export default gameBoardDom;
