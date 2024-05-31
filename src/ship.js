export class Ship {
  constructor(length, timesHit, coordinateX, coordinateY, orientation) {
    this.length = length;
    this.timesHit = timesHit;
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
    this.orientation = orientation;
  }

  length = 0;
  timesHit = 0;
  isSunk = false;

  hit() {
    this.timesHit++;
  }

  sunk() {
    if (this.timesHit === this.length) {
      this.isSunk = true;
    }
  }
}
