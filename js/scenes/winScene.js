class winScene extends Phaser.Scene {

    constructor() {
        super("winScene");
    }

    preload() {
        this.load.image('cross', '../img/x.png');
        this.load.image('zero', '../img/o.png');
        this.load.image('restartBtn', '../img/restartBtn.png');
    }

    create() {
        console.log("Welcom to winScene!");

        // Задаем цвет заднего фона
        let cam  = this.cameras.add(0, 0, 900, 600);
        cam.setBackgroundColor(0x2a66b6);

        this.add.text(180, 120, 'ПОБЕДА', {font: '55px Arial'});

        this.add.sprite(300, 300, 'restartBtn')
            .setInteractive()
            .on('pointerover', function(){
                this.setTint(0xe0e4f1);
            })
            .on('pointerout', function(){
                this.setTint();
            })
            .on('pointerdown', this.nextLVL.bind(this));

    }

    nextLVL() {
        // обнуляем поле!
        clearMap();
        this.scene.start('gameBeginScene');
    }
}