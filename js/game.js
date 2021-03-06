var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: [gameBeginScene, gameScene, winScene, loseScene, gameSixty]
};

var game = new Phaser.Game(config);
