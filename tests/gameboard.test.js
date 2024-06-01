import { GameBoard } from "../src/gameboard";

const gameBoard = new GameBoard();
describe("gameboard tests", () => {
  test("should be 4", () => {
    expect(gameBoard.recieveAttack(4, 4)).toBe(4);
  });
  test("array exists", () => {
    expect(gameBoard.createBoard()).isArray;
  });
  test("placeShip", () => {
    gameBoard.placeShip(0, 0, 1, 1);

    expect(gameBoard.board[1][1]).toBe("Occupied");
  });
});
