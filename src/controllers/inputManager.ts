export class InputManager {
  private scene: Phaser.Scene;
  private keys: { [key: string]: Phaser.Input.Keyboard.Key } = {};
  private pointerDown: boolean = false;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.initKeyboardInput();
    this.initPointerInput();
  }

  private initKeyboardInput() {
    this.keys['W'] = this.scene.input.keyboard!.addKey('W');
    this.keys['A'] = this.scene.input.keyboard!.addKey('A');
    this.keys['S'] = this.scene.input.keyboard!.addKey('S');
    this.keys['D'] = this.scene.input.keyboard!.addKey('D');
    this.keys['E'] = this.scene.input.keyboard!.addKey('E');
  }

  private initPointerInput() {
    this.scene.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
      this.pointerDown = true;
    });

    this.scene.input.on('pointermove', (pointer: Phaser.Input.Pointer) => {
      if (this.pointerDown) {
        console.log("Pointer down and swiping");

      }
    });

    this.scene.input.on('pointerup', () => {
      this.pointerDown = false;
    });
  }

  public isKeyPressed(key: string): boolean {
    return this.keys[key]?.isDown || false;
  }

  public getPointerDown(): boolean {
    return this.pointerDown;
  }
}