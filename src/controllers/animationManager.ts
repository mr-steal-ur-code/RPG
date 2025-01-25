export class AnimationManager {

  static moveAnimationUp(scene: Phaser.Scene) {
    scene.anims.create({
      key: 'moveUp',
      frames: scene.anims.generateFrameNumbers('character', { start: 5, end: 6 }),
      frameRate: 10,
      repeat: -1,
    });
  }
  static moveAnimationRight(scene: Phaser.Scene) {
    scene.anims.create({
      key: 'moveRight',
      frames: scene.anims.generateFrameNumbers('character', { start: 24, end: 26 }),
      frameRate: 10,
      repeat: -1,
    });
  }
  static moveAnimationDown(scene: Phaser.Scene) {
    scene.anims.create({
      key: 'moveDown',
      frames: scene.anims.generateFrameNumbers('character', { start: 39, end: 41 }),
      frameRate: 10,
      repeat: -1,
    });
  }
  static moveAnimationLeft(scene: Phaser.Scene) {
    scene.anims.create({
      key: 'moveLeft',
      frames: scene.anims.generateFrameNumbers('character', { start: 24, end: 26 }),
      frameRate: 10,
      repeat: -1,
    });
  }
}