import { GameBoard } from "./gameboard";

const gameboard = new GameBoard();
gameboard.placeShip(3, 0, 1, 1);
gameboard.recieveAttack(1, 1);

console.log(gameboard);
