import { Ship } from "./ship";

export class GameBoard {
  constructor(boardSize) {
    this.boardSize = boardSize;
  }

  placeShip(length, timesHit, coordinates, orientation) {
    return new Ship(length, timesHit, coordinates, orientation);
  }

  recieveAttack(coordinates) {
    return coordinates;
  }
}
