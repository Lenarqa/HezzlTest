class gameBeginScene extends Phaser.Scene {

    constructor() {
        super("gameBeingScene");
    }
    
    preload(){
        console.log("Welcom to gameBeginScene");
        this.load.image('cross', '../img/x.png');
        this.load.image('zero', '../img/o.png');
    }

    create(){
        // Задаем цвет заднего фона
        let cam  = this.cameras.add(0, 0, 900, 600);
        cam.setBackgroundColor(0x2a66b6);

        let zero = this.add.sprite(100, 100, 'zero')
            .setInteractive()
            .on('pointerover', function(){
                this.setTint(0xe0e4f1);
            })
            .on('pointerout', function(){
                this.setTint();
            })
            .on('pointerdown', this.nextLVL.bind(this, 'zero'));
        
        let cross = this.add.sprite(200, 100, 'cross')
            .setInteractive()
            .on('pointerover', function(){
                this.setTint(0xe0e4f1);
            })
            .on('pointerout', function(){
                this.setTint();
            })
            .on('pointerdown', this.nextLVL.bind(this, 'cross'));
    }

    
    nextLVL(spriteNameVal)
    {
        this.scene.start('gameScene', {spriteName: spriteNameVal});
    }
   
    update(){

    }

}