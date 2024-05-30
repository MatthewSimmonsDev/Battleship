import { GameBoard } from "../src/gameboard";

const gameBoard = new GameBoard();

describe("Receive Attack", () => {
  test("should be 4", () => {
    expect(gameBoard.recieveAttack(4)).toBe(4);
  });
});
