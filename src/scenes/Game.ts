import Phaser from "phaser";
import { PLAYER } from "../config";
import { createPlayerAnims } from "../anims/PlayerAnims";

export default class Game extends Phaser.Scene {
  private platforms?: Phaser.Physics.Arcade.StaticGroup;
  private player?: Phaser.Physics.Arcade.Sprite;
  private controls?: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super("game");
  }

  create() {
    createPlayerAnims(this.anims);

    this.controls = this.input.keyboard.createCursorKeys();

    this.add.image(400, 300, "background");

    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(400, 568, "platform").setScale(2).refreshBody();
    this.platforms.create(600, 400, "platform");
    this.platforms.create(50, 250, "platform");
    this.platforms.create(750, 220, "platform");

    this.player = this.physics.add.sprite(100, 450, "player");
    this.player.setBounce(PLAYER.BOUNCE);
    this.player.setCollideWorldBounds(true);

    this.physics.add.collider(this.platforms, this.player);
  }

  update() {
    if (this?.controls?.left?.isDown) {
      this.player?.setVelocityX(-PLAYER.MOVE_SPEED);
      this.player?.anims.play("left", true);
    } else if (this.controls?.right?.isDown) {
      this.player?.setVelocityX(PLAYER.MOVE_SPEED);
      this.player?.anims.play("right", true);
    } else {
      this.player?.setVelocityX(0);
      this.player?.anims.play("turn");
    }

    if (this.controls?.up?.isDown && this.player?.body.touching.down) {
      this.player?.setVelocityY(-PLAYER.JUMP_SPEED);
    }
  }
}
