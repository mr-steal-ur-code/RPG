import Phaser from 'phaser';
import { CST } from '../CST';
import { EventBus } from '../EventBus';
import { InputManager } from '../../controllers/inputManager';
import { CharacterManager } from '../../controllers/characterManager';

export class Game extends Phaser.Scene {
  camera: Phaser.Cameras.Scene2D.Camera;
  inputManager: InputManager;
  characterManager: CharacterManager;
  character: Phaser.Physics.Arcade.Sprite;
  speed: number = 200;
  constructor() {
    super(CST.SCENES.GAME);
  }

  create() {
    this.inputManager = new InputManager(this);
    this.characterManager = new CharacterManager();
    this.camera = this.cameras.main;
    const { centerX, centerY } = this.camera;
    CharacterManager.spawnCharacter(this, centerX, centerY);


    EventBus.emit('current-scene-ready', this);
  }

  update(time: number, delta: number): void {
    const velocity = this.speed * (delta / 1000);

    CharacterManager.moveCharacter(this, velocity)
  }
}
