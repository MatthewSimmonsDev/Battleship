import { Ship } from "./ship";

export class GameBoard {
  constructor() {
    this.board = [];
    this.createBoard();
  }

  createBoard() {
    this.board = new Array(10);
    for (let i = 0; i < this.board.length; i++) {
      this.board[i] = new Array(10);
    }
    return this.board;
  }

  placeShip(length, timesHit, coordinateX, coordinateY) {
    const ship = new Ship(
      length,
      timesHit,
      this.board[coordinateX][coordinateY],
      this.id
    );
    for (let x = 0; x < this.board.length; x++) {
      for (let y = 0; y < this.board.length; y++) {
        if (this.board[coordinateX][coordinateY] !== "Occupied") {
          for (let i = 0; i < length; i++) {
            this.board[coordinateX + i][coordinateY] = "Occupied";
          }
        }
      }
    }
    console.log(ship);
  }

  recieveAttack(coordinateX, coordinateY) {
    if (this.board[coordinateX][coordinateY] === "Occupied") {
    }
    this.board[coordinateX][coordinateY] = "Hit";
  }
}
