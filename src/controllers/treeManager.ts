import { InputManager } from "./inputManager";
import { PopoverManager } from "./popoverManager";

export class TreeManager {
  static inputManager: InputManager;

  constructor() {

  }

  static createTreeGroup(scene: Phaser.Scene) {
    return scene.physics.add.group({
      classType: Phaser.Physics.Arcade.Sprite,
      runChildUpdate: true,
      immovable: true
    });
  }

  static spawnTrees(scene: Phaser.Scene, treeGroup: Phaser.Physics.Arcade.Group, character: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody, x: number, y: number) {
    for (let i = 0; i < 240; i += 80) {
      treeGroup.create(x + i, y + i / 2, "objects", 58)
        .setDepth(100)
        .setCircle(15, 100, 100)
        .setData("hp", 200).setData("type", "tree");

      treeGroup.create(x + i, y + 100 + i / 2, "objects", 59)
        .setCircle(20, 93, 80)
        .setData("hp", 300).setData("type", "tree");
    }
    scene.physics.add.collider(character, treeGroup, (_character, tree) => this.handlePlayerTreeCollision((tree as Phaser.Physics.Arcade.Sprite)), undefined, scene);
  }

  static spawnTrees2(scene: Phaser.Scene, treeGroup: Phaser.Physics.Arcade.Group, character: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody, x: number, y: number) {
    for (let i = 0; i < 240; i += 80) {
      treeGroup.create(x + i, y + i / 2, "objects", 60)
        .setDepth(100)
        .setCircle(15, 95, 100)
        .setData("hp", 200).setData("type", "tree");

      treeGroup.create(x + i, y + 100 + i / 2, "objects", 61)
        .setCircle(25, 80, 75)
        .setData("hp", 300).setData("type", "tree");
    }
    scene.physics.add.collider(character, treeGroup, (_character, tree) => this.handlePlayerTreeCollision((tree as Phaser.Physics.Arcade.Sprite)), undefined, scene);
  }

  static gatherLogs(tree: Phaser.Physics.Arcade.Sprite) {
    this.inputManager = new InputManager(tree.scene);
    let treeHp = tree.getData("hp");
    treeHp = tree.getData("hp");
    tree.setData("hp", treeHp - 1);
    console.log("tree hp:", treeHp);

    if (treeHp <= 0) {
      tree.setTexture("objects", 62);
      tree.disableBody(true, false);
    }
  }

  static handlePlayerTreeCollision(tree: Phaser.Physics.Arcade.Sprite) {
    PopoverManager.showObjectPopover(tree, "Gather");
  }
}
