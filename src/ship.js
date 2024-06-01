export class Ship {
  constructor(length, timesHit, coordinates, id) {
    this.length = length;
    this.timesHit = timesHit;
    this.coordinates = coordinates;
    this.id = id;
  }

  id = 0;
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
