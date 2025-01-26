import { CharacterManager } from "./characterManager";
import { PopoverManager } from "./popoverManager";

export class BuildingManager {

  static spawnMainBaseOutline(scene: Phaser.Scene) {
    const character = CharacterManager.character;
    const mainBuldingOutline = scene.physics.add.sprite(400, 400, "main_base_outline").setScale(1.5).setCircle(42, 20, 10).setData("type", "building_outline");
    scene.physics.add.collider(character, mainBuldingOutline, () => this.handleBuildingOutlineCharacterCollision((mainBuldingOutline as Phaser.Physics.Arcade.Sprite)))
  }

  static spawnMainBase(scene: Phaser.Scene) {
    scene.physics.add.sprite(430, 500, "objects", 16).setScale(1.5).setData("type", "building")
  }

  static handleBuildingOutlineCharacterCollision(buildingOutline: Phaser.Physics.Arcade.Sprite) {
    PopoverManager.showObjectPopover(buildingOutline, "Build Base")
  }

  static removeBuildingOutline(scene: Phaser.Scene) {
    console.log(scene);

  }
}