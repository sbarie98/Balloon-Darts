class Play extends Phaser.Scene {
    constructor() {
      super("playScene");
    }
    
    create() {
      this.add.text(20, 20, "Balloon Darts Play");
    }
  }