import gameBoard from "../scripts/gameBoard";

test("hit a ship", () => {
  expect(gameBoard.receiveAttack([0, 6])).toBeTruthy();
});

test("did not hit a ship", () => {
  expect(gameBoard.receiveAttack([2, 5])).not.toBeTruthy();
});
