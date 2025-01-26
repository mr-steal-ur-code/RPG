import { PopoverManager } from "./popoverManager";

export class TreeManager {
  static createTreeGroup(scene: Phaser.Scene) {
    return scene.physics.add.group({
      classType: Phaser.Physics.Arcade.Sprite,
      runChildUpdate: true,
      immovable: true
    });
  }

  static spawnTrees(scene: Phaser.Scene, treeGroup: Phaser.Physics.Arcade.Group, character: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody, x: number, y: number) {
    for (let i = 0; i < 240; i += 80) {
      treeGroup.create(x + i, y + i / 2, "tree", 58)
        .setDepth(100)
        .setCircle(30, 85, 85);

      treeGroup.create(x + i, y + 100 + i / 2, "tree", 59)
        .setCircle(43, 68, 58);
    }
    scene.physics.add.collider(character, treeGroup, this.handlePlayerTreeCollision, undefined, scene);

  }

  static spawnTrees2(scene: Phaser.Scene, treeGroup: Phaser.Physics.Arcade.Group, character: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody, x: number, y: number) {
    for (let i = 0; i < 240; i += 80) {
      treeGroup.create(x + i, y + i / 2, "tree", 60)
        .setDepth(100)
        .setCircle(30, 80, 83);

      treeGroup.create(x + i, y + 100 + i / 2, "tree", 61)
        .setCircle(45, 60, 53);
    }
    scene.physics.add.collider(character, treeGroup, this.handlePlayerTreeCollision, undefined, scene);
  }

  static handlePlayerTreeCollision() {
    PopoverManager.showTreePopover();
    console.log("tree collision");
  }
}
