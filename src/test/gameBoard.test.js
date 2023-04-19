import gameBoard from "../scripts/gameBoard";

const board = new gameBoard();
board.placeShip([1, 0], 5);
board.placeShip([1, 1], 5);

test("hit a ship", () => {
  expect(board.receiveAttack([1, 0])).toBeTruthy();
});

test("did not hit a ship", () => {
  expect(board.receiveAttack([2, 5])).not.toBeTruthy();
});

test("check number of ship on the board", () => {
  expect(board.checkShipNum()).toBe(2);
});

test("check if there is no ship", () => {
  for (let i = 0; i < 5; i++) {
    board.receiveAttack([1, 0]);
    board.receiveAttack([1, 1]);
  }
  expect(board.checkShipNum()).toBe(0);
});

// test("test", () => {
//   expect(board.board).toBe(1);
// });
