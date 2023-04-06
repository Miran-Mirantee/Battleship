import ship from "../scripts/ship";

const ship1 = new ship(5);

test("ship getting hit", () => {
  ship1.hit();
  expect(ship1.hitCount).toBe(1);
});

test("ship is not sunk", () => {
  expect(ship1.isSunk()).not.toBeTruthy();
});

test("ship is sunk", () => {
  for (let i = 1; i < ship1.length; i++) ship1.hit();
  expect(ship1.isSunk()).toBeTruthy();
});
