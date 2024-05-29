import { GameBoard } from "../src/gameboard";

const gameBoard = new GameBoard();
test("creates a ship", () => {
  expect(gameBoard).toBeDefined();
});
