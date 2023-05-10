import Player from "../scripts/player";
import gameBoard from "../scripts/gameBoard";

const bot = new Player(true);
const gameBoard1 = new gameBoard();

for (let y = 0; y < 10; y++) {
  for (let x = 0; x < 10; x++) {
    gameBoard1.missedCord.push([x, y]);
  }
}

gameBoard1.missedCord.pop();

test("bot trying to hit [9,9] tile", () => {
  expect(bot.randHit(gameBoard1.missedCord)).toEqual([9, 9]);
});
