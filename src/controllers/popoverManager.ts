import { BuildingManager } from "./buildingManager";
import { CharacterManager } from "./characterManager";
import { TreeManager } from "./treeManager";

export class PopoverManager {
  private static popover: Phaser.GameObjects.Text | null = null;

  static showObjectPopover(object: Phaser.Physics.Arcade.Sprite, text: string) {
    const type = object.getData("type");
    const character = CharacterManager.character;
    if (this.popover) {
      this.popover.destroy();
    }

    this.popover = character.scene.add.text(
      character.x,
      character.y - 50,
      text,
      {
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#000',
        padding: { x: 10, y: 5 },
      }
    )
      .setDepth(201)
      .setInteractive({ useHandCursor: true })
      .on('pointerdown', () => {
        if (type === "building_outline") {
          BuildingManager.spawnMainBase(object.scene);
        } else if (type === "tree") {
          TreeManager.gatherLogs(object);
          this.showGatheredItem();
        }
      })
      .on('pointerover', () => {
        if (this.popover) {
          this.popover.setStyle({ backgroundColor: "#800080" });
        }
      })
      .on('pointerout', () => {
        if (this.popover) {
          this.popover.setStyle({ backgroundColor: "#000000" });
        }
      });

    character.scene.events.once(Phaser.Scenes.Events.UPDATE, () => {
      if (character) {
        character.once('move', () => {
          this.removePopover();
        });
      }
    });
  }

  public static removePopover() {
    if (this.popover) {
      this.popover.destroy();
      this.popover = null;
    }
  }

  static showGatheredItem() {
    const character = CharacterManager.character;
    const itemPopup = character.scene.add
      .text(character.x, character.y, `+ 1`, {
        fontFamily: "sans-serif",
        fontSize: 60,
        color: "#ffffff",
        stroke: "#800080",
        strokeThickness: 8,
        align: "center",
      })
      .setOrigin(0.5);

    character.scene.tweens.add({
      targets: itemPopup,
      y: character.y - 300,
      duration: 800,
      ease: "Power2",
      onComplete: () => {
        character.scene.time.delayedCall(1000, () => {
          if (itemPopup.active) {
            itemPopup.destroy();
          }
        });
      },
    });
  }
}
