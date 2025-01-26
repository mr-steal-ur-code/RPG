import { Scene } from 'phaser';
import { CST } from '../CST';

export class Boot extends Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
    //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

    this.load.image('background', 'assets/sprites/sand_bkg.jpg');
  }

  create() {
    this.scene.start(CST.SCENES.PRELOADER);
  }
}
