import { AnimationManager } from "./animationManager";
import { InputManager } from "./inputManager";

export class CharacterManager {
  static character: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  static lastDirection: "up" | "down" | "left" | "right" = "up";
  static inputManager: InputManager;

  constructor() { }

  static spawnCharacter(scene: Phaser.Scene, x: number, y: number) {
    this.character = scene.physics.add.sprite(x, y, "character");
    this.inputManager = new InputManager(scene);
    AnimationManager.moveAnimationUp(scene);
    AnimationManager.moveAnimationRight(scene);
    AnimationManager.moveAnimationDown(scene);
    AnimationManager.moveAnimationLeft(scene);
    AnimationManager.attackDown(scene);
    AnimationManager.attackLeft(scene);
    AnimationManager.attackRight(scene);
    AnimationManager.attackUp(scene);
  }

  static moveCharacter(scene: Phaser.Scene, velocity: number) {
    let isMoving = false;

    const playAnimation = (action: string, direction: "up" | "down" | "left" | "right") => {
      const animationKey = `${action}${direction.charAt(0).toUpperCase() + direction.slice(1)}`;
      this.character.play(animationKey, true);
    };

    const setIdleTexture = (direction: "up" | "down" | "left" | "right") => {
      const frameMap = { up: 0, left: 48, down: 32, right: 16 };
      this.character.setTexture("character", frameMap[direction]);
    };

    if (this.inputManager.isKeyPressed("E")) {
      playAnimation("attack", this.lastDirection);
      return;
    }

    const movementMap: Record<"W" | "A" | "S" | "D", { dx: number; dy: number; animation: string; direction: "up" | "down" | "left" | "right" }> = {
      W: { dx: 0, dy: -velocity, animation: "move", direction: "up" },
      A: { dx: -velocity, dy: 0, animation: "move", direction: "left" },
      S: { dx: 0, dy: velocity, animation: "move", direction: "down" },
      D: { dx: velocity, dy: 0, animation: "move", direction: "right" },
    };

    const movementPriority: Array<keyof typeof movementMap> = ["W", "A", "S", "D"];

    const pressedKey = movementPriority.find((key) => this.inputManager.isKeyPressed(key));

    if (pressedKey) {
      const { dx, dy, animation, direction } = movementMap[pressedKey];
      this.character.x += dx;
      this.character.y += dy;
      playAnimation(animation, direction);
      this.lastDirection = direction;
      isMoving = true;
    }

    if (!isMoving) {
      this.character.stop();
      setIdleTexture(this.lastDirection);
    }

    // Clamp the character within the bounds of the game
    this.character.x = Phaser.Math.Clamp(this.character.x, 0, scene.cameras.main.width);
    this.character.y = Phaser.Math.Clamp(this.character.y, 0, scene.cameras.main.height);
  }

}