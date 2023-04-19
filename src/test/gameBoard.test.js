import gameBoard from "../scripts/gameBoard";

const board = new gameBoard();
board.placeShip([1, 0], 5);
board.placeShip([1, 1], 5);
board.placeShip([4, 3], 5);

test("hit a ship", () => {
  expect(board.receiveAttack([1, 0])).toBeTruthy();
});

test("did not hit a ship", () => {
  expect(board.receiveAttack([2, 5])).not.toBeTruthy();
});

test("check number of ship", () => {
  expect(board.checkShipNum()).toBe(3);
});

// test("test", () => {
//   expect(board.board).toBe(1);
// });
