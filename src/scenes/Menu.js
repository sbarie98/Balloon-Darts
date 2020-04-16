class Menu extends Phaser.Scene {
  constructor() {
    super("menuScene");
  }

  preload() {
    // load audio
    this.load.audio('sfx_select', './assets/selectBeep.wav');
    this.load.audio('sfx_pop', './assets/popBalloon.wav');
    this.load.audio('sfx_dart', './assets/dartWoosh.wav');
    this.load.audio('background', './assets/loop-circus.wav');
    this.load.audio('sfx_cheer', './assets/cheer.wav');
  }
  
  create() {

    let bgMusic = this.sound.add('background', {loop: true});
    bgMusic.play();
    this.scene.start("playScene");


    // menu display
    let menuConfig = {
      fontFamily: 'Courier',
      fontSize: '16px',
      backgroundColor: '#F3B141',
      color: '#843605',
      align: 'center',
      padding: {
        top: 5,
        bottom: 5,
      },
      fixedWidth: 0
    }

    // show menu text
    let centerX = game.config.width/2;
    let centerY = game.config.width/2;
    let textSpacer = 64;
  
    this.add.text(centerX, centerY - textSpacer*4, 'BALLOON DARTS!', menuConfig).setOrigin(0.5);
    this.add.text(centerX, centerY - textSpacer*2, 'Player 1: Use (A) and (D) to move left/right & (F) to Fire', menuConfig).setOrigin(0.5);
    this.add.text(centerX, centerY - textSpacer, 'Player 2: Use ←→ arrows to move left/right & (M) to Fire', menuConfig).setOrigin(0.5);
    menuConfig.backgroundColor = '#00FF00';
    menuConfig.color = '#000';
    this.add.text(centerX, centerY + textSpacer, 'Press "E" for Easy or "H" for Hard', menuConfig).setOrigin(0.5);  
    
    // define keys
    keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    keyH = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(keyE)) {
      // easy mode
      game.settings = {
        spaceshipSpeed: 3,
        gameTimer: 60000    
      }
      this.sound.play('sfx_select');
      this.scene.start("playScene");    
    }

    if (Phaser.Input.Keyboard.JustDown(keyH)) {
      // hard mode
      game.settings = {
        spaceshipSpeed: 4,
        gameTimer: 45000    
      }
      this.sound.play('sfx_select');
      this.scene.start("playScene");    
    }
  }
}