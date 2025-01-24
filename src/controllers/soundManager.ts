export class SoundManager {
  static playGameMusic(scene: Phaser.Scene) {
    scene.sound.play("main_game_music", {
      loop: true,
      volume: 1
    })
  }
}
