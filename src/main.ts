import Phaser from "phaser";

import { WINDOW } from "./config";

import Preloader from "./scenes/Preloader";
import Game from "./scenes/Game";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: WINDOW.WIDTH,
  height: WINDOW.HEIGHT,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [Preloader, Game],
};

export default new Phaser.Game(config);
