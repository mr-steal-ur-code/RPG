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
    const { centerX, centerY } = this.cameras.main;

    this.logo = this.add.image(centerX, 100, 'logo').setDepth(100);

    this.add.text(centerX, centerY, "CJ's RPG", {
      fontSize: 70,
      strokeThickness: 10,
      stroke: "#000",
      color: "#b9b9b9",
      fontFamily: "fantasy"
    }).setOrigin(0.5).setDepth(150);

    this.playBtn = this.add.text(centerX, centerY + 150, 'Play', {
      fontFamily: 'fantasy', fontSize: 70, color: 'white',
      stroke: 'green', strokeThickness: 6,
      align: 'center',
    }).setScale(1).setOrigin(0.5).setDepth(150).setInteractive({ useHandCursor: true })
      .on('pointerdown', () => {
        this.changeScene();
      })
      .on('pointerover', () => {
        this.playBtn.setStyle({ stroke: "#800080", color: "#333" }).setScale(1.2);
      })
      .on('pointerout', () => {
        this.playBtn.setStyle({ stroke: "#000000", color: "white" }).setScale(1);
      });

    EventBus.emit('current-scene-ready', this);
  }

  changeScene() {
    this.scene.start(CST.SCENES.GAME);
  }
}
