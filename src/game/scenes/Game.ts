import Phaser from 'phaser';
import { CST } from '../CST';
import { EventBus } from '../EventBus';
import { InputManager } from '../../controllers/inputManager';
import { CharacterManager } from '../../controllers/characterManager';
import { TreeManager } from '../../controllers/treeManager';
import { BuildingManager } from '../../controllers/buildingManager';

export class Game extends Phaser.Scene {
  camera: Phaser.Cameras.Scene2D.Camera;
  inputManager: InputManager;
  characterManager: CharacterManager;
  buildingManager: BuildingManager;
  treeManager: TreeManager;
  character: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  speed: number = 200;
  constructor() {
    super(CST.SCENES.GAME);
  }

  create() {
    this.camera = this.cameras.main;
    this.add.image(0, 0, "background").setOrigin(0, 0).setDisplaySize(1280, 720);
    this.camera.setBounds(0, 0, 1280, 720);
    this.inputManager = new InputManager(this);
    this.characterManager = new CharacterManager();
    this.buildingManager = new BuildingManager();
    this.treeManager = new TreeManager();
    const { centerX, centerY } = this.camera;
    CharacterManager.spawnCharacter(this, centerX, centerY);
    const treeGroup1 = TreeManager.createTreeGroup(this);
    const treeGroup2 = TreeManager.createTreeGroup(this);
    TreeManager.spawnTrees(this, treeGroup1, CharacterManager.character, 100, 100);
    TreeManager.spawnTrees2(this, treeGroup2, CharacterManager.character, 550, 100);
    BuildingManager.spawnMainBaseOutline(this);

    EventBus.emit('current-scene-ready', this);
  }

  update(time: number, delta: number): void {
    const velocity = this.speed * (delta / 1000);

    CharacterManager.moveCharacter(this, velocity)
  }
}
