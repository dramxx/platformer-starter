import Phaser from "phaser";

export default class Preloader extends Phaser.Scene {
  constructor() {
    super("preloader");
  }

  preload() {
    this.load.image("background", "assets/sky.png");
    this.load.image("bomb", "assets/bomb.png");
    this.load.image("platform", "assets/platform.png");
    this.load.image("star", "star/sky.png");
    this.load.spritesheet("player", "dude/sky.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    this.scene.start("game");
  }
}
