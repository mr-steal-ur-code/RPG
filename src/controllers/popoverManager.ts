import { CharacterManager } from "./characterManager";

export class PopoverManager {
  private static popover: Phaser.GameObjects.Text | null = null;

  static showTreePopover() {
    const character = CharacterManager.character
    if (this.popover) {
      this.popover.destroy();
    }

    this.popover = character.scene.add.text(CharacterManager.character.x, CharacterManager.character.y - 50, "tree!", {
      fontSize: '16px',
      color: '#fff',
      backgroundColor: '#000',
      padding: { x: 10, y: 5 },
    }).setDepth(201);
    character.scene.events.once(Phaser.Scenes.Events.UPDATE, () => {
      character.once('move', () => {
        this.removePopover();
      });
    });
  }

  public static removePopover() {
    if (this.popover) {
      this.popover.destroy();
      this.popover = null;
    }
  }
}