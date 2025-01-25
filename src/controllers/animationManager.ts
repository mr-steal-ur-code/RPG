export class AnimationManager {

  static moveAnimationUp(scene: Phaser.Scene) {
    scene.anims.create({
      key: 'moveUp',
      frames: scene.anims.generateFrameNumbers('character', { start: 3, end: 5 }),
      frameRate: 10,
      repeat: -1,
    });
  }
  static moveAnimationRight(scene: Phaser.Scene) {
    scene.anims.create({
      key: 'moveRight',
      frames: scene.anims.generateFrameNumbers('character', { start: 19, end: 21 }),
      frameRate: 10,
      repeat: -1,
    });
  }
  static moveAnimationDown(scene: Phaser.Scene) {
    scene.anims.create({
      key: 'moveDown',
      frames: scene.anims.generateFrameNumbers('character', { start: 35, end: 37 }),
      frameRate: 10,
      repeat: -1,
    });
  }
  static moveAnimationLeft(scene: Phaser.Scene) {
    scene.anims.create({
      key: 'moveLeft',
      frames: scene.anims.generateFrameNumbers('character', { start: 51, end: 53 }),
      frameRate: 10,
      repeat: -1,
    });
  }
  static attackUp(scene: Phaser.Scene) {
    scene.anims.create({
      key: 'attackUp',
      frames: scene.anims.generateFrameNumbers('character', { start: 64, end: 69 }),
      frameRate: 10,
      repeat: -1,
    });
  }
  static attackRight(scene: Phaser.Scene) {
    scene.anims.create({
      key: 'attackRight',
      frames: scene.anims.generateFrameNumbers('character', { start: 80, end: 84 }),
      frameRate: 10,
      repeat: -1,
    });
  }
  static attackDown(scene: Phaser.Scene) {
    scene.anims.create({
      key: 'attackDown',
      frames: scene.anims.generateFrameNumbers('character', { start: 96, end: 100 }),
      frameRate: 10,
      repeat: -1,
    });
  }
  static attackLeft(scene: Phaser.Scene) {
    scene.anims.create({
      key: 'attackLeft',
      frames: scene.anims.generateFrameNumbers('character', { start: 112, end: 116 }),
      frameRate: 10,
      repeat: -1,
    });
  }
}