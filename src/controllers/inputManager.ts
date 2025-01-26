export class InputManager {
  private scene: Phaser.Scene;
  private keys: { [key: string]: Phaser.Input.Keyboard.Key } = {};

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.initKeyboardInput();
  }

  private initKeyboardInput() {
    this.keys['W'] = this.scene.input.keyboard!.addKey('W');
    this.keys['A'] = this.scene.input.keyboard!.addKey('A');
    this.keys['S'] = this.scene.input.keyboard!.addKey('S');
    this.keys['D'] = this.scene.input.keyboard!.addKey('D');
    this.keys['E'] = this.scene.input.keyboard!.addKey('E');
  }

  public isKeyPressed(key: string): boolean {
    return this.keys[key]?.isDown || false;
  }
}