import { Ship } from "./ship";

export class GameBoard {
  constructor(boardSize) {
    this.boardSize = boardSize;
  }

  placeShip(length, timesHit, coordinates, orientation) {
    let ship = new Ship(length, timesHit, coordinates, orientation);
  }

  recieveAttack(coordinates) {}
}

module.exports.gameBoard = GameBoard;
