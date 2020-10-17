import Phaser from "phaser";

export default class Game extends Phaser.Scene {
  constructor() {
    super("game");
  }

  create() {
    this.add.image(400, 300, "background");
    this.add.image(400, 300, "star");
  }
}
