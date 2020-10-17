import Phaser from "phaser";

const createPlayerAnims = (anims: Phaser.Animations.AnimationManager) => {
  anims.create({
    key: "left",
    frames: anims.generateFrameNumbers("player", { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1,
  });

  anims.create({
    key: "turn",
    frames: [{ key: "player", frame: 4 }],
    frameRate: 20,
  });

  anims.create({
    key: "right",
    frames: anims.generateFrameNumbers("player", { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1,
  });
};

export { createPlayerAnims };
