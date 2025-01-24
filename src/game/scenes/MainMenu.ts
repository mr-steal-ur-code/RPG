import { GameObjects, Scene } from 'phaser';
import { CST } from '../CST';
import { EventBus } from '../EventBus';

export class MainMenu extends Scene {
  logo: GameObjects.Image;
  playBtn: GameObjects.Text;

  constructor() {
    super(CST.SCENES.MAINMENU);
  }

  create() {

    this.logo = this.add.image(500, 100, 'logo').setDepth(100);

    this.add.text(500, 300, "RPG", {
      fontSize: "70",
      strokeThickness: 10,
      stroke: "#000",
      color: "#b9b9b9",
      fontFamily: "fantasy"
    }).setOrigin(0.5).setDepth(150);

    this.playBtn = this.add.text(500, 900, 'Play', {
      fontFamily: 'sans-serif', fontSize: "70", color: 'white',
      stroke: 'green', strokeThickness: 6,
      align: 'center'
    }).setScale(1.5).setOrigin(0.5).setDepth(150).setInteractive({ useHandCursor: true })
      .on('pointerdown', () => {
        try {
          this.changeScene();
        } catch (error) {
          alert(`error: , ${error}`);
          console.error('Error in changeScene:', error);
        }
      })
      .on('pointerover', () => {
        this.playBtn.setStyle({ stroke: "#800080" });
      })
      .on('pointerout', () => {
        this.playBtn.setStyle({ stroke: "#000000" });
      });

    EventBus.emit('current-scene-ready', this);
  }

  changeScene() {
    this.scene.start(CST.SCENES.GAME);
  }
}
