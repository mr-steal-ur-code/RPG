import { Scene } from 'phaser';
import { CST } from '../CST';

export class Preloader extends Scene {
  constructor() {
    super(CST.SCENES.PRELOADER);
  }

  init() {
    //  We loaded this image in our Boot Scene, so we can display it here

    //  A simple progress bar. This is the outline of the bar.
    this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

    //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
    const bar = this.add.rectangle(512 - 230, 384, 4, 28, 0xffffff);

    //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
    this.load.on('progress', (progress: number) => {

      //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
      bar.width = 4 + (460 * progress);

    });
  }

  preload() {
    //  Load the assets for the game
    this.load.setPath('assets/music');
    this.load.audio("main_game_music", "the_plan_upbeat.ogg");

    this.load.setPath('assets/sfx');
    this.load.audio("grunt", "angry_grunt.mp3");

    this.load.setPath('assets/sprites');
    this.load.image('logo', 'logo.png');
    this.load.spritesheet('objects', 'medieval.png', {
      frameWidth: 195,
      frameHeight: 201,
    });
    this.load.image('main_base_outline', 'main_base_outline.png');
    this.load.spritesheet('character', 'character.png', {
      frameWidth: 24,
      frameHeight: 32,
    });
  }

  create() {
    //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
    //  For example, you can define global animations here, so we can use them in other scenes.

    //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
    this.scene.start(CST.SCENES.MAINMENU);
  }
}
