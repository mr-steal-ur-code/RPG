import Phaser from 'phaser';
import { CST } from '../CST';
import { EventBus } from '../EventBus';
import { InputManager } from '../../controllers/inputManager';
import { AnimationManager } from '../../controllers/animationManager';

export class Game extends Phaser.Scene {
  camera: Phaser.Cameras.Scene2D.Camera;
  inputManager: InputManager;
  animationManager: AnimationManager;
  character: Phaser.Physics.Arcade.Sprite;
  speed: number = 200;
  constructor() {
    super(CST.SCENES.GAME);
  }

  create() {
    this.inputManager = new InputManager(this);
    this.animationManager = new AnimationManager();
    this.camera = this.cameras.main;
    const { centerX, centerY } = this.camera;
    this.character = this.physics.add.sprite(centerX, centerY, "character");
    AnimationManager.moveAnimationUp(this);
    AnimationManager.moveAnimationRight(this);
    AnimationManager.moveAnimationDown(this);
    AnimationManager.moveAnimationLeft(this);

    EventBus.emit('current-scene-ready', this);
  }

  update(time: number, delta: number): void {
    const velocity = this.speed * (delta / 1000); // Calculate velocity based on delta time
    let isMoving = false;
    isMoving = false;

    // Reset character position
    let dx = 0;
    let dy = 0;

    // Check key presses and adjust character movement
    if (this.inputManager.isKeyPressed('W')) {
      dy -= velocity; // Move up
      this.character.play("moveUp", true);
      isMoving = true;
    }

    if (this.inputManager.isKeyPressed('A')) {
      dx -= velocity; // Move left
      this.character.play("moveLeft", true);
      isMoving = true;
    }

    if (this.inputManager.isKeyPressed('S')) {
      dy += velocity; // Move down
      this.character.play("moveDown", true);
      isMoving = true;
    }

    if (this.inputManager.isKeyPressed('D')) {
      dx += velocity; // Move right
      this.character.play("moveRight", true);
      isMoving = true;
    }

    if (!isMoving) {
      this.character.stop(); // Stop all animations
      this.character.setTexture('character', 0);
    }

    // Move the character
    this.character.x += dx;
    this.character.y += dy;
    // Clamp the character within the bounds of the game
    this.character.x = Phaser.Math.Clamp(this.character.x, 0, this.camera.width);
    this.character.y = Phaser.Math.Clamp(this.character.y, 0, this.camera.height);
  }
}
