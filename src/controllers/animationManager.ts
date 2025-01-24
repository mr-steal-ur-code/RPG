export class AnimationManager {

  static walkAnimation(scene: Phaser.Scene) {
    scene.anims.create({
      key: 'enemyWalk',
      frames: scene.anims.generateFrameNumbers('enemy', { start: 4, end: 9 }),
      frameRate: 10,
      repeat: -1,
    });
  }
}