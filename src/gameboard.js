import { Ship } from "./ship";

export class GameBoard {
  constructor() {}

  createBoard() {
    const board = new Array(10);
    for (let i = 0; i < board.length; i++) {
      board[i] = new Array(10);
    }
    console.log(board);
  }

  placeShip(length, timesHit, coordinateX, coordinateY, orientation) {
    return new Ship(length, timesHit, coordinateX, coordinateY, orientation);
  }

  markBoardCoordinates(coordinateX, coordinateY) {}

  recieveAttack(coordinateX, coordinateY) {
    return coordinateX, coordinateY;
  }
}
