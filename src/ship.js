export class Ship {
  constructor(length, timesHit, coordinates, orientation) {
    this.length = length;
    this.timesHit = timesHit;
    this.coordinates = coordinates;
    this.orientation = orientation;
  }

  length = 0;
  timesHit = 0;
  isSunk = false;

  hit() {
    this.timesHit++;
  }

  sunk() {
    this.isSunk = true;
  }
}
