import Phaser from 'phaser';
import { CST } from '../CST';
import { EventBus } from '../EventBus';

export class Game extends Phaser.Scene {
  character: Phaser.Physics.Arcade.Sprite;
  constructor() {
    super(CST.SCENES.GAME);
  }

  create() {
    // this.character = this.physics.add.sprite(0, 0, "character");

    EventBus.emit('current-scene-ready', this);
  }
}
