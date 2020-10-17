import Phaser from "phaser";

export default class Game extends Phaser.Scene {
  private platforms?: Phaser.Physics.Arcade.StaticGroup;

  constructor() {
    super("game");
  }

  create() {
    this.add.image(400, 300, "background");

    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(400, 568, "platform").setScale(2).refreshBody();
    this.platforms.create(600, 400, "platform");
    this.platforms.create(50, 250, "platform");
    this.platforms.create(750, 220, "platform");
  }
}
